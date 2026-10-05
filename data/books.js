/* ============================================================
   SECRET BOX — BOOKS DATABASE
   Developed by: Ahmed Ali (Black Lord / السيد الأسود)
   Version: 15.0 — 30 Downloadable Books
   ============================================================
   أعطيك معلومات مجاناً — لا تبخل عليّ وانشر الموقع ليستفيد غيرك
   ============================================================
   كل كتاب يُولّد محتواه ديناميكياً من قاعدة البيانات
   ============================================================ */

(function () {
  'use strict';

  /* ============================================================
     BOOK GENERATORS — Helper Functions
     ============================================================ */

  const HR = '='.repeat(60);
  const HR2 = '─'.repeat(50);
  const HR3 = '━'.repeat(50);

  function header(title, subtitle) {
    let h = '';
    h += '╔' + '═'.repeat(58) + '╗\n';
    h += '║  ' + center(title, 54) + '  ║\n';
    if (subtitle) h += '║  ' + center(subtitle, 54) + '  ║\n';
    h += '║  ' + center('SECRET BOX', 54) + '  ║\n';
    h += '║  ' + center('أحمد علي — السيد الأسود', 54) + '  ║\n';
    h += '╚' + '═'.repeat(58) + '╝\n\n';
    return h;
  }

  function footer() {
    let f = '\n\n' + HR + '\n';
    f += '🎁 أعطيك معلومات مجاناً — لا تبخل عليّ وانشر الموقع ليستفيد غيرك\n';
    f += 'المطور: أحمد علي — السيد الأسود 🖤\n';
    f += HR + '\n';
    return f;
  }

  function center(str, width) {
    const len = str.length;
    if (len >= width) return str;
    const pad = Math.floor((width - len) / 2);
    return ' '.repeat(pad) + str + ' '.repeat(width - len - pad);
  }

  function section(num, title) {
    return '\n\n' + HR3 + '\n  ' + num + '. ' + title + '\n' + HR3 + '\n\n';
  }

  function subsection(title) {
    return '\n▶ ' + title + '\n' + HR2 + '\n';
  }

  function bullet(text) {
    return '   • ' + text + '\n';
  }

  function numbered(i, text) {
    return '   ' + i + '. ' + text + '\n';
  }

  function fromCategory(key) {
    if (!window.SB_DATA || !window.SB_DATA.raw[key]) return '';
    const cmds = window.SB_DATA.raw[key];
    let out = 'عدد الأوامر: ' + cmds.length + '\n\n';
    let lastSub = '';
    cmds.forEach((c, i) => {
      if (c.sub !== lastSub) {
        out += '\n' + HR2 + '\n  ' + c.sub + '\n' + HR2 + '\n\n';
        lastSub = c.sub;
      }
      out += '[' + (i + 1) + '] ' + c.cmd + '\n';
      out += '    💡 ' + c.desc + '\n';
      out += '    🏷️  ' + c.platform + '\n\n';
    });
    return out;
  }

  /* ============================================================
     BOOKS DEFINITIONS
     ============================================================ */

  const BOOKS = [

    /* -------- 01: Linux Master -------- */
    {
      key: 'linux-master',
      title: 'Linux Master',
      icon: '🐧',
      desc: 'كل أوامر Linux بالتفصيل مع الشرح',
      color: 'green',
      generate: () => {
        let out = header('LINUX MASTER BOOK', 'دليل شامل لأوامر Linux');
        out += 'المقدمة:\n' + HR2 + '\n';
        out += 'Linux هو نظام تشغيل مفتوح المصدر، أساس كل بيئة أمن سيبراني.\n';
        out += 'هذا الكتاب يحتوي على ' + (window.SB_DATA?.getCategoryCount('linux') || 0) + ' أمر أساسي ومتقدم.\n';
        out += section(1, 'أساسيات الملفات والمجلدات');
        out += fromCategory('linux');
        out += footer();
        return { filename: 'Linux-Master-Book.txt', content: out };
      }
    },

    /* -------- 02: Termux Master -------- */
    {
      key: 'termux-master',
      title: 'Termux Master',
      icon: '📱',
      desc: 'دليل Termux الكامل مع API',
      color: 'cyan',
      generate: () => {
        let out = header('TERMUX MASTER BOOK', 'Linux كامل على أندرويد');
        out += 'المقدمة:\n' + HR2 + '\n';
        out += 'Termux هو محاكي Linux كامل على أندرويد، يمنحك طرفية قوية بدون root.\n';
        out += 'حمّل من F-Droid (نسخة Play مهجورة)!\n\n';
        out += section(1, 'كل أوامر Termux');
        out += fromCategory('termux');
        out += section(2, 'نصائح احترافية');
        out += bullet('فعّل Wake Lock من القائمة اليسرى لمنع النوم');
        out += bullet('استخدم tmux للجلسات المتعددة');
        out += bullet('خد نسخة احتياطية من ~/.termux');
        out += bullet('ثبّت Termux:Boot لتشغيل سكربتات عند الإقلاع');
        out += bullet('استخدم proot-distro لتشغيل توزيعات Linux كاملة');
        out += footer();
        return { filename: 'Termux-Master-Book.txt', content: out };
      }
    },

    /* -------- 03: Kali Master -------- */
    {
      key: 'kali-master',
      title: 'Kali Master',
      icon: '🐉',
      desc: 'كل أدوات Kali الـ14 فئة',
      color: 'purple',
      generate: () => {
        let out = header('KALI LINUX MASTER BOOK', 'التوزيعة رقم 1 للاختراق الأخلاقي');
        out += 'المقدمة:\n' + HR2 + '\n';
        out += 'Kali Linux توزيعة Debian-based تحتوي على 600+ أداة أمنية.\n';
        out += 'عدد الأوامر في هذا الكتاب: ' + (window.SB_DATA?.getCategoryCount('kali') || 0) + '\n\n';
        out += section(1, 'فئات Kali الـ14');
        ['Information Gathering', 'Vulnerability Analysis', 'Web Applications',
         'Password Attacks', 'Wireless Attacks', 'Exploitation Tools',
         'Sniffing & Spoofing', 'Post Exploitation', 'Forensics',
         'Reporting Tools', 'Social Engineering', 'Anonymity',
         'Reverse Engineering', 'Stress Testing'].forEach((s, i) => {
          out += numbered(i + 1, s);
        });
        out += section(2, 'كل الأوامر');
        out += fromCategory('kali');
        out += section(3, 'تحذير');
        out += '⚠️ استخدم Kali فقط في بيئة آمنة أو بإذن كتابي!\n';
        out += footer();
        return { filename: 'Kali-Master-Book.txt', content: out };
      }
    },

    /* -------- 04: Windows Commands -------- */
    {
      key: 'windows-commands',
      title: 'Windows Commands',
      icon: '🪟',
      desc: 'CMD + PowerShell كامل',
      color: 'cyan',
      generate: () => {
        let out = header('WINDOWS COMMANDS BOOK', 'CMD + PowerShell');
        out += section(1, 'CMD — أوامر موجه الأوامر');
        out += fromCategory('windows');
        out += section(2, 'PowerShell');
        out += fromCategory('powershell');
        out += section(3, 'نصائح');
        out += bullet('استخدم Tab للإكمال التلقائي');
        out += bullet('F7 يعرض سجل الأوامر');
        out += bullet('cls لتنظيف الشاشة');
        out += bullet('Ctrl+C لإيقاف أمر يعمل');
        out += footer();
        return { filename: 'Windows-Commands-Book.txt', content: out };
      }
    },

    /* -------- 05: Python for Hacking -------- */
    {
      key: 'python-hacking',
      title: 'Python for Hacking',
      icon: '🐍',
      desc: 'Python في الأمن السيبراني',
      color: 'yellow',
      generate: () => {
        let out = header('PYTHON FOR HACKING', 'اللغة رقم 1 في الأمن السيبراني');
        out += 'المقدمة:\n' + HR2 + '\n';
        out += 'Python هي اللغة الأكثر استخداماً في كتابة أدوات الأمن السيبراني.\n';
        out += 'سهلة، قوية، ومكتباتها ضخمة.\n\n';
        out += section(1, 'أساسيات Python');
        out += fromCategory('python');
        out += section(2, 'مكتبات مهمة للأمن');
        out += bullet('requests — HTTP requests');
        out += bullet('scapy — تحليل الحزم');
        out += bullet('paramiko — SSH');
        out += bullet('cryptography — تشفير');
        out += bullet('BeautifulSoup — تحليل HTML');
        out += bullet('socket — اتصالات شبكية');
        out += bullet('hashlib — hash functions');
        out += bullet('base64 — ترميز');
        out += section(3, 'أمثلة عملية');
        out += '\n[مثال 1] فحص منفذ:\n';
        out += '```python\n';
        out += 'import socket\n';
        out += 's = socket.socket()\n';
        out += 's.settimeout(2)\n';
        out += 'result = s.connect_ex(("target", 80))\n';
        out += 'print("Open" if result == 0 else "Closed")\n';
        out += 's.close()\n';
        out += '```\n\n';
        out += '[مثال 2] طلب HTTP:\n';
        out += '```python\n';
        out += 'import requests\n';
        out += 'r = requests.get("https://example.com")\n';
        out += 'print(r.status_code, r.text[:100])\n';
        out += '```\n';
        out += footer();
        return { filename: 'Python-Hacking-Book.txt', content: out };
      }
    },

    /* -------- 06: Git Commands -------- */
    {
      key: 'git-commands',
      title: 'Git Commands',
      icon: '📦',
      desc: 'كل أوامر Git',
      color: 'orange',
      generate: () => {
        let out = header('GIT COMMANDS BOOK', 'نظام التحكم في الإصدارات');
        out += section(1, 'كل الأوامر');
        out += fromCategory('git');
        out += section(2, 'سير عمل يومي');
        out += numbered(1, 'git status           → اعرف الحالة');
        out += numbered(2, 'git add .            → أضف كل التغييرات');
        out += numbered(3, 'git commit -m "msg"  → التزم');
        out += numbered(4, 'git push             → ارفع');
        out += numbered(5, 'git pull             → اسحب');
        out += footer();
        return { filename: 'Git-Commands-Book.txt', content: out };
      }
    },

    /* -------- 07: Docker Master -------- */
    {
      key: 'docker-master',
      title: 'Docker Master',
      icon: '🐳',
      desc: 'Docker + Compose كامل',
      color: 'cyan',
      generate: () => {
        let out = header('DOCKER MASTER BOOK', 'الحاويات في الأمن السيبراني');
        out += 'المقدمة:\n' + HR2 + '\n';
        out += 'Docker منصة الحاويات الأولى عالمياً، تُستخدم في:\n';
        out += bullet('بناء مختبرات اختبار آمنة');
        out += bullet('نشر الأدوات الأمنية');
        out += bullet('اختبار الاختراق السريع');
        out += section(1, 'كل الأوامر');
        out += fromCategory('docker');
        out += section(2, 'أمثلة عملية');
        out += '\n[بناء مختبر اختبار]:\n';
        out += '```bash\n';
        out += 'docker run -d -p 3000:3000 bkimminich/juice-shop\n';
        out += '```\n\n';
        out += '[تشغيل Kali]:\n';
        out += '```bash\n';
        out += 'docker run -it kalilinux/kali-rolling bash\n';
        out += '```\n';
        out += footer();
        return { filename: 'Docker-Master-Book.txt', content: out };
      }
    },

    /* -------- 08: Android & ADB -------- */
    {
      key: 'android-adb',
      title: 'Android & ADB',
      icon: '📲',
      desc: 'كل أوامر ADB + Android',
      color: 'green',
      generate: () => {
        let out = header('ANDROID & ADB BOOK', 'التحكم الكامل بأندرويد');
        out += section(1, 'كل أوامر ADB');
        out += fromCategory('adb');
        out += section(2, 'معلومات مهمة');
        out += bullet('ADB = Android Debug Bridge');
        out += bullet('يتطلب تفعيل Developer Options');
        out += bullet('USB Debugging يجب أن يكون مفعلاً');
        out += bullet('يعمل عبر USB أو WiFi (adb tcpip)');
        out += section(3, 'استخدامات أمنية');
        out += bullet('اختبار أمان التطبيقات');
        out += bullet('تحليل الحزم المثبتة');
        out += bullet('قراءة السجلات');
        out += bullet('استخراج نسخ احتياطية');
        out += footer();
        return { filename: 'Android-ADB-Book.txt', content: out };
      }
    },

    /* -------- 09: Network Master -------- */
    {
      key: 'network-master',
      title: 'Network Master',
      icon: '📡',
      desc: 'كل أوامر الشبكات',
      color: 'purple',
      generate: () => {
        let out = header('NETWORK MASTER BOOK', 'دليل الشبكات الشامل');
        out += section(1, 'طبقات OSI السبع');
        ['7. Application — HTTP, DNS, FTP, SMTP',
         '6. Presentation — SSL/TLS, JPEG',
         '5. Session — NetBIOS, RPC',
         '4. Transport — TCP, UDP',
         '3. Network — IP, ICMP, ARP',
         '2. Data Link — Ethernet, MAC',
         '1. Physical — كابلات، إشارات'].forEach((s) => out += bullet(s));
        out += section(2, 'المنافذ الشهيرة');
        ['20/21 FTP', '22 SSH', '23 Telnet', '25 SMTP', '53 DNS',
         '80 HTTP', '110 POP3', '143 IMAP', '443 HTTPS', '445 SMB',
         '3306 MySQL', '3389 RDP', '5432 PostgreSQL', '6379 Redis',
         '27017 MongoDB'].forEach((s) => out += bullet(s));
        out += section(3, 'كل الأوامر');
        out += fromCategory('network');
        out += footer();
        return { filename: 'Network-Master-Book.txt', content: out };
      }
    },

    /* -------- 10: SQL Commands -------- */
    {
      key: 'sql-commands',
      title: 'SQL Commands',
      icon: '🗄️',
      desc: 'كل أوامر SQL',
      color: 'yellow',
      generate: () => {
        let out = header('SQL COMMANDS BOOK', 'قواعد البيانات');
        out += section(1, 'كل الأوامر');
        out += fromCategory('sql');
        out += section(2, 'أنواع الأوامر');
        out += bullet('DDL — تعريف البيانات (CREATE, ALTER, DROP)');
        out += bullet('DML — معالجة البيانات (SELECT, INSERT, UPDATE, DELETE)');
        out += bullet('DCL — التحكم بالبيانات (GRANT, REVOKE)');
        out += bullet('TCL — التحكم بالمعاملات (BEGIN, COMMIT, ROLLBACK)');
        out += footer();
        return { filename: 'SQL-Commands-Book.txt', content: out };
      }
    },

    /* -------- 11: Ethical Hacking Guide -------- */
    {
      key: 'ethical-hacking',
      title: 'Ethical Hacking Guide',
      icon: '🎯',
      desc: 'دليل الاختراق الأخلاقي الشامل',
      color: 'red',
      generate: () => {
        let out = header('ETHICAL HACKING GUIDE', 'الفن والعلم في اختبار الأمان');
        out += section(1, 'مراحل الاختراق الأخلاقي (9)');
        const phases = [
          'Reconnaissance — جمع المعلومات',
          'Scanning — مسح الشبكة',
          'Enumeration — تعداد الخدمات',
          'Exploitation — استغلال الثغرات',
          'Privilege Escalation — تصعيد الصلاحيات',
          'Lateral Movement — التنقل الجانبي',
          'Persistence — الثبات',
          'Covering Tracks — تغطية الآثار',
          'Reporting — كتابة التقرير'
        ];
        phases.forEach((p, i) => out += numbered(i + 1, p));
        out += section(2, 'أنواع المخترقين');
        const types = [
          'White Hat — أخلاقي بقانون',
          'Black Hat — ضار ومجرم',
          'Grey Hat — بينهما',
          'Red Team — هجوم',
          'Blue Team — دفاع',
          'Purple Team — دمج الفريقين',
          'Hacktivist — سياسي',
          'Script Kiddie — مبتدئ',
          'APT — مدعوم من دولة'
        ];
        types.forEach((t) => out += bullet(t));
        out += section(3, 'الشهادات الاحترافية');
        const certs = [
          'مبتدئ: CompTIA Security+, CEH, eJPT',
          'متوسط: PNPT, GPEN, CRTP',
          'متقدم: OSCP, OSWE, OSED, OSEP',
          'خبير: CISSP, CISM, OSCE³',
          'سحابي: AWS Security, CCSP',
          'جنائي: GCFA, CHFI'
        ];
        certs.forEach((c) => out += bullet(c));
        out += section(4, 'منصات التدريب');
        const platforms = [
          'TryHackMe — للمبتدئين',
          'Hack The Box — تحديات واقعية',
          'VulnHub — أجهزة وهمية',
          'PortSwigger Academy — ويب (مجاني)',
          'picoCTF — مسابقات',
          'OverTheWire — أساسيات Linux',
          'Root-Me — تحديات متنوعة',
          'PentesterLab — تمارين ويب'
        ];
        platforms.forEach((p) => out += bullet(p));
        out += section(5, 'الأدوات الأساسية');
        const tools = [
          'Nmap — فحص الشبكات',
          'Wireshark — تحليل الحزم',
          'Burp Suite — اختبار الويب',
          'Metasploit — إطار الاستغلال',
          'Hashcat — كسر الهاش',
          'John the Ripper — كلمات المرور',
          'Hydra — هجمات القواميس',
          'sqlmap — حقن SQL',
          'Aircrack-ng — شبكات لاسلكية',
          'Maltego — تحليل العلاقات',
          'Ghidra — هندسة عكسية',
          'Volatility — تحليل الذاكرة'
        ];
        tools.forEach((t) => out += bullet(t));
        out += section(6, 'تحذير قانوني صارم');
        out += '⚠️ الاختراق بدون إذن كتابي مسبق = جريمة في كل الدول.\n';
        out += '⚠️ هذا الكتاب للأغراض التعليمية والدفاعية فقط.\n';
        out += '⚠️ المسؤولية القانونية تقع عليك وحدك.\n';
        out += footer();
        return { filename: 'Ethical-Hacking-Guide.txt', content: out };
      }
    },

    /* -------- 12: Web Security Guide -------- */
    {
      key: 'web-security',
      title: 'Web Security',
      icon: '🌐',
      desc: 'OWASP Top 10 + كل الثغرات',
      color: 'cyan',
      generate: () => {
        let out = header('WEB SECURITY GUIDE', 'أمن تطبيقات الويب');
        out += section(1, 'OWASP Top 10 (2021)');
        const owasp = [
          'A01 — Broken Access Control',
          'A02 — Cryptographic Failures',
          'A03 — Injection',
          'A04 — Insecure Design',
          'A05 — Security Misconfiguration',
          'A06 — Vulnerable and Outdated Components',
          'A07 — Identification and Authentication Failures',
          'A08 — Software and Data Integrity Failures',
          'A09 — Security Logging and Monitoring Failures',
          'A10 — Server-Side Request Forgery (SSRF)'
        ];
        owasp.forEach((o) => out += bullet(o));
        out += section(2, 'SQL Injection');
        out += 'النوع: حقن استعلامات SQL\n';
        out += 'الخطورة: عالية جداً\n';
        out += 'الحماية: Prepared Statements، ORM، Parameterized Queries\n\n';
        out += 'أمثلة Payload:\n';
        out += "  admin' OR '1'='1\n";
        out += "  ' UNION SELECT NULL,NULL--\n";
        out += "  1' AND SLEEP(5)--\n";
        out += "  sqlmap -u \"URL?id=1\" --dbs\n";
        out += section(3, 'XSS — Cross-Site Scripting');
        out += bullet('Reflected — يعكس مباشرة');
        out += bullet('Stored — مخزن (الأخطر)');
        out += bullet('DOM-based — من JavaScript');
        out += 'الحماية: CSP، Escape Output، Sanitize Input\n';
        out += 'Payload: <script>alert(1)</script>\n';
        out += section(4, 'CSRF — Cross-Site Request Forgery');
        out += 'الحماية: CSRF Tokens، SameSite Cookies، Referer Check\n';
        out += section(5, 'IDOR — Insecure Direct Object Reference');
        out += 'تغيير المعرّفات: ?id=1000 → ?id=1001\n';
        out += 'الحماية: UUIDs، Authorization Checks\n';
        out += section(6, 'SSRF — Server-Side Request Forgery');
        out += 'Payloads:\n';
        out += bullet('http://127.0.0.1:80');
        out += bullet('http://169.254.169.254/latest/meta-data/');
        out += bullet('file:///etc/passwd');
        out += bullet('gopher://127.0.0.1:6379/');
        out += section(7, 'JWT Attacks');
        out += bullet('none algorithm');
        out += bullet('Weak secret brute-force');
        out += bullet('Algorithm confusion (RS → HS)');
        out += section(8, 'الأدوات');
        out += bullet('Burp Suite — الأقوى');
        out += bullet('OWASP ZAP — مجاني');
        out += bullet('Caido — حديث');
        out += bullet('sqlmap — SQLi');
        out += bullet('ffuf, gobuster — Fuzzing');
        out += bullet('nuclei — قوالب');
        out += bullet('wpscan — WordPress');
        out += section(9, 'منصات التدريب');
        out += bullet('PortSwigger Academy (مجاني)');
        out += bullet('OWASP Juice Shop');
        out += bullet('DVWA');
        out += bullet('bWAPP');
        out += bullet('WebGoat');
        out += footer();
        return { filename: 'Web-Security-Guide.txt', content: out };
      }
    },

    /* -------- 13: Cryptography Guide -------- */
    {
      key: 'crypto-guide',
      title: 'Cryptography',
      icon: '🔐',
      desc: 'علم التشفير الشامل',
      color: 'purple',
      generate: () => {
        let out = header('CRYPTOGRAPHY GUIDE', 'علم التشفير من الصفر');
        out += section(1, 'أنواع التشفير');
        out += bullet('Symmetric — نفس المفتاح للتشفير والفك');
        out += bullet('Asymmetric — مفتاح عام للتشفير، خاص للفك');
        out += bullet('Hash — اتجاه واحد (لا يمكن عكسه)');
        out += bullet('HMAC — Hash + مفتاح');
        out += bullet('Digital Signature — توقيع رقمي');
        out += section(2, 'الخوارزميات المتماثلة');
        out += bullet('AES (128/192/256) — المعيار الحالي');
        out += bullet('ChaCha20 — حديث سريع');
        out += bullet('Twofish — بديل AES');
        out += bullet('Blowfish — قديم');
        out += bullet('3DES — قديم ومكسور');
        out += section(3, 'الخوارزميات غير المتماثلة');
        out += bullet('RSA (2048/4096) — الأشهر');
        out += bullet('ECC — مفاتيح أصغر');
        out += bullet('Ed25519 — حديث للتوقيع');
        out += bullet('ECDSA — منحنى بيضاوي');
        out += bullet('Diffie-Hellman — تبادل مفاتيح');
        out += section(4, 'دوال الهاش');
        out += bullet('SHA-256/512 — آمن');
        out += bullet('SHA-3 — الأحدث');
        out += bullet('BLAKE2 / BLAKE3 — سريع');
        out += bullet('bcrypt — كلمات المرور');
        out += bullet('Argon2 — الأفضل للكلمات');
        out += bullet('MD5 — مكسور ❌');
        out += bullet('SHA-1 — ضعيف ❌');
        out += section(5, 'أدوات التشفير');
        out += bullet('GPG — تشفير البريد والملفات');
        out += bullet('OpenSSL — مكتبة شاملة');
        out += bullet('VeraCrypt — تشفير الأقراص');
        out += bullet('Age — حديث وسريع');
        out += bullet('Cryptomator — تشفير السحابة');
        out += section(6, 'أمثلة عملية');
        out += '\n[تشفير ملف بـ GPG]:\n';
        out += 'gpg -c secret.txt\n';
        out += 'gpg -d secret.txt.gpg\n\n';
        out += '[تشفير AES بـ OpenSSL]:\n';
        out += 'openssl enc -aes-256-cbc -in file -out file.enc\n';
        out += 'openssl enc -d -aes-256-cbc -in file.enc -out file\n\n';
        out += '[Hash لملف]:\n';
        out += 'sha256sum file\n';
        out += 'md5sum file\n';
        out += section(7, 'Post-Quantum Cryptography');
        out += bullet('CRYSTALS-Kyber — تبادل مفاتيح');
        out += bullet('CRYSTALS-Dilithium — توقيع');
        out += bullet('Falcon — توقيع');
        out += bullet('SPHINCS+ — hash-based');
        out += footer();
        return { filename: 'Cryptography-Guide.txt', content: out };
      }
    },

    /* -------- 14: OSINT Guide -------- */
    {
      key: 'osint-guide',
      title: 'OSINT Guide',
      icon: '🔍',
      desc: 'الاستخبارات مفتوحة المصدر',
      color: 'cyan',
      generate: () => {
        let out = header('OSINT GUIDE', 'الاستخبارات مفتوحة المصدر');
        out += 'المقدمة:\n' + HR2 + '\n';
        out += 'OSINT = Open Source Intelligence\n';
        out += 'جمع المعلومات من المصادر العامة بشكل قانوني.\n';
        out += 'أساس كل تحقيق أمني.\n\n';
        out += section(1, 'محركات البحث');
        out += bullet('Google Dorks — بحث متقدم');
        out += bullet('Shodan — الأجهزة المتصلة بالإنترنت');
        out += bullet('Censys — مسح الإنترنت');
        out += bullet('FOFA — محرك صيني');
        out += bullet('ZoomEye — أجهزة وخدمات');
        out += bullet('GreyNoise — تحليل التهديدات');
        out += bullet('BinaryEdge — بيانات الإنترنت');
        out += section(2, 'Google Dorks الشهيرة');
        out += bullet('site:example.com');
        out += bullet('inurl:admin');
        out += bullet('intitle:"index of"');
        out += bullet('filetype:pdf');
        out += bullet('intext:"password"');
        out += bullet('ext:env DB_PASSWORD');
        out += bullet('inurl:".git/config"');
        out += bullet('inurl:phpmyadmin');
        out += section(3, 'البحث عن الأشخاص');
        out += bullet('Have I Been Pwned — التسريبات');
        out += bullet('DeHashed — تسريبات مدفوعة');
        out += bullet('IntelX — بحث شامل');
        out += bullet('Sherlock — اسم مستخدم');
        out += bullet('Maigret — بديل Sherlock');
        out += bullet('WhatsMyName — خدمات');
        out += section(4, 'النطاقات والشبكات');
        out += bullet('Whois — تسجيل النطاق');
        out += bullet('DNSDumpster — تعداد DNS');
        out += bullet('SecurityTrails — تاريخ DNS');
        out += bullet('VirusTotal — فحص شامل');
        out += bullet('urlscan.io — تحليل المواقع');
        out += bullet('crt.sh — الشهادات');
        out += bullet('BuiltWith — تقنيات الموقع');
        out += bullet('Wappalyzer — كشف التقنيات');
        out += section(5, 'تحليل الصور');
        out += bullet('Google Reverse Image Search');
        out += bullet('Yandex Images — الأفضل للوجه');
        out += bullet('TinEye — بحث بالصورة');
        out += bullet('PimEyes — التعرف على الوجه');
        out += bullet('ExifTool — بيانات الصورة');
        out += bullet('FotoForensics — ELA');
        out += section(6, 'الأدوات الشاملة');
        out += bullet('Maltego — تحليل العلاقات');
        out += bullet('SpiderFoot — أتمتة OSINT');
        out += bullet('theHarvester — إيميلات ونطاقات');
        out += bullet('Recon-ng — إطار استطلاع');
        out += bullet('Photon — زاحف سريع');
        out += bullet('Metagoofil — استخراج البيانات');
        out += section(7, 'نصائح أخلاقية');
        out += '⚠️ استخدم فقط المعلومات المتاحة علناً\n';
        out += '⚠️ لا تخترق حسابات خاصة\n';
        out += '⚠️ احترم خصوصية الآخرين\n';
        out += '⚠️ التوثيق مهم في كل تحقيق\n';
        out += footer();
        return { filename: 'OSINT-Guide.txt', content: out };
      }
    },

    /* -------- 15: Wireless Security -------- */
    {
      key: 'wireless-security',
      title: 'Wireless Security',
      icon: '📶',
      desc: 'أمن WiFi + Bluetooth',
      color: 'purple',
      generate: () => {
        let out = header('WIRELESS SECURITY', 'أمن الشبكات اللاسلكية');
        out += section(1, 'معايير WiFi');
        out += bullet('802.11a/b/g — قديم');
        out += bullet('802.11n — WiFi 4');
        out += bullet('802.11ac — WiFi 5');
        out += bullet('802.11ax — WiFi 6 / 6E');
        out += bullet('802.11be — WiFi 7');
        out += section(2, 'تشفير WiFi');
        out += bullet('WEP — مكسور بالكامل ❌');
        out += bullet('WPA — ضعيف (TKIP) ❌');
        out += bullet('WPA2 — مقبول (AES-CCMP)');
        out += bullet('WPA3 — الأفضل (SAE) ✅');
        out += section(3, 'وضع المراقبة (Monitor Mode)');
        out += 'الأوامر الأساسية:\n';
        out += 'airmon-ng start wlan0\n';
        out += 'airmon-ng check kill\n';
        out += 'iwconfig\n';
        out += 'airodump-ng wlan0mon\n';
        out += 'airodump-ng -c 6 --bssid MAC -w cap wlan0mon\n';
        out += 'aireplay-ng --deauth 10 -a MAC wlan0mon\n';
        out += 'aircrack-ng -w wordlist.txt cap.cap\n';
        out += 'airmon-ng stop wlan0mon\n';
        out += section(4, 'هجمات WiFi');
        out += bullet('Handshake Capture — التقاط المصافحة');
        out += bullet('Deauth Attack — قطع الاتصال');
        out += bullet('Evil Twin — نقطة وصول مزيفة');
        out += bullet('Rogue AP — AP خبيث');
        out += bullet('WPS PIN Attack — كسر WPS');
        out += bullet('PMKID Attack — بدون handshake');
        out += bullet('KRACK — ثغرة WPA2');
        out += bullet('FragAttacks — هجمات التجزئة');
        out += section(5, 'Bluetooth');
        out += bullet('Bluejacking — إرسال رسائل');
        out += bullet('Bluesnarfing — سرقة بيانات');
        out += bullet('Bluebugging — تحكم كامل');
        out += bullet('BLE Sniffing — اعتراض BLE');
        out += section(6, 'RFID / NFC');
        out += bullet('Proxmark3 — الأقوى');
        out += bullet('ChameleonMini — محمول');
        out += bullet('ACR122U — USB reader');
        out += bullet('Mifare Classic Attack');
        out += bullet('Nested Attack');
        out += bullet('Darkside Attack');
        out += section(7, 'حماية WiFi');
        out += bullet('WPA3 + AES');
        out += bullet('كلمة مرور قوية (20+ حرف)');
        out += bullet('تعطيل WPS');
        out += bullet('تعطيل الإدارة عن بعد');
        out += bullet('SSID مخفي (فائدة محدودة)');
        out += bullet('فلترة MAC (سهلة التجاوز)');
        out += bullet('تحديث Firmware دورياً');
        out += bullet('شبكة ضيوف منفصلة');
        out += footer();
        return { filename: 'Wireless-Security-Book.txt', content: out };
      }
    },

    /* -------- 16: Digital Forensics -------- */
    {
      key: 'forensics-guide',
      title: 'Digital Forensics',
      icon: '🔬',
      desc: 'التحليل الجنائي الرقمي',
      color: 'cyan',
      generate: () => {
        let out = header('DIGITAL FORENSICS', 'التحليل الجنائي الرقمي');
        out += section(1, 'المراحل السبع');
        ['Identification — تحديد الأدلة',
         'Preservation — الحفظ',
         'Acquisition — الاستحواذ',
         'Examination — الفحص',
         'Analysis — التحليل',
         'Documentation — التوثيق',
         'Presentation — العرض'].forEach((s, i) => out += numbered(i + 1, s));
        out += section(2, 'أخذ نسخة من القرص');
        out += '\n[الأساسي — dd]:\n';
        out += 'dd if=/dev/sda of=image.dd bs=4M status=progress\n';
        out += 'dd if=/dev/sda | gzip > image.dd.gz\n\n';
        out += '[مع Hashing — dc3dd]:\n';
        out += 'dc3dd if=/dev/sda of=image.dd hash=sha256\n\n';
        out += '[أدوات GUI]:\n';
        out += bullet('Guymager — Linux');
        out += bullet('FTK Imager — Windows');
        out += bullet('EnCase — تجاري');
        out += '\n[التحقق]:\n';
        out += 'sha256sum image.dd\n';
        out += section(3, 'أدوات جنائية');
        out += bullet('Autopsy — تحليل شامل GUI');
        out += bullet('Sleuth Kit — أدوات CLI');
        out += bullet('Volatility — تحليل الذاكرة');
        out += bullet('Rekall — بديل Volatility');
        out += bullet('Foremost — استعادة ملفات');
        out += bullet('Scalpel — بديل Foremost');
        out += bullet('Binwalk — تحليل firmware');
        out += bullet('ExifTool — metadata');
        out += bullet('Bulk Extractor — استخراج شامل');
        out += bullet('Plaso / log2timeline — timeline');
        out += section(4, 'تحليل الذاكرة');
        out += 'vol.py -f mem.dump imageinfo\n';
        out += 'vol.py -f mem.dump --profile=Win10x64 pslist\n';
        out += 'vol.py -f mem.dump --profile=Win10x64 netscan\n';
        out += 'vol.py -f mem.dump --profile=Win10x64 hashdump\n';
        out += 'vol.py -f mem.dump --profile=Win10x64 cmdline\n';
        out += 'vol.py -f mem.dump --profile=Win10x64 dlllist\n';
        out += section(5, 'استعادة الملفات المحذوفة');
        out += bullet('TestDisk — استعادة أقسام');
        out += bullet('PhotoRec — صور وملفات');
        out += bullet('R-Studio — تجاري');
        out += bullet('Recuva — Windows');
        out += bullet('extundelete — Linux ext3/4');
        out += bullet('ext4magic — Linux');
        out += section(6, 'Mobile Forensics');
        out += bullet('Autopsy — تحليل صور');
        out += bullet('Magnet AXIOM — تجاري');
        out += bullet('Cellebrite UFED — المعيار');
        out += bullet('Oxygen Forensic — أدوات');
        out += bullet('ALEAPP — Android مفتوح');
        out += bullet('iLEAPP — iOS مفتوح');
        out += bullet('Andriller — أندرويد');
        out += section(7, 'قواعد مهمة');
        out += '⚠️ لا تلمس الأدلة الأصلية\n';
        out += '⚠️ استخدم Write Blocker\n';
        out += '⚠️ وثّق كل خطوة\n';
        out += '⚠️ احفظ Chain of Custody\n';
        out += footer();
        return { filename: 'Forensics-Guide.txt', content: out };
      }
    },

    /* -------- 17: Reverse Engineering -------- */
    {
      key: 'reverse-engineering',
      title: 'Reverse Engineering',
      icon: '🔧',
      desc: 'الهندسة العكسية للبرامج',
      color: 'red',
      generate: () => {
        let out = header('REVERSE ENGINEERING', 'الهندسة العكسية للبرامج');
        out += section(1, 'الأدوات');
        out += bullet('Ghidra — NSA مفتوح المصدر');
        out += bullet('IDA Pro — تجاري (المعيار)');
        out += bullet('IDA Free — مجاني');
        out += bullet('radare2 — طرفية مفتوحة');
        out += bullet('Cutter — واجهة لـ radare2');
        out += bullet('x64dbg — Windows debugger');
        out += bullet('OllyDbg — Windows قديم');
        out += bullet('GDB + pwndbg — Linux');
        out += bullet('ltrace — مكتبات');
        out += bullet('strace — استدعاءات النظام');
        out += section(2, 'أنواع التحليل');
        out += bullet('Static Analysis — بدون تشغيل');
        out += bullet('Dynamic Analysis — أثناء التشغيل');
        out += bullet('Hybrid — مختلط');
        out += bullet('Symbolic Execution — تنفيذ رمزي');
        out += bullet('Taint Analysis — تحليل تلوث');
        out += section(3, 'أوامر أساسية');
        out += 'file binary              # نوع الملف\n';
        out += 'strings binary           # استخراج نصوص\n';
        out += 'readelf -h binary        # ترويسات ELF\n';
        out += 'objdump -d binary        # تفكيك\n';
        out += 'nm binary                # رموز\n';
        out += 'gdb ./binary             # debugger\n';
        out += 'ltrace ./binary          # تتبع مكتبات\n';
        out += 'strace ./binary          # تتبع calls\n';
        out += section(4, 'ثغرات شائعة في البرامج');
        out += bullet('Buffer Overflow — تجاوز سعة');
        out += bullet('Heap Overflow — تجاوز الكومة');
        out += bullet('Use After Free — استخدام بعد تحرير');
        out += bullet('Double Free — تحرير مزدوج');
        out += bullet('Race Condition — حالة تسابق');
        out += bullet('Format String — ثغرة صيغة');
        out += bullet('Integer Overflow — تجاوز رقمي');
        out += bullet('ROP / JOP — برمجة عائدية');
        out += section(5, 'حمايات حديثة');
        out += bullet('ASLR — عشوائية عناوين');
        out += bullet('DEP/NX — منع تنفيذ');
        out += bullet('Stack Canary — كناري');
        out += bullet('PIE — تنفيذ مستقل');
        out += bullet('CFI — سلامة تدفق التحكم');
        out += bullet('Fortify Source');
        out += section(6, 'أدوات تحليل أندرويد');
        out += bullet('Jadx — فك APK');
        out += bullet('APKTool — تفكيك وإعادة بناء');
        out += bullet('Frida — تحليل ديناميكي');
        out += bullet('Objection — أتمتة Frida');
        out += bullet('MobSF — تحليل شامل');
        out += bullet('Drozer — اختبار أندرويد');
        out += footer();
        return { filename: 'Reverse-Engineering.txt', content: out };
      }
    },

    /* -------- 18: Cloud Security -------- */
    {
      key: 'cloud-security',
      title: 'Cloud Security',
      icon: '☁️',
      desc: 'أمن AWS + Azure + GCP',
      color: 'cyan',
      generate: () => {
        let out = header('CLOUD SECURITY', 'أمن الحوسبة السحابية');
        out += section(1, 'AWS — أدوات أمنية');
        out += bullet('GuardDuty — كشف التهديدات');
        out += bullet('Security Hub — مركز أمني');
        out += bullet('IAM Access Analyzer');
        out += bullet('CloudTrail — تسجيل الأنشطة');
        out += bullet('Inspector — فحص الثغرات');
        out += bullet('Macie — حماية البيانات');
        out += bullet('WAF & Shield — حماية');
        out += section(2, 'Azure — أدوات أمنية');
        out += bullet('Microsoft Defender for Cloud');
        out += bullet('Microsoft Sentinel — SIEM');
        out += bullet('Azure AD / Entra ID');
        out += bullet('Key Vault — إدارة المفاتيح');
        out += bullet('Security Center');
        out += section(3, 'GCP — أدوات أمنية');
        out += bullet('Security Command Center');
        out += bullet('Cloud Armor — WAF');
        out += bullet('IAM — إدارة الهويات');
        out += bullet('VPC Service Controls');
        out += bullet('Cloud KMS');
        out += section(4, 'أدوات متعددة السحابة');
        out += bullet('ScoutSuite — تدقيق متعدد');
        out += bullet('Prowler — AWS/Azure/GCP');
        out += bullet('Cloudsplaining — AWS IAM');
        out += bullet('Pacu — AWS exploitation');
        out += bullet('trufflehog — بحث secrets');
        out += bullet('gitleaks — Git secrets');
        out += bullet('Steampipe — استعلام السحابة');
        out += section(5, 'مخاطر السحابة الشائعة');
        out += bullet('مفاتيح API مسربة');
        out += bullet('S3 Buckets مفتوحة');
        out += bullet('IAM Permissions زائدة');
        out += bullet('عدم تشفير البيانات');
        out += bullet('Logging غير مفعّل');
        out += bullet('Security Groups مفتوحة');
        out += bullet('عدم استخدام MFA');
        out += section(6, 'أفضل الممارسات');
        out += bullet('مبدأ أقل صلاحية (Least Privilege)');
        out += bullet('تشفير at-rest و in-transit');
        out += bullet('MFA على كل شيء');
        out += bullet('مراقبة مستمرة');
        out += bullet('تدوير المفاتيح دورياً');
        out += bullet('استخدام Secrets Manager');
        out += bullet('Zero Trust Architecture');
        out += footer();
        return { filename: 'Cloud-Security-Book.txt', content: out };
      }
    },

    /* -------- 19: IoT Security -------- */
    {
      key: 'iot-security',
      title: 'IoT Security',
      icon: '🌐',
      desc: 'أمن إنترنت الأشياء',
      color: 'green',
      generate: () => {
        let out = header('IoT SECURITY', 'أمن إنترنت الأشياء');
        out += section(1, 'المخاطر الشائعة');
        out += bullet('كلمات مرور افتراضية');
        out += bullet('Firmware قديم بدون تحديثات');
        out += bullet('منافذ شبكة مفتوحة');
        out += bullet('تشفير ضعيف أو معدوم');
        out += bullet('اتصالات غير آمنة');
        out += bullet('عدم وجود تحديثات تلقائية');
        out += bullet('Hardcoded credentials');
        out += section(2, 'أدوات تحليل');
        out += bullet('Binwalk — تحليل firmware');
        out += bullet('Firmware Analysis Toolkit');
        out += bullet('AttifyOS — توزيعة IoT');
        out += bullet('RouterSploit — أجهزة الراوتر');
        out += bullet('IoTSeeker — فحص شبكة');
        out += bullet('Shodan — أجهزة متصلة');
        out += bullet('UART/JTAG tools');
        out += section(3, 'منهجية اختبار');
        out += numbered(1, 'جمع المعلومات عن الجهاز');
        out += numbered(2, 'تحليل الاتصالات');
        out += numbered(3, 'استخراج Firmware');
        out += numbered(4, 'تحليل Firmware');
        out += numbered(5, 'اختبار الواجهات (UART, JTAG)');
        out += numbered(6, 'اختبار Wireless');
        out += numbered(7, 'اختبار APIs');
        out += section(4, 'الدفاعات');
        out += bullet('غيّر كلمات المرور الافتراضية');
        out += bullet('حدّث Firmware دورياً');
        out += bullet('افصل IoT في شبكة منفصلة');
        out += bullet('راقب التدفق الشبكي');
        out += bullet('أغلق المنافذ غير المستخدمة');
        out += bullet('فعّل التشفير');
        out += bullet('استخدم كلمات مرور قوية');
        out += footer();
        return { filename: 'IoT-Security-Book.txt', content: out };
      }
    },

    /* -------- 20: Blockchain Security -------- */
    {
      key: 'blockchain-security',
      title: 'Blockchain Security',
      icon: '⛓️',
      desc: 'أمن العقود الذكية والبلوكتشين',
      color: 'orange',
      generate: () => {
        let out = header('BLOCKCHAIN SECURITY', 'أمن العقود الذكية');
        out += section(1, 'الثغرات الشائعة');
        out += bullet('Reentrancy — إعادة الدخول');
        out += bullet('Integer Overflow/Underflow');
        out += bullet('Access Control Issues');
        out += bullet('Front-running');
        out += bullet('Flash Loan Attacks');
        out += bullet('Oracle Manipulation');
        out += bullet('Denial of Service');
        out += bullet('Unchecked External Calls');
        out += section(2, 'أدوات التدقيق');
        out += bullet('Slither — تحليل ثابت');
        out += bullet('Mythril — تحليل رمزي');
        out += bullet('Manticore — تنفيذ رمزي');
        out += bullet('Echidna — fuzzer');
        out += bullet('Remix IDE — بيئة تطوير');
        out += bullet('Foundry — إطار اختبار');
        out += bullet('Hardhat — بيئة');
        out += section(3, 'منهجية التدقيق');
        out += numbered(1, 'فهم العقد كاملاً');
        out += numbered(2, 'تحليل ثابت (Slither)');
        out += numbered(3, 'اختبار يدوي');
        out += numbered(4, 'اختبار Fuzzing');
        out += numbered(5, 'Formal Verification');
        out += numbered(6, 'اختبار الغاز');
        out += numbered(7, 'كتابة التقرير');
        out += section(4, 'أمثلة عملية');
        out += '\n[Reentrancy — نموذج]:\n';
        out += 'function withdraw() public {\n';
        out += '    uint bal = balances[msg.sender];\n';
        out += '    require(bal > 0);\n';
        out += '    (bool sent, ) = msg.sender.call{value: bal}("");\n';
        out += '    require(sent, "Failed");\n';
        out += '    balances[msg.sender] = 0;\n';
        out += '}\n';
        out += '\nالحماية:\n';
        out += bullet('استخدم Checks-Effects-Interactions');
        out += bullet('استخدم ReentrancyGuard من OpenZeppelin');
        out += bullet('حدّث الحالة قبل الاتصال الخارجي');
        out += section(5, 'أفضل الممارسات');
        out += bullet('تدقيق من أكثر من جهة');
        out += bullet('Bug Bounty قبل الإطلاق');
        out += bullet('Timelock للعقود الحساسة');
        out += bullet('Multi-sig للمحافظ');
        out += bullet('اختبار شامل قبل النشر');
        out += footer();
        return { filename: 'Blockchain-Security-Book.txt', content: out };
      }
    },

    /* -------- 21: SCADA Security -------- */
    {
      key: 'scada-security',
      title: 'SCADA Security',
      icon: '🏭',
      desc: 'أمن أنظمة التحكم الصناعي',
      color: 'red',
      generate: () => {
        let out = header('SCADA SECURITY', 'أمن أنظمة التحكم الصناعية');
        out += section(1, 'المفاهيم الأساسية');
        out += bullet('SCADA — Supervisory Control And Data Acquisition');
        out += bullet('ICS — Industrial Control Systems');
        out += bullet('PLC — Programmable Logic Controller');
        out += bullet('HMI — Human Machine Interface');
        out += bullet('RTU — Remote Terminal Unit');
        out += bullet('DCS — Distributed Control System');
        out += section(2, 'البروتوكولات الشائعة');
        out += bullet('Modbus (TCP/RTU) — الأشهر');
        out += bullet('DNP3 — للكهرباء');
        out += bullet('Profinet — سيمنز');
        out += bullet('EtherNet/IP — ألن-برادلي');
        out += bullet('OPC UA — حديث');
        out += bullet('IEC 61850 — كهرباء');
        out += bullet('BACnet — مباني');
        out += section(3, 'هجمات معروفة');
        out += bullet('Stuxnet — 2010 (إيران)');
        out += bullet('Industroyer — 2016 (أوكرانيا)');
        out += bullet('Triton — 2017 (السعودية)');
        out += bullet('Havex — 2014');
        out += bullet('BlackEnergy — 2015');
        out += section(4, 'مخاطر رئيسية');
        out += bullet('اتصال ICS بالإنترنت');
        out += bullet('كلمات مرور ضعيفة');
        out += bullet('عدم تحديث الأنظمة');
        out += bullet('شبكات مسطحة (Flat)');
        out += bullet('غياب المراقبة');
        out += bullet('USB غير موثوق');
        out += section(5, 'أدوات');
        out += bullet('GRASSMARLIN — رسم شبكة');
        out += bullet('Wireshark dissectors');
        out += bullet('PLCinject');
        out += bullet('Metasploit ICS modules');
        out += bullet('ModbusPal — محاكي');
        out += bullet('Snort IDS للـ ICS');
        out += section(6, 'الدفاعات');
        out += bullet('فصل شبكة ICS عن IT');
        out += bullet('Data Diode للاتجاه الواحد');
        out += bullet('مراقبة مستمرة');
        out += bullet('تدريب الموظفين');
        out += bullet('Backup للأنظمة');
        out += bullet('تحكم في الوصول');
        out += bullet('IDS متخصص');
        out += footer();
        return { filename: 'SCADA-Security-Book.txt', content: out };
      }
    },

    /* -------- 22: Threat Intelligence -------- */
    {
      key: 'threat-intel',
      title: 'Threat Intelligence',
      icon: '🕵️',
      desc: 'استخبارات التهديدات',
      color: 'purple',
      generate: () => {
        let out = header('THREAT INTELLIGENCE', 'استخبارات التهديدات');
        out += section(1, 'أنواع Intel');
        out += bullet('Strategic — للقادة (طويل المدى)');
        out += bullet('Operational — للعمليات');
        out += bullet('Tactical — للمحللين');
        out += bullet('Technical — للمهندسين');
        out += section(2, 'أطر العمل');
        out += bullet('Cyber Kill Chain — Lockheed Martin');
        out += bullet('MITRE ATT&CK — الأشهر');
        out += bullet('Diamond Model — نموذج ماسي');
        out += bullet('Pyramid of Pain — هرم الألم');
        out += bullet('Unified Kill Chain');
        out += section(3, 'مصادر Intel');
        out += bullet('MISP — منصة مشتركة');
        out += bullet('OpenCTI — مفتوح المصدر');
        out += bullet('AlienVault OTX — مجاني');
        out += bullet('ThreatConnect — تجاري');
        out += bullet('Recorded Future — تجاري');
        out += bullet('VirusTotal — فحص');
        out += bullet('Shodan — أجهزة');
        out += section(4, 'المصطلحات');
        out += bullet('IOC — Indicators of Compromise');
        out += bullet('IOA — Indicators of Attack');
        out += bullet('TTPs — Tactics, Techniques, Procedures');
        out += bullet('APT — Advanced Persistent Threat');
        out += bullet('C2 — Command and Control');
        out += bullet('TTPs — Tactics and Techniques');
        out += section(5, 'MITRE ATT&CK — 14 تكتيك');
        out += bullet('1. Reconnaissance — استطلاع');
        out += bullet('2. Resource Development — تطوير');
        out += bullet('3. Initial Access — وصول أولي');
        out += bullet('4. Execution — تنفيذ');
        out += bullet('5. Persistence — ثبات');
        out += bullet('6. Privilege Escalation — تصعيد');
        out += bullet('7. Defense Evasion — مراوغة');
        out += bullet('8. Credential Access — بيانات الدخول');
        out += bullet('9. Discovery — استكشاف');
        out += bullet('10. Lateral Movement — تنقل');
        out += bullet('11. Collection — جمع');
        out += bullet('12. C2 — تحكم');
        out += bullet('13. Exfiltration — تسريب');
        out += bullet('14. Impact — تأثير');
        out += footer();
        return { filename: 'Threat-Intelligence.txt', content: out };
      }
    },

    /* -------- 23: Malware Analysis -------- */
    {
      key: 'malware-analysis',
      title: 'Malware Analysis',
      icon: '🦠',
      desc: 'تحليل البرمجيات الخبيثة',
      color: 'red',
      generate: () => {
        let out = header('MALWARE ANALYSIS', 'تحليل البرمجيات الخبيثة');
        out += section(1, 'أنواع البرمجيات الخبيثة');
        out += bullet('Virus — ينسخ نفسه في ملفات');
        out += bullet('Worm — ينتشر ذاتياً عبر الشبكة');
        out += bullet('Trojan — يتنكر بتطبيق مشروع');
        out += bullet('Ransomware — يشفر البيانات ويطلب فدية');
        out += bullet('Spyware — يتجسس على النشاط');
        out += bullet('Adware — إعلانات مزعجة');
        out += bullet('Rootkit — يخفي وجوده');
        out += bullet('Keylogger — يسجل ضغطات المفاتيح');
        out += bullet('Botnet — جعل الجهاز جزءاً من شبكة');
        out += bullet('RAT — تحكم عن بعد');
        out += bullet('Dropper — يُنزل ملفات أخرى');
        out += bullet('Loader — يحمل الكود الخبيث');
        out += bullet('Wiper — يمحو البيانات');
        out += bullet('Cryptominer — تعدين خفي');
        out += section(2, 'التحليل الساكن (Static)');
        out += bullet('strings binary');
        out += bullet('file binary');
        out += bullet('objdump -d binary');
        out += bullet('readelf -h binary');
        out += bullet('PEview / PEStudio');
        out += bullet('Detect It Easy');
        out += bullet('YARA rules');
        out += section(3, 'التحليل الديناميكي (Dynamic)');
        out += bullet('Sandbox: Cuckoo, ANY.RUN');
        out += bullet('Process Monitor');
        out += bullet('Process Hacker');
        out += bullet('Regshot — مراقبة السجل');
        out += bullet('Wireshark — مراقبة الشبكة');
        out += bullet('Frida / x64dbg');
        out += section(4, 'بيئة آمنة');
        out += '⚠️ لا تحلل malware على جهازك الحقيقي!\n';
        out += bullet('VM معزولة بدون شبكة');
        out += bullet('Host-only networking');
        out += bullet('Snapshot قبل التحليل');
        out += bullet('استخدم Linux VM للتحليل');
        out += bullet('أدوات مراقبة قبل التشغيل');
        out += section(5, 'قواعد YARA');
        out += '\nrule Example_Malware {\n';
        out += '    meta:\n';
        out += '        description = "Example"\n';
        out += '    strings:\n';
        out += '        $a = "suspicious_string"\n';
        out += '    condition:\n';
        out += '        $a\n';
        out += '}\n';
        out += section(6, 'الدفاع');
        out += bullet('EDR على كل الأجهزة');
        out += bullet('تحديثات دورية');
        out += bullet('تدريب الموظفين');
        out += bullet('Email filtering');
        out += bullet('Application whitelisting');
        out += bullet('Network segmentation');
        out += bullet('Backups منتظمة');
        out += footer();
        return { filename: 'Malware-Analysis-Book.txt', content: out };
      }
    },

    /* -------- 24: SOC Analyst Guide -------- */
    {
      key: 'soc-analyst',
      title: 'SOC Analyst Guide',
      icon: '🎯',
      desc: 'دليل محلل SOC',
      color: 'cyan',
      generate: () => {
        let out = header('SOC ANALYST GUIDE', 'مركز عمليات الأمن');
        out += section(1, 'ما هو SOC؟');
        out += 'SOC = Security Operations Center\n';
        out += 'فريق يعمل 24/7 لمراقبة الأنظمة والاستجابة للحوادث.\n\n';
        out += section(2, 'مسؤوليات SOC');
        out += bullet('مراقبة مستمرة (24/7)');
        out += bullet('تحليل التنبيهات');
        out += bullet('التحقق من الحوادث');
        out += bullet('الاستجابة الأولية');
        out += bullet('التصعيد للفريق المختص');
        out += bullet('كتابة التقارير');
        out += bullet('Threat Hunting');
        out += section(3, 'المستويات');
        out += numbered(1, 'L1 — Triaging (فحص أولي)');
        out += numbered(2, 'L2 — Investigation (تحقيق)');
        out += numbered(3, 'L3 — Threat Hunting (صيد)');
        out += numbered(4, 'SOC Manager — الإدارة');
        out += section(4, 'أدوات SOC');
        out += bullet('SIEM: Splunk, QRadar, Sentinel');
        out += bullet('EDR: CrowdStrike, SentinelOne');
        out += bullet('SOAR: Phantom, Demisto, Shuffle');
        out += bullet('TIP: MISP, OpenCTI');
        out += bullet('NDR: Darktrace, Vectra');
        out += bullet('Forensics: Volatility, Autopsy');
        out += section(5, 'مصادر البيانات');
        out += bullet('Firewall logs');
        out += bullet('Proxy logs');
        out += bullet('DNS logs');
        out += bullet('EDR telemetry');
        out += bullet('Windows Event Logs');
        out += bullet('Linux syslog');
        out += bullet('Cloud logs (CloudTrail, etc.)');
        out += bullet('NetFlow / IPFIX');
        out += section(6, 'مؤشرات الاختراق IOC');
        out += bullet('عناوين IP مشبوهة');
        out += bullet('نطاقات DNS خبيثة');
        out += bullet('Hash files خبيثة');
        out += bullet('URLs خطرة');
        out += bullet('User Agents غريبة');
        out += bullet('Registry Keys جديدة');
        out += bullet('عمليات غير معروفة');
        out += section(7, 'أهم 10 دقائق في SOC');
        out += numbered(1, 'تحقق من التنبيه');
        out += numbered(2, 'اجمع السياق');
        out += numbered(3, 'حدد المصدر');
        out += numbered(4, 'افحص الأثر');
        out += numbered(5, 'قرر التصعيد');
        out += numbered(6, 'وثّق الخطوات');
        out += numbered(7, 'تواصل مع الفريق');
        out += numbered(8, 'اعزل إن لزم');
        out += numbered(9, 'تعلّم من الحادثة');
        out += numbered(10, 'حدّث الـ Playbook');
        out += footer();
        return { filename: 'SOC-Analyst-Guide.txt', content: out };
      }
    },

    /* -------- 25: Career Guide -------- */
    {
      key: 'career-guide',
      title: 'Cyber Career Guide',
      icon: '💼',
      desc: 'مسار وظيفي في الأمن السيبراني',
      color: 'green',
      generate: () => {
        let out = header('CYBER CAREER GUIDE', 'مسار وظيفي في الأمن السيبراني');
        out += section(1, 'خارطة التعلم');
        out += numbered(1, 'الشهر 1-2: أساسيات الشبكات + Linux');
        out += numbered(2, 'الشهر 3: البرمجة (Python + Bash)');
        out += numbered(3, 'الشهر 4: مفاهيم أمن (CIA, Crypto)');
        out += numbered(4, 'الشهر 5-6: تدريب عملي (THM, HTB)');
        out += numbered(5, 'الشهر 7-9: تخصص (Web/Network/Cloud)');
        out += numbered(6, 'الشهر 10-12: HTB + شهادات');
        out += numbered(7, 'السنة 2: OSCP + وظيفة');
        out += section(2, 'المسارات الوظيفية');
        out += bullet('SOC Analyst — محلل');
        out += bullet('Penetration Tester — مخترق أخلاقي');
        out += bullet('Red Team Operator — فريق أحمر');
        out += bullet('Blue Team Analyst — فريق أزرق');
        out += bullet('Malware Analyst — محلل برمجيات');
        out += bullet('Forensics Investigator — محقق جنائي');
        out += bullet('Cloud Security Engineer — سحابة');
        out += bullet('AppSec Engineer — أمن تطبيقات');
        out += bullet('DevSecOps — دمج الأمن');
        out += bullet('Security Architect — معماري');
        out += bullet('CISO — مدير أمن معلومات');
        out += section(3, 'المهارات الأساسية');
        out += bullet('Networking (TCP/IP)');
        out += bullet('Linux + Windows');
        out += bullet('Python + Bash');
        out += bullet('Web fundamentals');
        out += bullet('Cryptography basics');
        out += bullet('Active Directory');
        out += bullet('Cloud (AWS/Azure)');
        out += bullet('Reporting');
        out += section(4, 'الشهادات');
        out += subsection('مبتدئ');
        out += bullet('CompTIA Security+');
        out += bullet('CEH — Certified Ethical Hacker');
        out += bullet('eJPT — Junior Penetration Tester');
        out += subsection('متوسط');
        out += bullet('PNPT — Practical Network Pen Tester');
        out += bullet('GPEN — GIAC Penetration Tester');
        out += bullet('CRTP — Certified Red Team Professional');
        out += subsection('متقدم');
        out += bullet('OSCP — الأصعب والأشهر');
        out += bullet('OSWE, OSED, OSEP');
        out += bullet('CRTO — Certified Red Team Operator');
        out += subsection('خبير');
        out += bullet('CISSP — Certified Information Systems Security Professional');
        out += bullet('CISM — Certified Information Security Manager');
        out += bullet('CISA — Certified Information Systems Auditor');
        out += section(5, 'نصائح للحصول على وظيفة');
        out += bullet('ابنِ Portfolio قوي');
        out += bullet('شارك في Bug Bounty');
        out += bullet('اكتب Writeups للـ CTF');
        out += bullet('شارك في المجتمعات');
        out += bullet('ساهم في Open Source');
        out += bullet('أنشئ مدونة تقنية');
        out += bullet('تواصل مع المهنيين');
        out += section(6, 'مصادر مجانية');
        out += bullet('TryHackMe (بعض المسارات مجانية)');
        out += bullet('PortSwigger Academy');
        out += bullet('OWASP');
        out += bullet('Hack The Box (بعض التحديات)');
        out += bullet('Cybrary');
        out += bullet('YouTube: NetworkChuck, TCM, John Hammond');
        out += footer();
        return { filename: 'Cyber-Career-Guide.txt', content: out };
      }
    },

    /* -------- 26: Certifications Guide -------- */
    {
      key: 'certifications',
      title: 'Certifications Guide',
      icon: '📜',
      desc: 'دليل الشهادات الأمنية',
      color: 'purple',
      generate: () => {
        let out = header('CERTIFICATIONS GUIDE', 'دليل الشهادات الأمنية');
        out += section(1, 'شهادات المبتدئين');
        out += bullet('CompTIA Security+ — الأشهر للمبتدئين');
        out += bullet('CEH — Certified Ethical Hacker');
        out += bullet('eJPT — eLearnSecurity Junior Penetration Tester');
        out += bullet('Google Cybersecurity — مجانية');
        out += bullet('Cisco CyberOps Associate');
        out += bullet('CompTIA Network+ — أساس الشبكات');
        out += section(2, 'شهادات متوسطة');
        out += bullet('PNPT — Practical Network Pen Tester');
        out += bullet('GPEN — GIAC Penetration Tester');
        out += bullet('CRTP — Certified Red Team Professional');
        out += bullet('CompTIA CySA+ — محلل');
        out += bullet('CompTIA PenTest+ — اختبار اختراق');
        out += bullet('ECSA — EC-Council Certified Security Analyst');
        out += section(3, 'شهادات متقدمة');
        out += bullet('OSCP — Offensive Security Certified Professional');
        out += bullet('OSWE — Web Expert');
        out += bullet('OSED — Exploit Developer');
        out += bullet('OSEP — Experienced Penetration Tester');
        out += bullet('CRTO — Certified Red Team Operator');
        out += bullet('CRTL — Red Team Lead');
        out += section(4, 'شهادات الخبراء');
        out += bullet('CISSP — Certified Information Systems Security Professional');
        out += bullet('CISM — Certified Information Security Manager');
        out += bullet('CISA — Certified Information Systems Auditor');
        out += bullet('CCSP — Certified Cloud Security Professional');
        out += bullet('ISSAP — Information Systems Security Architecture Professional');
        out += section(5, 'شهادات سحابية');
        out += bullet('AWS Certified Security — Specialty');
        out += bullet('Microsoft Azure Security Engineer (AZ-500)');
        out += bullet('Google Professional Cloud Security Engineer');
        out += bullet('CCSP — ISC2');
        out += section(6, 'شهادات جنائية');
        out += bullet('GCFA — GIAC Certified Forensic Analyst');
        out += bullet('GCFE — Windows Forensic Examiner');
        out += bullet('CHFI — Computer Hacking Forensic Investigator');
        out += bullet('EnCE — EnCase Certified Examiner');
        out += section(7, 'نصائح للاختيار');
        out += bullet('ابدأ بشهادة مبتدئ تناسب مستواك');
        out += bullet('ركّز على شهادة تخدم هدفك الوظيفي');
        out += bullet('لا تجمع شهادات بدون خبرة عملية');
        out += bullet('الأداء العملي أهم من الشهادات');
        out += bullet('ابنِ مختبرك وطبّق');
        out += footer();
        return { filename: 'Certifications-Guide.txt', content: out };
      }
    },

    /* -------- 27: Pentest Methodology -------- */
    {
      key: 'pentest-methodology',
      title: 'Pentest Methodology',
      icon: '⚔️',
      desc: 'منهجية اختبار الاختراق',
      color: 'red',
      generate: () => {
        let out = header('PENTEST METHODOLOGY', 'منهجية اختبار الاختراق');
        out += section(1, 'المراحل السبع');
        out += numbered(1, 'Pre-engagement — التحضير');
        out += numbered(2, 'Intelligence Gathering — جمع المعلومات');
        out += numbered(3, 'Threat Modeling — نمذجة التهديدات');
        out += numbered(4, 'Vulnerability Analysis — تحليل الثغرات');
        out += numbered(5, 'Exploitation — الاستغلال');
        out += numbered(6, 'Post-Exploitation — بعد الاختراق');
        out += numbered(7, 'Reporting — التقرير');
        out += section(2, 'المرحلة 1: Pre-engagement');
        out += bullet('تحديد النطاق (Scope)');
        out += bullet('توقيع العقد');
        out += bullet('Rules of Engagement');
        out += bullet('جهات الاتصال الطارئة');
        out += bullet('تحديد الأهداف');
        out += section(3, 'المرحلة 2: Intelligence Gathering');
        out += bullet('Passive Recon — سلبي');
        out += bullet('Active Recon — نشط');
        out += bullet('OSINT — مصادر مفتوحة');
        out += bullet('Social Media');
        out += bullet('DNS enumeration');
        out += bullet('Subdomain discovery');
        out += bullet('Port scanning');
        out += bullet('Service enumeration');
        out += section(4, 'المرحلة 3: Threat Modeling');
        out += bullet('تحديد الأصول');
        out += bullet('تحديد التهديدات');
        out += bullet('تحليل المخاطر');
        out += bullet('تحديد الأولويات');
        out += section(5, 'المرحلة 4: Vulnerability Analysis');
        out += bullet('ماسحات آلية (Nessus, OpenVAS)');
        out += bullet('تحليل يدوي');
        out += bullet('مراجعة الكود');
        out += bullet('بحث CVE');
        out += bullet('تحقق من الثغرات');
        out += section(6, 'المرحلة 5: Exploitation');
        out += bullet('استغلال الثغرات المؤكدة');
        out += bullet('الحصول على وصول أولي');
        out += bullet('تجنب اكتشافه');
        out += bullet('توثيق كل خطوة');
        out += section(7, 'المرحلة 6: Post-Exploitation');
        out += bullet('تصعيد الصلاحيات');
        out += bullet('التنقل الجانبي');
        out += bullet('جمع البيانات');
        out += bullet('إنشاء Persistence');
        out += bullet('تغطية الآثار');
        out += section(8, 'المرحلة 7: Reporting');
        out += bullet('Executive Summary');
        out += bullet('Scope & Methodology');
        out += bullet('Findings (مع CVSS)');
        out += bullet('Risk Rating');
        out += bullet('Remediation (الحلول)');
        out += bullet('Appendix (الأدلة)');
        out += section(9, 'أدوات كل مرحلة');
        out += subsection('Recon');
        out += bullet('Nmap, Masscan, Amass, Subfinder');
        out += subsection('Web');
        out += bullet('Burp, ZAP, sqlmap, ffuf');
        out += subsection('Exploit');
        out += bullet('Metasploit, Cobalt Strike, SearchSploit');
        out += subsection('Post');
        out += bullet('Mimikatz, BloodHound, LinPEAS');
        out += subsection('Wireless');
        out += bullet('Aircrack-ng, Bettercap, Kismet');
        out += footer();
        return { filename: 'Pentest-Methodology.txt', content: out };
      }
    },

    /* -------- 28: Glossary -------- */
    {
      key: 'glossary-book',
      title: 'Security Glossary',
      icon: '📖',
      desc: 'قاموس المصطلحات الأمنية',
      color: 'yellow',
      generate: () => {
        let out = header('SECURITY GLOSSARY', 'قاموس المصطلحات الأمنية');
        out += 'هذا الكتاب يحتوي على جميع المصطلحات الأمنية بالعربية والإنجليزية.\n';
        out += 'يتم توليده من قاعدة بيانات المصطلحات في الموقع.\n\n';
        if (window.SB_GLOSSARY) {
          out += 'عدد المصطلحات: ' + window.SB_GLOSSARY.length + '\n\n';
          out += HR + '\n\n';
          window.SB_GLOSSARY.forEach(([term, desc], i) => {
            out += '[' + (i + 1) + '] ' + term + '\n';
            out += '    → ' + desc + '\n\n';
          });
        } else {
          out += 'قم بتشغيل الموقع لتحميل المصطلحات تلقائياً.\n';
        }
        out += footer();
        return { filename: 'Glossary-Book.txt', content: out };
      }
    },

    /* -------- 29: Companies Directory -------- */
    {
      key: 'companies-book',
      title: 'Companies Directory',
      icon: '🏢',
      desc: 'دليل الشركات الأمنية',
      color: 'cyan',
      generate: () => {
        let out = header('COMPANIES DIRECTORY', 'دليل شركات الأمن السيبراني');
        out += 'هذا الكتاب يحتوي على أشهر شركات الأمن السيبراني عالمياً.\n';
        out += 'يتم توليده من قاعدة البيانات في الموقع.\n\n';
        if (window.SB_COMPANIES) {
          out += 'عدد الشركات: ' + window.SB_COMPANIES.length + '\n\n';
          out += HR + '\n\n';
          window.SB_COMPANIES.forEach(([name, field, country], i) => {
            out += '[' + (i + 1) + '] ' + name + '\n';
            out += '    🏷️  ' + field + '\n';
            out += '    🌍  ' + country + '\n\n';
          });
        } else {
          out += 'قم بتشغيل الموقع لتحميل الشركات تلقائياً.\n';
        }
        out += footer();
        return { filename: 'Companies-Directory.txt', content: out };
      }
    },

    /* -------- 30: Complete Bundle -------- */
    {
      key: 'complete-bundle',
      title: 'Complete Bundle',
      icon: '📦',
      desc: 'كل شيء في ملف واحد',
      color: 'green',
      generate: () => {
        let out = header('SECRET BOX — COMPLETE BUNDLE', 'كل شيء في ملف واحد');
        out += 'هذا الملف يحتوي على كل شيء:\n';
        out += bullet('كل الأوامر من جميع الفئات');
        out += bullet('المصطلحات الأمنية');
        out += bullet('الشركات');
        out += bullet('النصائح والأدوات');
        out += '\n\n';

        if (window.SB_DATA && window.SB_DATA.raw) {
          Object.keys(window.SB_DATA.raw).forEach((cat) => {
            const catMeta = window.SB_DATA.categories.find((c) => c.key === cat);
            if (!catMeta) return;
            const cmds = window.SB_DATA.raw[cat];
            out += '\n\n' + '█'.repeat(60) + '\n';
            out += '█  ' + catMeta.icon + ' ' + catMeta.name.toUpperCase() + ' — ' + cmds.length + ' أمر\n';
            out += '█'.repeat(60) + '\n\n';

            let lastSub = '';
            cmds.forEach((c, i) => {
              if (c.sub !== lastSub) {
                out += '\n' + HR2 + '\n  ' + c.sub + '\n' + HR2 + '\n\n';
                lastSub = c.sub;
              }
              out += '[' + (i + 1) + '] ' + c.cmd + '\n';
              out += '    💡 ' + c.desc + '\n\n';
            });
          });
        }

        out += footer();
        return { filename: 'SecretBox-Complete-Bundle.txt', content: out };
      }
    }
  ];

  /* ============================================================
     PUBLIC API
     ============================================================ */

  function getAllBooks() {
    return BOOKS.map((b) => ({
      key: b.key,
      title: b.title,
      icon: b.icon,
      desc: b.desc,
      color: b.color || 'green'
    }));
  }

  function generateBook(key) {
    const book = BOOKS.find((b) => b.key === key);
    if (!book) return null;
    try {
      return book.generate();
    } catch (err) {
      console.error('Book generation error:', err);
      return {
        filename: key + '.txt',
        content: 'خطأ في توليد الكتاب: ' + err.message + '\n'
      };
    }
  }

  function renderBooksGrid() {
    return BOOKS.map((b) => {
      return '<div class="file-item">' +
        '<div class="file-ico">' + b.icon + '</div>' +
        '<div class="file-info">' +
          '<h4>' + b.title + '</h4>' +
          '<p>' + b.desc + '</p>' +
        '</div>' +
        '<span class="file-meta">TXT</span>' +
        '<button class="file-dl" data-book="' + b.key + '">⬇</button>' +
      '</div>';
    }).join('');
  }

  /* ============================================================
     EXPORT TO WINDOW
     ============================================================ */
  window.SB_BOOKS = {
    books: BOOKS,
    getAll: getAllBooks,
    generate: generateBook,
    render: renderBooksGrid,
    count: BOOKS.length
  };

  console.log(
    '%c📚 SECRET BOX — ' + BOOKS.length + ' Books Loaded',
    'background:linear-gradient(90deg,#a855f7,#ff2d95);color:#fff;font-size:14px;font-weight:bold;padding:6px 12px;border-radius:6px'
  );
  console.log('%c🎁 أعطيك معلومات مجاناً — انشر الموقع ليستفيد غيرك', 'color:#ffcc00;font-size:12px');

})();
