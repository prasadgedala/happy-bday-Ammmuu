const loveLetterContent = {
  text: `My Dearest Ramya Prasad,

Happy Birthday to the most beautiful, kind, and wonderful person in my life.

🌸❤️ Ammmuuuu, mana story gurinchi alochisthe first gurthochedi July 11, 2026. Ninnu first time Durgam Cheruvu Metro daggara chusinappudu nee smile naaku chala nachindi. Bike meeda ninnu teesukeltu mirror lo ninnu chusthu nalo nene navvukunna moments ippatiki gurthunnayi. 😅 Shilparamam lo aa chinna matti illu daggara kurchuni “Idi mana illaithe entha baguntundo kada” ani anukunnappude, neetho oka beautiful future imagine chesukovadam start chesa. ❤️

 🫂🌹💋 July 18 na same colour dresses vesukovadam, cinema lo first time nee cheyyi pattukovadam, July 26 na mana first hug… ivanni naaku chala special memories. August 2 na nee kosam first rose teesukochi, nee smile chusina happiness inka gurthundi. Aa roju mana first kiss jarigina moment aithe eppatiki marchipolenu. Appati nunchi nuvvu naa life lo entha special o naaku inka baaga ardham ayyindi. ❤️🥹

 🙏🏍️🌧️ August 8 na Karmanghat Hanuman Temple ki velladam, daari thapputhu kalisi navvukovadam, chinna alakalaki sorry cheppukovadam, Charminar streets lo tiragadam… anni beautiful memories. Maa amma kosam nuvvu things konnappudu naaku chala happy ga anipinchindi. Varsham padinappudu naa jacket neeku ivvadam, tarvatha park lo kurchuni mana pelli gurinchi, future gurinchi matladukovadam… aa roju nuvvu naa pakkana unte chaalu anipinchindi. ❤️

  🥰🍦☕ Nijam cheppalante, naaku mana romantic moments matrame kaadu, mana chinna chinna memories kuda chala ishtam. Neetho lunch cheyyadam, ice cream thintoo tiragadam, coffee thaguthu silly topics matladukovadam, okarinokaram tease chesukovadam, reason lekunda navvukovadam… ivanni naaku precious. Neetho unte normal day kuda special day la anipisthundi. Nuvvu pakkana unte simple moments kuda lifelong memories avuthayi, Cutiee. ❤️🫶

  🏡💑❤️ Oka roju manaki mana own home undali, andulo mana navvulu, chinna chinna godavalu, malli kalisipovadalu undali. Weekend lo kalisi bayataki vellali, favourite food thinali, movies chudali, okarinokaram care chesukovali. Life lo anni perfect ga undakapovachu, kani problems vachinappudu iddaram kalisi face cheyyali. Nee dreams ki support ga undali, nee bad days lo nee pakkana undali, nuvvu happy ga unnappudu neetho kalisi navvali. Adhe nenu neetho korukune life, Ammmu Talli. 🫂❤️

  💌🌹♾️ July 11 nunchi mana journey start ayyindi, kani mana story lo inka chala chapters migili unnayi. Inka chala places ki vellali, chala memories create chesukovali, okaroju mana old memories gurthuchesukuntu kalisi navvukovali. Nuvvu naa life lo ki vachinanduku chala happy ga unna. Future ela untundo teliyadu, kani aa future lo nuvvu undali, nenu undali, manam kalisi mana life ni beautiful ga build chesukovali ani korukuntunna. Nuvvu naa Arjun aithe, nenu nee Krishnudi ni. 😄❤️ I love you Nanna.. mana first meeting nunchi mana forever varaku, prati roju ninnu malli malli love cheyyalani undi. ❤️🫂🌹

Happy Birthday, my love.

With all my heart,
Your Sai Prasad ❤️

Forever yours. 💍`
};

