const fs = require('fs');
const path = 'D:/AMMU/Happy Bday AMMU/assets/audio/neeve neeve.mpeg';
const sampleRate = 22050;
const seconds = 20;
const chunks = [];

for (let i = 0; i < sampleRate * seconds; i += 1) {
  const t = i / sampleRate;
  const a = Math.sin(2 * Math.PI * 220 * t);
  const b = Math.sin(2 * Math.PI * 330 * (t + 0.02));
  const c = Math.sin(2 * Math.PI * 440 * (t * 0.5 + 0.1));
  const envelope = 0.25 + 0.35 * Math.sin(2 * Math.PI * 0.35 * t);
  const sample = (a * 0.35 + b * 0.25 + c * 0.15) * envelope;
  const clamped = Math.max(-1, Math.min(1, sample));
  const pcm = Math.round(clamped * 32767);
  const buf = Buffer.alloc(2);
  buf.writeInt16LE(pcm, 0);
  chunks.push(buf);
}

const header = Buffer.alloc(44);
header.write('RIFF', 0, 4, 'ascii');
header.writeUInt32LE(36 + chunks.length * 2, 4);
header.write('WAVE', 8, 4, 'ascii');
header.write('fmt ', 12, 4, 'ascii');
header.writeUInt32LE(16, 16);
header.writeUInt16LE(1, 20);
header.writeUInt16LE(1, 22);
header.writeUInt32LE(sampleRate, 24);
header.writeUInt32LE(sampleRate * 2, 28);
header.writeUInt16LE(2, 32);
header.writeUInt16LE(16, 34);
header.write('data', 36, 4, 'ascii');
header.writeUInt32LE(chunks.length * 2, 40);

const wav = Buffer.concat([header, ...chunks]);
fs.writeFileSync(path, wav);
console.log('created', fs.statSync(path).size, 'bytes');
