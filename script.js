/* ============================================================
   SECRET BOX — MAIN SCRIPT
   Developed by: Ahmed Ali (Black Lord / السيد الأسود)
   Version: 15.0 — Modular Edition
   ============================================================
   أعطيك معلومات مجاناً — لا تبخل عليّ وانشر الموقع ليستفيد غيرك
   ============================================================
   هذا الملف مصمم ليعمل في جميع الصفحات
   يتعرف تلقائياً على العناصر الموجودة ويُهيّئها فقط
   ============================================================ */

(function () {
  'use strict';

  /* ============================================================
     SECTION 1: GLOBAL CONFIGURATION
     ============================================================ */
  const CONFIG = {
    loaderDuration: 3400,
    loaderMessages: [
      'INITIALIZING SECRET BOX...',
      'LOADING COMMANDS DATABASE...',
      'INDEXING SECURITY INFO...',
      'FETCHING COMPANIES DATA...',
      'LOADING GLOSSARY TERMS...',
      'PREPARING BOOKS...',
      'ACCESS GRANTED ✓'
    ],
    matrix: {
      enabled: true,
      fontSize: 15,
      opacity: 0.13,
      chars: 'アカサタナハマヤラワ0123456789ABCDEF#$%&@*<>{}[]أبجد',
      speed: 55
    },
    typed: {
      phrases: [
        '> Ethical Hacking & Penetration Testing',
        '> Termux | Kali | Linux | Android',
        '> Web Security • OSINT • Crypto',
        '> 1500+ Commands Database',
        '> 200 Companies • 350 Terms',
        '> 30 Free Books — Download Now',
        '> Learn • Protect • Share'
      ],
      typeSpeed: 55,
      deleteSpeed: 25,
      pauseTime: 1800
    },
    counters: {
      duration: 26,
      steps: 60
    },
    toast: {
      duration: 2200
    },
    scrollTopThreshold: 500,
    headerScrollThreshold: 60,
    commandDisplayLimit: 600,
    dev: {
      name: 'أحمد علي',
      nick: 'السيد الأسود',
      title: 'DEVELOPER',
      tags: ['Ethical Hacking', 'Termux', 'Kali Linux', 'Linux', 'Cyber Security', 'Arabic Content']
    }
  };

  /* ============================================================
     SECTION 2: UTILITY FUNCTIONS
     ============================================================ */
  const $ = (selector, parent) => (parent || document).querySelector(selector);
  const $$ = (selector, parent) => Array.from((parent || document).querySelectorAll(selector));

  const on = (el, event, handler) => {
    if (el && typeof el.addEventListener === 'function') {
      el.addEventListener(event, handler);
    }
  };

  const debounce = (fn, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  };

  const throttle = (fn, limit) => {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        fn.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  const escapeHtml = (str) => {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  };

  const log = (...args) => {
    if (window.console && console.log) {
      console.log('%c[SecretBox]', 'color:#00ff9c;font-weight:bold', ...args);
    }
  };

  /* ============================================================
     SECTION 3: LOADER
     ============================================================ */
  function initLoader() {
    const loader = $('#loader');
    if (!loader) return;

    const loadText = $('#loaderText') || $('#lt');
    let index = 0;

    if (loadText) {
      const interval = setInterval(() => {
        index++;
        if (index < CONFIG.loaderMessages.length) {
          loadText.textContent = CONFIG.loaderMessages[index];
        } else {
          clearInterval(interval);
        }
      }, CONFIG.loaderDuration / CONFIG.loaderMessages.length);
    }

    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('hide');
      }, CONFIG.loaderDuration);
    });

    // Fallback if load event already fired
    if (document.readyState === 'complete') {
      setTimeout(() => {
        loader.classList.add('hide');
      }, CONFIG.loaderDuration);
    }
  }

  /* ============================================================
     SECTION 4: MATRIX BACKGROUND
     ============================================================ */
  function initMatrix() {
    if (!CONFIG.matrix.enabled) return;

    const canvas = $('#matrix') || $('#mx');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let cols, drops;
    const chars = CONFIG.matrix.chars;
    const fontSize = CONFIG.matrix.fontSize;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.floor(canvas.width / fontSize);
      drops = Array(cols).fill(1);
    }

    function draw() {
      ctx.fillStyle = 'rgba(4, 6, 10, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00ff9c';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    resize();
    setInterval(draw, CONFIG.matrix.speed);
    window.addEventListener('resize', debounce(resize, 200));
  }

  /* ============================================================
     SECTION 5: TYPED TEXT ANIMATION
     ============================================================ */
  function initTyped() {
    const el = $('#typed') || $('#typedText');
    if (!el) return;

    const phrases = CONFIG.typed.phrases;
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function loop() {
      const current = phrases[phraseIndex];

      if (!deleting) {
        el.textContent = current.substring(0, ++charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(loop, CONFIG.typed.pauseTime);
          return;
        }
        setTimeout(loop, CONFIG.typed.typeSpeed);
      } else {
        el.textContent = current.substring(0, --charIndex);
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(loop, 300);
          return;
        }
        setTimeout(loop, CONFIG.typed.deleteSpeed);
      }
    }

    setTimeout(loop, 3500);
  }

  /* ============================================================
     SECTION 6: NAVIGATION
     ============================================================ */
  function initNav() {
    const header = $('#header') || $('#hdr');
    const burger = $('#burger') || $('#bgb') || $('#bgbtn');
    const navLinks = $('#navLinks') || $('#nl');

    if (burger && navLinks) {
      on(burger, 'click', () => {
        burger.classList.toggle('open');
        burger.classList.toggle('on');
        navLinks.classList.toggle('open');
        navLinks.classList.toggle('on');
      });

      $$('a', navLinks).forEach((link) => {
        on(link, 'click', () => {
          burger.classList.remove('open', 'on');
          navLinks.classList.remove('open', 'on');
        });
      });
    }

    // Active link based on scroll
    const sections = $$('section[id]');
    const navAnchors = $$('.nav-links a[href^="#"]');
    const backToTop = $('#backToTop') || $('#top');

    function onScroll() {
      const y = window.scrollY;

      if (header) header.classList.toggle('scrolled', y > CONFIG.headerScrollThreshold);
      if (header) header.classList.toggle('sc', y > CONFIG.headerScrollThreshold);

      if (backToTop) backToTop.classList.toggle('show', y > CONFIG.scrollTopThreshold);
      if (backToTop) backToTop.classList.toggle('sh', y > CONFIG.scrollTopThreshold);

      if (sections.length && navAnchors.length) {
        let current = 'home';
        sections.forEach((sec) => {
          if (y >= sec.offsetTop - 160) current = sec.id;
        });
        navAnchors.forEach((a) => {
          const href = a.getAttribute('href');
          a.classList.toggle('active', href === '#' + current);
          a.classList.toggle('act', href === '#' + current);
        });
      }
    }

    window.addEventListener('scroll', throttle(onScroll, 100));
    onScroll();

    if (backToTop) {
      on(backToTop, 'click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Escape key closes menu
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && burger && navLinks) {
        burger.classList.remove('open', 'on');
        navLinks.classList.remove('open', 'on');
      }
    });
  }

  /* ============================================================
     SECTION 7: REVEAL ANIMATIONS
     ============================================================ */
  function initReveal() {
    const elements = $$('.reveal, .rv');
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('in'), i * 45);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
  }

  /* ============================================================
     SECTION 8: COUNTERS
     ============================================================ */
  function initCounters() {
    const counters = $$('.stat .num, .st .n, [data-target], [data-t]');
    if (!counters.length) return;

    if (!('IntersectionObserver' in window)) {
      counters.forEach((c) => {
        const target = +c.dataset.target || +c.dataset.t || 0;
        c.textContent = target + '+';
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((c) => observer.observe(c));
  }

  function animateCounter(el) {
    const target = +el.dataset.target || +el.dataset.t || 0;
    if (!target) return;

    const step = Math.max(1, Math.ceil(target / CONFIG.counters.steps));
    let current = 0;

    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target + '+';
        clearInterval(interval);
      } else {
        el.textContent = current;
      }
    }, CONFIG.counters.duration);
  }

  /* ============================================================
     SECTION 9: FAQ ACCORDION
     ============================================================ */
  function initFAQ() {
    const items = $$('.faq-item, .faq');
    if (!items.length) return;

    items.forEach((item) => {
      const question = $('.faq-q, .fqq', item);
      if (!question) return;

      on(question, 'click', () => {
        const isOpen = item.classList.contains('open', 'op');

        // Close all
        items.forEach((i) => i.classList.remove('open', 'op'));

        // Open current if was closed
        if (!isOpen) item.classList.add('open', 'op');
      });
    });
  }

  /* ============================================================
     SECTION 10: TABS
     ============================================================ */
  function initTabs() {
    const tabContainers = $$('[data-tabs]');
    if (!tabContainers.length) return;

    tabContainers.forEach((container) => {
      const tabs = $$('.tab', container);
      const contents = $$('.tab-content', container);

      tabs.forEach((tab) => {
        on(tab, 'click', () => {
          tabs.forEach((t) => t.classList.remove('active'));
          contents.forEach((c) => c.classList.remove('active'));

          tab.classList.add('active');
          const target = tab.dataset.tab;
          const content = container.querySelector('[data-tab-content="' + target + '"]');
          if (content) content.classList.add('active');
        });
      });

      // Activate first tab by default
      if (tabs.length && !tabs.some((t) => t.classList.contains('active'))) {
        tabs[0].click();
      }
    });
  }

  /* ============================================================
     SECTION 11: COPY BUTTONS
     ============================================================ */
  function initCopyButtons() {
    const buttons = $$('[data-copy], [data-c], .copy-btn');
    if (!buttons.length) return;

    buttons.forEach((btn) => {
      on(btn, 'click', async () => {
        const container = btn.closest('.code-box, .cb');
        const codeEl = container ? container.querySelector('pre') : null;
        const text = codeEl ? codeEl.innerText : '';

        if (!text) return;

        try {
          await navigator.clipboard.writeText(text);
          showCopySuccess(btn);
        } catch (err) {
          // Fallback
          const textarea = document.createElement('textarea');
          textarea.value = text;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          try {
            document.execCommand('copy');
            showCopySuccess(btn);
          } catch (e) {
            showToast('❌ فشل النسخ', 'error');
          }
          document.body.removeChild(textarea);
        }
      });
    });
  }

  function showCopySuccess(btn) {
    const original = btn.textContent;
    btn.textContent = '✓';
    btn.classList.add('copied', 'ok');

    setTimeout(() => {
      btn.textContent = original || 'نسخ';
      btn.classList.remove('copied', 'ok');
    }, 1500);
  }

  /* ============================================================
     SECTION 12: TOAST NOTIFICATIONS
     ============================================================ */
  function showToast(message, type) {
    const toast = $('#toast');
    if (!toast) return;

    toast.textContent = message || '✅ تم';
    toast.classList.remove('error');
    if (type === 'error') toast.classList.add('error');
    toast.classList.add('show', 'sh');

    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('show', 'sh');
    }, CONFIG.toast.duration);
  }

  // Expose globally
  window.showToast = showToast;

  /* ============================================================
     SECTION 13: DOWNLOAD FUNCTION (Blob API)
     ============================================================ */
  function downloadFile(filename, content, mimeType) {
    try {
      const blob = new Blob([content], {
        type: (mimeType || 'text/plain') + ';charset=utf-8'
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => URL.revokeObjectURL(url), 100);
      return true;
    } catch (err) {
      log('Download error:', err);
      showToast('❌ فشل التحميل', 'error');
      return false;
    }
  }

  // Expose globally
  window.downloadFile = downloadFile;

  function initDownloadButtons() {
    const buttons = $$('[data-file], [data-book], .file-dl, .fd');
    if (!buttons.length) return;

    buttons.forEach((btn) => {
      on(btn, 'click', () => {
        const fileKey = btn.dataset.file || btn.dataset.book;
        if (!fileKey) return;

        const generator = window.SB_DATA && window.SB_DATA.getFileContent;
        if (!generator) {
          log('No data loader found for:', fileKey);
          return;
        }

        const result = generator(fileKey);
        if (!result || !result.content) {
          showToast('⚠️ الملف غير متوفر', 'error');
          return;
        }

        // Visual feedback
        btn.classList.add('loading', 'ld');
        btn.textContent = '⏳';

        setTimeout(() => {
          const success = downloadFile(result.filename, result.content);

          if (success) {
            btn.classList.remove('loading', 'ld');
            btn.classList.add('done', 'dn');
            btn.textContent = '✓';
            showToast('✅ تم تحميل: ' + (result.title || result.filename));

            setTimeout(() => {
              btn.classList.remove('done', 'dn');
              btn.textContent = '⬇';
            }, 1800);
          } else {
            btn.classList.remove('loading', 'ld');
            btn.textContent = '⬇';
          }
        }, 250);
      });
    });
  }

  /* ============================================================
     SECTION 14: DEVELOPER MODAL
     ============================================================ */
  function initDevModal() {
    const modal = $('#devModal') || $('#developerModal');
    if (!modal) return;

    // Ensure modal content exists
    const content = $('.modal-content, .mc', modal);

    // Close handlers
    const closeBtn = $('.modal-close, .mcl', modal);
    if (closeBtn) {
      on(closeBtn, 'click', closeDevModal);
    }

    on(modal, 'click', (e) => {
      if (e.target === modal) closeDevModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDevModal();
    });

    // Global open/close
    window.openDevModal = openDevModal;
    window.closeDevModal = closeDevModal;
    window.openDev = openDevModal;
    window.closeDev = closeDevModal;
  }

  function openDevModal() {
    const modal = $('#devModal') || $('#developerModal');
    if (!modal) return;
    modal.classList.add('show', 'sh');
    document.body.style.overflow = 'hidden';
  }

  function closeDevModal() {
    const modal = $('#devModal') || $('#developerModal');
    if (!modal) return;
    modal.classList.remove('show', 'sh');
    document.body.style.overflow = '';
  }

  /* ============================================================
     SECTION 15: CARD HOVER GLOW
     ============================================================ */
  function initCardHover() {
    const cards = $$('.card, .co');
    if (!cards.length) return;

    cards.forEach((card) => {
      on(card, 'mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
        card.style.setProperty('--my', (e.clientY - rect.top) + 'px');
      });
    });
  }

  /* ============================================================
     SECTION 16: KEYBOARD SHORTCUTS
     ============================================================ */
  function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Ctrl+K or Cmd+K -> focus search
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        const searchInput = $('#cmdSearch') || $('#search') || $('.search-wrap input');
        if (searchInput) {
          searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setTimeout(() => searchInput.focus(), 500);
        }
      }

      // Ctrl+Home -> top
      if ((e.ctrlKey || e.metaKey) && e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // Ctrl+D -> open dev modal
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'd') {
        e.preventDefault();
        openDevModal();
      }
    });
  }

  /* ============================================================
     SECTION 17: SCROLL PROGRESS BAR
     ============================================================ */
  function initScrollProgress() {
    const progressBar = $('#scrollProgress');
    if (!progressBar) return;

    function update() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = percent + '%';
    }

    window.addEventListener('scroll', throttle(update, 50));
    update();
  }

  /* ============================================================
     SECTION 18: SMOOTH SCROLL FOR ANCHOR LINKS
     ============================================================ */
  function initSmoothScroll() {
    $$('a[href^="#"]').forEach((anchor) => {
      on(anchor, 'click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - 90;

        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        history.pushState(null, '', href);
      });
    });
  }

  /* ============================================================
     SECTION 19: LAZY LOAD IMAGES (Future-proof)
     ============================================================ */
  function initLazyImages() {
    const images = $$('img[data-src]');
    if (!images.length) return;

    if (!('IntersectionObserver' in window)) {
      images.forEach((img) => (img.src = img.dataset.src));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        });
      },
      { rootMargin: '100px' }
    );

    images.forEach((img) => observer.observe(img));
  }

  /* ============================================================
     SECTION 20: LOCAL STORAGE HELPERS
     ============================================================ */
  const storage = {
    set(key, value) {
      try {
        localStorage.setItem('sb_' + key, JSON.stringify(value));
      } catch (e) {
        log('Storage set error:', e);
      }
    },
    get(key, fallback) {
      try {
        const val = localStorage.getItem('sb_' + key);
        return val ? JSON.parse(val) : fallback;
      } catch (e) {
        return fallback;
      }
    },
    remove(key) {
      try {
        localStorage.removeItem('sb_' + key);
      } catch (e) {
        log('Storage remove error:', e);
      }
    }
  };

  window.SBStorage = storage;

  /* ============================================================
     SECTION 21: THEME TOGGLE (Extensible)
     ============================================================ */
  function initTheme() {
    const savedTheme = storage.get('theme', 'dark');
    document.documentElement.dataset.theme = savedTheme;

    const toggleBtn = $('#themeToggle');
    if (!toggleBtn) return;

    on(toggleBtn, 'click', () => {
      const current = document.documentElement.dataset.theme;
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      storage.set('theme', next);
      showToast(next === 'dark' ? '🌙 الوضع الليلي' : '☀️ الوضع النهاري');
    });
  }

  /* ============================================================
     SECTION 22: VISIT COUNTER (Local)
     ============================================================ */
  function initVisitCounter() {
    const counterEl = $('#visitCount');
    if (!counterEl) return;

    let count = storage.get('visits', 0);
    count++;
    storage.set('visits', count);
    counterEl.textContent = count;
  }

  /* ============================================================
     SECTION 23: ONLINE/OFFLINE STATUS
     ============================================================ */
  function initOnlineStatus() {
    function update() {
      if (!navigator.onLine) {
        showToast('📡 أنت غير متصل بالإنترنت', 'error');
      }
    }

    window.addEventListener('offline', update);
    window.addEventListener('online', () => showToast('✅ عاد الاتصال'));
  }

  /* ============================================================
     SECTION 24: CONSOLE BRANDING
     ============================================================ */
  function initConsoleBranding() {
    const styles = {
      title: 'background:linear-gradient(90deg,#00ff9c,#00d9ff);color:#04120b;font-size:20px;font-weight:bold;padding:8px 16px;border-radius:8px',
      dev: 'color:#ff2d95;font-size:14px;font-weight:bold',
      info: 'color:#00ff9c;font-size:13px',
      warn: 'color:#ff3860;font-size:13px'
    };

    console.log('%c🔐 SECRET BOX — Modular Edition v15', styles.title);
    console.log('%cالمطور: أحمد علي — السيد الأسود 🖤', styles.dev);
    console.log('%c🎁 أعطيك معلومات مجاناً — لا تبخل عليّ وانشر الموقع ليستفيد غيرك', styles.info);
    console.log('%c⚠️ للأغراض التعليمية والأخلاقية فقط', styles.warn);
    console.log('%cاختصارات: Ctrl+K (بحث) | Ctrl+D (المطور) | Ctrl+Home (للأعلى)', styles.info);
  }

  /* ============================================================
     SECTION 25: URL PARAMETER HANDLING
     ============================================================ */
  function initUrlParams() {
    const params = new URLSearchParams(window.location.search);

    // Auto-open dev modal via ?dev=1
    if (params.get('dev') === '1') {
      setTimeout(openDevModal, 1000);
    }

    // Auto-search via ?q=term
    const q = params.get('q');
    if (q) {
      const searchInput = $('#cmdSearch') || $('#search');
      if (searchInput) {
        setTimeout(() => {
          searchInput.value = q;
          searchInput.dispatchEvent(new Event('input', { bubbles: true }));
          searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 1200);
      }
    }
  }

  /* ============================================================
     SECTION 26: PERFORMANCE MONITOR (Dev only)
     ============================================================ */
  function initPerformanceMonitor() {
    if (!window.performance || !window.performance.timing) return;

    window.addEventListener('load', () => {
      setTimeout(() => {
        const timing = window.performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        if (loadTime > 0) {
          log('⏱️ Load time:', loadTime + 'ms');
        }
      }, 0);
    });
  }

  /* ============================================================
     SECTION 27: PRINT FRIENDLY
     ============================================================ */
  function initPrintFriendly() {
    const printBtns = $$('[data-print]');
    printBtns.forEach((btn) => {
      on(btn, 'click', () => window.print());
    });
  }

  /* ============================================================
     SECTION 28: EXTERNAL LINKS SAFETY
     ============================================================ */
  function initExternalLinks() {
    $$('a[target="_blank"]').forEach((link) => {
      if (!link.rel.includes('noopener')) {
        link.setAttribute('rel', link.rel + ' noopener noreferrer');
      }
    });
  }

  /* ============================================================
     SECTION 29: SHARE FUNCTIONALITY
     ============================================================ */
  function initShareButtons() {
    const shareBtns = $$('[data-share]');
    if (!shareBtns.length) return;

    shareBtns.forEach((btn) => {
      on(btn, 'click', async () => {
        const shareData = {
          title: 'Secret Box — أحمد علي',
          text: 'أعطيك معلومات مجاناً — لا تبخل عليّ وانشر الموقع ليستفيد غيرك',
          url: window.location.href
        };

        if (navigator.share) {
          try {
            await navigator.share(shareData);
          } catch (e) {
            // User cancelled
          }
        } else {
          try {
            await navigator.clipboard.writeText(shareData.url);
            showToast('🔗 تم نسخ الرابط');
          } catch (e) {
            showToast('❌ فشل النسخ', 'error');
          }
        }
      });
    });
  }

  /* ============================================================
     SECTION 30: INITIALIZATION
     ============================================================ */
  function init() {
    log('🚀 Initializing Secret Box...');

    initLoader();
    initMatrix();
    initTyped();
    initNav();
    initReveal();
    initCounters();
    initFAQ();
    initTabs();
    initCopyButtons();
    initDownloadButtons();
    initDevModal();
    initCardHover();
    initKeyboardShortcuts();
    initScrollProgress();
    initSmoothScroll();
    initLazyImages();
    initTheme();
    initVisitCounter();
    initOnlineStatus();
    initUrlParams();
    initPrintFriendly();
    initExternalLinks();
    initShareButtons();
    initConsoleBranding();
    initPerformanceMonitor();

    log('✅ All modules loaded');
  }

  /* ============================================================
     RUN ON DOM READY
     ============================================================ */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* ============================================================
     EXPOSE PUBLIC API
     ============================================================ */
  window.SecretBox = {
    version: '15.0',
    dev: CONFIG.dev,
    download: downloadFile,
    toast: showToast,
    openDev: openDevModal,
    closeDev: closeDevModal,
    storage: storage,
    config: CONFIG,
    utils: { $, $$, on, debounce, throttle, escapeHtml }
  };

  /* ============================================================
     END OF FILE
     ============================================================
     تم التطوير بواسطة: أحمد علي — السيد الأسود 🖤
     أعطيك معلومات مجاناً — لا تبخل عليّ وانشر الموقع ليستفيد غيرك
     ============================================================ */
})();