const loveReasons = [
  'Your beautiful smile.',
  'Your caring and innocent heart.',
  'The happiness you bring into my life.',
  'The way you make ordinary moments special.',
  'Your strength and kindness.',
  'The future I dream of building with you.',
  'The simple joy of being together.'
];

const weddingConfig = {
  date: '2026-12-13T04:00:00'
};

const galleryCaptions = [
  'Our story begins with a smile.',
  'Sweet little moments that mean everything.',
  'Every glance feels magical.',
  'Moments that bloom with love.',
  'Promises and golden memories.',
  'Forever starts with us.',
  'Little joys, big memories.',
  'A love that keeps growing.',
  'Always us, always home.'
];

const introScreen = document.getElementById('introScreen');
const introButton = document.getElementById('openSurpriseBtn');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const storyButton = document.getElementById('storyButton');
const revealItems = document.querySelectorAll('.reveal');
const backToTop = document.getElementById('backToTop');
const progressBar = document.querySelector('.scroll-progress');
const letterText = document.getElementById('letterText');
const envelope = document.getElementById('envelope');
const letterCard = document.getElementById('letterCard');
const letterContinueBtn = document.getElementById('letterContinueBtn');
const playToggle = document.getElementById('playToggle');
const volumeControl = document.getElementById('volumeControl');
const musicFallback = document.getElementById('musicFallback');
const reasonText = document.getElementById('reasonText');
const reasonsButton = document.getElementById('reasonsButton');
const replayButton = document.getElementById('replayBtn');
const giftBox = document.getElementById('giftBox');
const giftMessage = document.getElementById('giftMessage');
const moreSurpriseBtn = document.getElementById('moreSurpriseBtn');
const countdown = document.getElementById('countdownGrid');
const countdownContinueBtn = document.getElementById('countdownContinueBtn');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
const galleryArrows = document.querySelectorAll('.gallery-arrow');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxArrows = document.querySelectorAll('.lightbox-arrow');

let reasonsShown = [];
let currentGalleryIndex = 0;
let audio = null;
let countdownTimer = null;
let surpriseMessageShown = false;
let gotoSection = () => {};

function setLetterText() {
  letterText.textContent = loveLetterContent.text;
}

function showIntro() {
  if (!introScreen) return;
  introScreen.classList.remove('hidden');
}

function hideIntro() {
  if (!introScreen) return;
  introScreen.classList.add('hidden');
}

function setupIntro() {
  if (!introButton) return;
  introButton.addEventListener('click', () => {
    hideIntro();
    createFloatingHearts(16, 'intro');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function createFloatingHearts(count, type = 'page') {
  const fragment = document.createDocumentFragment();
  const maxCount = Math.min(count, 30);

  for (let index = 0; index < maxCount; index += 1) {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = index % 2 === 0 ? '❤' : '♡';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${8 + Math.random() * 14}s`;
    heart.style.animationDelay = `${Math.random() * 6}s`;
    heart.style.opacity = String(0.3 + Math.random() * 0.7);
    heart.style.fontSize = `${Math.random() * 16 + 18}px`;
    if (type === 'intro') {
      heart.style.zIndex = '210';
    }
    fragment.appendChild(heart);
  }

  document.body.appendChild(fragment);

  setTimeout(() => {
    document.querySelectorAll('.floating-heart').forEach((element) => {
      if (element && element.parentNode) {
        element.remove();
      }
    });
  }, 14000);
}

function setupRevealObserver() {
  if (!('IntersectionObserver' in window)) {
    revealItems.forEach((element) => element.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((element) => observer.observe(element));
}

function setupNavigation() {
  if (!navToggle || !navMenu) return;

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const updateActiveLink = () => {
    const scrollPosition = window.scrollY + 150;
    sections.forEach((section) => {
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (!link) return;
      const isVisible = section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition;
      link.classList.toggle('active', isVisible);
    });
  };

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
}

function setupScrollEffects() {
  const handleScroll = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
    progressBar.style.width = `${progress}%`;

    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (replayButton) {
    replayButton.addEventListener('click', () => {
      gotoSection('home');
      showIntro();
    });
  }

}

function setupLetter() {
  if (!envelope || !letterCard) return;

  const revealContinueButton = () => {
    if (letterContinueBtn) {
      letterContinueBtn.classList.remove('hidden');
    }
  };

  envelope.addEventListener('click', () => {
    envelope.classList.add('opened');
    letterCard.classList.add('visible');
    revealContinueButton();
    setTimeout(() => {
      document.querySelector('.paper-text')?.focus();
    }, 400);
  });

  envelope.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      envelope.click();
    }
  });

  if (letterContinueBtn) {
    letterContinueBtn.addEventListener('click', () => {
      gotoSection('surprise');
    });
  }

  envelope.tabIndex = 0;
  envelope.setAttribute('role', 'button');
  envelope.setAttribute('aria-label', 'Open the love letter');
}

function setupMusicPlayer() {
  const songPath = 'assets/audio/neeve%20neeve.mpeg';
  const audioElement = new Audio(songPath);
  audio = audioElement;
  audio.loop = true;

  if (musicFallback && audioElement && audioElement.canPlayType && !audioElement.canPlayType('audio/mpeg') && !audioElement.canPlayType('audio/mp3')) {
    musicFallback.hidden = false;
  }

  if (audio) {
    audio.addEventListener('error', () => {
      if (musicFallback) {
        musicFallback.hidden = false;
      }
      if (playToggle) {
        playToggle.setAttribute('aria-label', 'Play our song unavailable');
        playToggle.disabled = true;
      }
    });
  }

  if (playToggle) {
    playToggle.addEventListener('click', () => {
      if (audio.error || (musicFallback && musicFallback.hidden === false && !audio.src)) {
        if (musicFallback) musicFallback.hidden = false;
        return;
      }

      if (audio.paused) {
        audio.play().catch(() => {
          if (musicFallback) musicFallback.hidden = false;
        });
        playToggle.classList.add('is-playing');
        const player = document.querySelector('.music-player');
        if (player) player.classList.remove('paused');
        playToggle.setAttribute('aria-label', 'Pause our song');
      } else {
        audio.pause();
        playToggle.classList.remove('is-playing');
        const player = document.querySelector('.music-player');
        if (player) player.classList.add('paused');
        playToggle.setAttribute('aria-label', 'Play our song');
      }
    });
  }

  if (volumeControl) {
    volumeControl.addEventListener('input', (event) => {
      audio.volume = Number(event.target.value);
    });
  }

  if (musicFallback && (!audio.src || audio.src.endsWith('/assets/audio/neeve%20neeve.mpeg'))) {
    musicFallback.hidden = false;
  }
}

function setupGiftBox() {
  if (!giftBox || !giftMessage) return;

  let opened = false;

  const triggerGift = () => {
    if (opened) return;
    opened = true;
    giftBox.classList.add('open');
    giftMessage.classList.add('open');
    createFloatingHearts(18, 'gift');
    fireConfettiBurst();
  };

  giftBox.addEventListener('click', triggerGift);
  giftBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      triggerGift();
    }
  });

  moreSurpriseBtn.addEventListener('click', () => {
    if (!surpriseMessageShown) {
      surpriseMessageShown = true;
      const extraNote = document.createElement('p');
      extraNote.className = 'more-surprise';
      extraNote.textContent = 'Every day with you feels like a beautiful dream I never want to wake up from. 💗';
      giftMessage.appendChild(extraNote);
      moreSurpriseBtn.innerHTML = 'Tell Me Why I Love You <span aria-hidden="true">💖</span>';
      fireConfettiBurst();
      return;
    }

    gotoSection('reasons');
  });
}

function fireConfettiBurst() {
  const burst = document.createDocumentFragment();
  const colors = ['#f8b4c5', '#efd3ff', '#f7d892', '#c7d3ff', '#ffefad'];

  for (let index = 0; index < 22; index += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti';
    piece.style.left = '50%';
    piece.style.top = '45%';
    piece.style.background = colors[index % colors.length];
    piece.style.setProperty('--x', `${(Math.random() - 0.5) * 280}px`);
    piece.style.setProperty('--y', `${-80 - Math.random() * 110}px`);
    piece.style.setProperty('--rotation', `${Math.random() * 360}deg`);
    burst.appendChild(piece);
  }

  const container = document.createElement('div');
  container.className = 'confetti-burst';
  container.appendChild(burst);
  document.body.appendChild(container);

  setTimeout(() => container.remove(), 1300);
}

function setupReasons() {
  const reasonsButton = document.getElementById('reasonsButton');
  const reasonText = document.getElementById('reasonText');
  const revealCard = document.querySelector('.reason-reveal');
  const loveToast = document.getElementById('loveToast');
  const loveToastHeart = document.getElementById('loveToastHeart');

  if (!reasonsButton || !reasonText || !revealCard) return;

  let currentIndex = 0;

  const showLoveToast = () => {
    if (!loveToast) return;
    loveToast.classList.remove('hidden');
    loveToast.setAttribute('aria-hidden', 'false');
    reasonsButton.disabled = true;
  };

  const burstLoveHeart = () => {
    if (!loveToastHeart) return;

    const particleCount = 22;
    loveToastHeart.classList.add('bursting');

    for (let index = 0; index < particleCount; index += 1) {
      const particle = document.createElement('span');
      particle.className = 'love-particle';
      particle.textContent = index % 2 === 0 ? '❤' : '♡';
      particle.style.setProperty('--x', `${(Math.random() - 0.5) * 180}px`);
      particle.style.setProperty('--y', `${-50 - Math.random() * 150}px`);
      loveToastHeart.appendChild(particle);
    }

    setTimeout(() => {
      loveToast?.classList.add('hidden');
      loveToast?.setAttribute('aria-hidden', 'true');
      gotoSection('countdown');
    }, 650);
  };

  const updateReason = () => {
    if (reasonsButton.disabled) return;

    currentIndex += 1;

    if (currentIndex >= loveReasons.length) {
      reasonText.textContent = loveReasons[loveReasons.length - 1];
      showLoveToast();
      return;
    }

    reasonText.textContent = loveReasons[currentIndex];
    revealCard.classList.add('is-visible');
  };

  revealCard.classList.add('is-visible');
  reasonText.textContent = loveReasons[0];

  reasonsButton.addEventListener('click', updateReason);

  if (loveToastHeart) {
    loveToastHeart.addEventListener('click', burstLoveHeart);
  }

  reasonsButton.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      reasonsButton.click();
    }
  });
}

function setupStoryCards() {
  const storyCards = document.querySelectorAll('.story-flip-card');
  const storyContinueBtn = document.getElementById('storyContinueBtn');

  if (!storyCards.length) return;

  const updateContinueState = () => {
    const flippedCount = document.querySelectorAll('.story-flip-card.is-flipped').length;
    if (storyContinueBtn) {
      storyContinueBtn.classList.toggle('hidden', flippedCount !== storyCards.length);
    }
  };

  storyCards.forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.add('is-flipped');
      updateContinueState();
    });

    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        card.click();
      }
    });
  });

  if (storyContinueBtn) {
    storyContinueBtn.addEventListener('click', () => {
      gotoSection('gallery');
    });
  }
}

function validateWeddingDate() {
  const configDate = weddingConfig.date;
  if (!configDate) return null;

  const date = new Date(configDate);
  if (Number.isNaN(date.getTime())) return null;

  return date;
}

function setupCountdown() {
  const targetDate = validateWeddingDate();

  if (countdownContinueBtn) {
    countdownContinueBtn.addEventListener('click', () => {
      gotoSection('finale');
    });
  }

  if (!targetDate) {
    const countdownMessage = 'Our forever date is waiting to be added. Until then, every day is another beautiful step toward forever. ❤️';
    if (daysEl && hoursEl && minutesEl && secondsEl) {
      daysEl.textContent = '--';
      hoursEl.textContent = '--';
      minutesEl.textContent = '--';
      secondsEl.textContent = '--';
    }

    const note = document.querySelector('.countdown-note');
    if (note) {
      note.textContent = countdownMessage;
    }
    return;
  }

  const note = document.querySelector('.countdown-note');
  if (note) {
    note.textContent = 'Same team. Same dreams. Same life. Forever. 💗';
  }

  const updateCountdown = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      if (note) {
        note.textContent = 'Our forever has arrived. Love wins, always. 💍💖';
      }
      clearInterval(countdownTimer);
      setTimeout(() => {
        gotoSection('finale');
      }, 1200);
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  };

  updateCountdown();
  countdownTimer = setInterval(updateCountdown, 1000);
}

function setupGallery() {
  const galleryContinueBtn = document.getElementById('galleryContinueBtn');

  const updateGalleryContinue = () => {
    if (!galleryContinueBtn) return;
    const shouldShow = currentGalleryIndex === galleryItems.length - 1;
    galleryContinueBtn.classList.toggle('hidden', !shouldShow);
  };

  const setCurrentGallery = (nextIndex) => {
    currentGalleryIndex = (nextIndex + galleryItems.length) % galleryItems.length;
    galleryItems.forEach((item, index) => {
      const active = index === currentGalleryIndex;
      item.classList.toggle('active', active);
      item.setAttribute('aria-hidden', String(!active));
    });
    updateGalleryContinue();
  };

  galleryItems.forEach((item, index) => {
    const img = item.querySelector('img');
    const caption = item.querySelector('figcaption');
    if (caption) {
      caption.textContent = galleryCaptions[index];
    }

    if (img) {
      img.addEventListener('error', () => {
        const frame = item.querySelector('.gallery-frame');
        if (frame) {
          frame.classList.add('placeholder');
        }
        img.style.display = 'none';
      });
    }

    item.addEventListener('click', () => {
      openLightbox(index);
    });

    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLightbox(index);
      }
    });
  });

  galleryArrows.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.classList.contains('prev')) {
        setCurrentGallery(currentGalleryIndex - 1);
      } else {
        setCurrentGallery(currentGalleryIndex + 1);
      }
    });
  });

  function openLightbox(index) {
    const item = galleryItems[index];
    const img = item.querySelector('img');
    const caption = item.querySelector('figcaption');
    lightboxImage.src = img && img.src ? img.src : '';
    lightboxImage.alt = img ? img.alt : 'Romantic memory';
    lightboxCaption.textContent = caption ? caption.textContent : '';
    lightbox.classList.add('visible');
    lightbox.setAttribute('aria-hidden', 'false');
    currentGalleryIndex = index;
    updateGalleryContinue();

    if (index === galleryItems.length - 1) {
      setTimeout(() => {
        closeLightbox();
      }, 1800);
    }
  }

  function closeLightbox() {
    lightbox.classList.remove('visible');
    lightbox.setAttribute('aria-hidden', 'true');
  }

  if (galleryContinueBtn) {
    galleryContinueBtn.addEventListener('click', () => {
      gotoSection('letter');
    });
  }

  lightboxClose.addEventListener('click', closeLightbox);

  lightboxArrows.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.classList.contains('prev')) {
        currentGalleryIndex = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
      } else {
        currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
      }
      openLightbox(currentGalleryIndex);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (!lightbox.classList.contains('visible')) return;

    if (event.key === 'Escape') {
      closeLightbox();
    }

    if (event.key === 'ArrowRight') {
      currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
      openLightbox(currentGalleryIndex);
    }

    if (event.key === 'ArrowLeft') {
      currentGalleryIndex = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
      openLightbox(currentGalleryIndex);
    }
  });

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

function createConfettiStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .floating-heart {
      position: fixed;
      bottom: -30px;
      left: 0;
      color: rgba(242, 152, 182, 0.9);
      font-size: 22px;
      animation: riseHeart linear forwards;
      pointer-events: none;
      z-index: 120;
    }

    .confetti-burst {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 140;
    }

    .confetti {
      position: absolute;
      width: 10px;
      height: 16px;
      border-radius: 3px;
      opacity: 0.9;
      transform: rotate(var(--rotation));
      animation: confettiOut 1.2s ease-out forwards;
    }

    @keyframes riseHeart {
      0% {
        transform: translate3d(0, 0, 0) scale(0.8) rotate(0deg);
      }
      100% {
        transform: translate3d(var(--drift, 26px), -120vh, 0) scale(1.25) rotate(18deg);
      }
    }

    @keyframes confettiOut {
      0% {
        opacity: 0;
        transform: translate(0, 0) rotate(0deg);
      }
      15% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        transform: translate(var(--x), var(--y)) rotate(360deg);
      }
    }
  `;
  document.head.appendChild(style);
}

function setupPageNavigation() {
  const sections = Array.from(document.querySelectorAll('.section'));
  gotoSection = (targetId) => {
    const nextSection = document.getElementById(targetId);
    if (!nextSection) return;

    sections.forEach((section) => {
      const isActive = section.id === targetId;
      section.classList.toggle('active', isActive);
      section.style.display = isActive ? 'block' : 'none';
      if (isActive) {
        section.scrollTop = 0;
        section.querySelectorAll('.reveal').forEach((item) => item.classList.add('visible'));
      }
    });

    document.body.style.overflow = 'hidden';
  };
}

function initialize() {
  setLetterText();
  createConfettiStyles();
  showIntro();
  setupIntro();
  setupRevealObserver();
  setupNavigation();
  setupScrollEffects();
  setupLetter();
  setupPageNavigation();

  const musicToggle = document.getElementById('musicToggle');
  const musicButton = document.getElementById('playToggle');

  const setAudioState = (isPlaying) => {
    if (musicToggle) {
      musicToggle.classList.toggle('muted', !isPlaying);
      musicToggle.innerHTML = isPlaying
        ? '<i class="fa-solid fa-volume-high"></i>'
        : '<i class="fa-solid fa-volume-xmark"></i>';
      musicToggle.setAttribute('aria-label', isPlaying ? 'Mute music' : 'Play music');
    }
    if (musicButton) {
      musicButton.classList.toggle('is-playing', isPlaying);
      const playIcon = musicButton.querySelector('.play-icon');
      if (playIcon) {
        playIcon.innerHTML = isPlaying
          ? '<i class="fa-solid fa-pause"></i>'
          : '<i class="fa-solid fa-heart"></i>';
      }
    }
  };

  const safeAudioPlay = () => {
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => setAudioState(true)).catch(() => setAudioState(false));
    }
  };

  if (musicToggle) {
    musicToggle.addEventListener('click', () => {
      if (!audio) return;
      if (audio.paused) {
        audio.play().then(() => setAudioState(true)).catch(() => setAudioState(false));
      } else {
        audio.pause();
        setAudioState(false);
      }
    });
  }

  setupMusicPlayer();
  safeAudioPlay();

  if (storyButton) {
    storyButton.addEventListener('click', () => {
      gotoSection('story');
      safeAudioPlay();
    });
  }

  if (document.getElementById('openSurpriseBtn')) {
    document.getElementById('openSurpriseBtn').addEventListener('click', () => {
      safeAudioPlay();
      hideIntro();
    });
  }

  setupStoryCards();
  setupGiftBox();
  setupReasons();
  setupCountdown();
  setupGallery();
}

initialize();
