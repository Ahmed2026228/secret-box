/* SECRET BOX — BOOKS DATABASE v4 FINAL */
(function () {
  'use strict';

  var HR = '='.repeat(60);
  var HR2 = '-'.repeat(60);

  function H(t, s) {
    return '╔' + '═'.repeat(58) + '╗\n║ ' + pad(t, 56) + ' ║\n║ ' + pad(s, 56) + ' ║\n║ ' + pad('SECRET BOX', 56) + ' ║\n║ ' + pad('أحمد علي — السيد الأسود', 56) + ' ║\n╚' + '═'.repeat(58) + '╝\n\n';
  }
  function pad(s, n) { s = String(s); while (s.length < n) s = ' ' + s + ' '; return s.substring(0, n); }
  function F() { return '\n\n' + HR + '\n🎁 أعطيك معلومات مجاناً — لا تبخل عليّ وانشر الموقع ليستفيد غيرك\nالمطور: أحمد علي — السيد الأسود 🖤\n' + HR + '\n'; }
  function C(n, t) { return '\n\n' + HR2 + '\n  الفصل ' + n + ': ' + t + '\n' + HR2 + '\n\n'; }
  function S(t) { return '\n▶ ' + t + '\n' + '-'.repeat(50) + '\n'; }
  function L(arr) { return arr.map(function (x) { return '  • ' + x + '\n'; }).join(''); }
  function N(arr) { return arr.map(function (x, i) { return '  ' + (i + 1) + ') ' + x + '\n'; }).join(''); }
  function CODE(lines) {
    var out = '\n';
    lines.split('\n').forEach(function (l) { out += '   | ' + l + '\n'; });
    return out + '\n';
  }
  function P(t) { return t + '\n\n'; }

  var BOOKS = [];

  /* 1. Termux */
  BOOKS.push({ key: 'termux-master', title: 'Termux Master', icon: '📱', desc: 'دليل Termux الكامل', color: 'cyan', generate: function () {
    var o = H('TERMUX MASTER BOOK', 'Linux على أندرويد');
    o += C(1, 'ما هو Termux؟');
    o += P('Termux تطبيق مفتوح المصدر يمنحك بيئة Linux كاملة على أندرويد بدون root. تستطيع تشغيل أدوات الأمن، كتابة السكربتات، وإدارة الخوادم من هاتفك.');
    o += S('حمّل من F-Droid وليس Google Play');
    o += P('نسخة Play مهجورة من 2020. النسخة الرسمية الوحيدة على f-droid.org.');
    o += C(2, 'الإعداد الأولي');
    o += CODE('pkg update && pkg upgrade -y\ntermux-setup-storage\npkg install root-repo x11-repo -y');
    o += S('شرح الأوامر');
    o += L(['pkg update — يحدّث قائمة الحزم المتاحة', 'pkg upgrade — يحدّث الحزم المثبتة', 'termux-setup-storage — يمنح صلاحية الوصول للملفات']);
    o += C(3, 'الأدوات الأساسية');
    o += CODE('pkg install git python nano vim curl wget openssh -y');
    o += P('Git للتحكم بالإصدارات، Python لأدوات الأمن، nano و vim لتحرير النصوص.');
    o += C(4, 'أدوات الأمن');
    o += CODE('pkg install nmap hydra aircrack-ng -y\npip install sqlmap shodan');
    o += P('Nmap لمسح الشبكات، Hydra لاختبار كلمات المرور، SQLMap لكشف SQL Injection.');
    o += C(5, 'توزيعات Linux كاملة');
    o += CODE('pkg install proot-distro -y\nproot-distro install ubuntu\nproot-distro login ubuntu');
    o += P('تشغّل Ubuntu أو Kali كاملة داخل Termux. الخروج بـ exit.');
    o += C(6, 'Termux:API');
    o += CODE('pkg install termux-api -y\ntermux-battery-status\ntermux-location\ntermux-notification --title "t" --content "c"');
    o += P('تحكم بميزات الهاتف من الطرفية: البطارية، الموقع، الإشعارات، الرسائل.');
    o += C(7, 'نصائح');
    o += N(['فعّل Wake Lock لمنع النوم.', 'احفظ نسخة من ~/.termux.', 'استخدم tmux للجلسات المتعددة.', 'لا تستخدم sudo — Termux لا يدعمه.']);
    o += F();
    return { filename: 'Termux-Master-Book.txt', content: o };
  }});

  /* 2. Linux */
  BOOKS.push({ key: 'linux-master', title: 'Linux Master', icon: '🐧', desc: 'دليل Linux الشامل', color: 'green', generate: function () {
    var o = H('LINUX MASTER BOOK', 'دليل شامل');
    o += C(1, 'مقدمة');
    o += P('Linux نظام مفتوح المصدر يشغّل معظم الخوادم. فلسفته: كل شيء ملف.');
    o += C(2, 'التنقل');
    o += CODE('pwd        # المسار الحالي\nls -la     # الملفات بتفاصيل\ncd /path   # تغيير مجلد\ncd ..      # رجوع\ncd ~       # المجلد الرئيسي');
    o += C(3, 'الملفات');
    o += L(['mkdir folder — إنشاء مجلد', 'touch file — ملف فارغ', 'cp src dst — نسخ', 'mv src dst — نقل', 'rm file — حذف', 'rm -rf folder — حذف مجلد']);
    o += P('تحذير: rm -rf / يحذف كل شيء.');
    o += C(4, 'الصلاحيات');
    o += CODE('chmod 755 file    # rwxr-xr-x\nchmod 644 file    # rw-r--r--\nchmod 600 secret  # rw-------\nchmod +x script   # تنفيذ\nchown user:group file');
    o += C(5, 'البحث');
    o += CODE('find / -name "*.conf" 2>/dev/null\ngrep -r "password" /etc/');
    o += C(6, 'العمليات');
    o += L(['ps aux — كل العمليات', 'top / htop — مراقبة', 'kill -9 PID — إيقاف قسري', 'pkill firefox — بالاسم']);
    o += C(7, 'الشبكات');
    o += L(['ip a — عناوين IP', 'ping host — اختبار', 'netstat -tulnp — المنافذ', 'curl -I URL — ترويسات HTTP', 'ssh user@host — اتصال آمن']);
    o += C(8, 'الحزم');
    o += CODE('apt install pkg     # Debian/Ubuntu\ndnf install pkg     # Fedora\npacman -S pkg       # Arch');
    o += C(9, 'نصائح');
    o += N(['Tab للإكمال التلقائي.', 'Ctrl+R للبحث في السجل.', '!! لإعادة آخر أمر.', 'اقرأ man command لأي أمر.']);
    o += F();
    return { filename: 'Linux-Master-Book.txt', content: o };
  }});

  /* 3. Kali */
  BOOKS.push({ key: 'kali-master', title: 'Kali Master', icon: '🐉', desc: 'دليل Kali الشامل', color: 'purple', generate: function () {
    var o = H('KALI LINUX MASTER', 'توزيعة اختبار الاختراق');
    o += C(1, 'مقدمة');
    o += P('Kali توزيعة Debian-based من Offensive Security، فيها 600+ أداة أمنية موزّعة على 14 فئة.');
    o += C(2, 'طرق التثبيت');
    o += N(['VirtualBox / VMware — الأسهل للمبتدئين.', 'Dual Boot — مع Windows.', 'Live USB — بدون تثبيت.', 'WSL2 — داخل Windows.', 'Docker — حاوية.', 'Cloud — Linode, DigitalOcean.']);
    o += C(3, 'الإعداد بعد التثبيت');
    o += CODE('sudo apt update && sudo apt full-upgrade -y\nsudo apt autoremove -y && sudo apt autoclean');
    o += C(4, 'فئات الأدوات الـ14');
    o += S('1) جمع المعلومات');
    o += L(['Nmap — ماسح الشبكات', 'Masscan — سريع جداً', 'theHarvester — إيميلات ونطاقات', 'Maltego — تحليل علاقات']);
    o += S('2) تحليل الثغرات');
    o += L(['Nessus — تجاري', 'OpenVAS — مفتوح', 'Nikto — ثغرات الويب', 'Nuclei — قوالب YAML']);
    o += S('3) تطبيقات الويب');
    o += L(['Burp Suite — الأشهر', 'OWASP ZAP — مجاني', 'sqlmap — SQL Injection', 'ffuf, gobuster — Fuzzing', 'wpscan — WordPress']);
    o += S('4) كلمات المرور');
    o += L(['Hashcat — الأسرع (GPU)', 'John the Ripper', 'Hydra — هجوم قواميس', 'Crunch — إنشاء قوائم']);
    o += S('5) اللاسلكي');
    o += L(['Aircrack-ng', 'Wifite — آلية', 'Kismet — مراقبة', 'Reaver — WPS']);
    o += S('6) الاستغلال');
    o += L(['Metasploit — الأشهر', 'msfvenom — payloads', 'SearchSploit — قاعدة exploit-db', 'BeEF — XSS', 'SET — Social Eng']);
    o += S('7) الاعتراض');
    o += L(['Wireshark — محلل حزم', 'tcpdump — طرفية', 'Ettercap — MITM', 'Responder — NTLM']);
    o += S('8) بعد الاختراق');
    o += L(['Mimikatz — Windows', 'BloodHound — AD', 'LinPEAS / WinPEAS — تصعيد']);
    o += S('9) التحليل الجنائي');
    o += L(['Autopsy', 'Volatility — ذاكرة', 'Binwalk — firmware', 'ExifTool']);
    o += S('10-14) فئات أخرى');
    o += L(['Reporting: Dradis, CherryTree', 'Social Eng: Gophish, Evilginx2', 'Anonymity: Tor, Proxychains', 'Reverse: Ghidra, radare2', 'Stress: hping3']);
    o += C(5, 'تحذير');
    o += P('⚠️ استخدم أي أداة على أنظمة لا تملكها أو بدون إذن كتابي = جريمة في جميع الدول.');
    o += F();
    return { filename: 'Kali-Master-Book.txt', content: o };
  }});

  /* 4. Python */
  BOOKS.push({ key: 'python-hacking', title: 'Python for Hacking', icon: '🐍', desc: 'Python في الأمن', color: 'yellow', generate: function () {
    var o = H('PYTHON FOR HACKING', 'اللغة رقم 1 في الأمن');
    o += C(1, 'لماذا Python؟');
    o += P('سهلة، سريعة، مكتبات ضخمة متخصصة. معظم أدوات الأمن مكتوبة بـ Python.');
    o += C(2, 'الأساسيات');
    o += CODE('name = "Ahmed"\nage = 25\nitems = [1, 2, 3]\ninfo = {"name": "Ali"}\n\nfor i in range(5):\n    print(i)');
    o += C(3, 'مكتبة requests');
    o += CODE('import requests\nr = requests.get("https://site.com")\nprint(r.status_code, r.text[:100])');
    o += C(4, 'مكتبة socket');
    o += CODE('import socket\ns = socket.socket()\ns.settimeout(2)\nresult = s.connect_ex(("192.168.1.1", 80))\nprint("open" if result == 0 else "closed")\ns.close()');
    o += C(5, 'مكتبة scapy');
    o += CODE('from scapy.all import *\npkt = IP(dst="8.8.8.8")/ICMP()\nreply = sr1(pkt, timeout=2)\nprint(reply.summary())');
    o += C(6, 'مكتبة paramiko (SSH)');
    o += CODE('import paramiko\nc = paramiko.SSHClient()\nc.set_missing_host_key_policy(paramiko.AutoAddPolicy())\nc.connect("host", username="u", password="p")\nstdin, stdout, stderr = c.exec_command("ls -la")\nprint(stdout.read().decode())\nc.close()');
    o += C(7, 'سكربت: فحص عدة منافذ');
    o += CODE('import socket\nhost = input("Host: ")\nports = [21,22,23,80,443,3306,3389]\nfor p in ports:\n    s = socket.socket()\n    s.settimeout(1)\n    if s.connect_ex((host,p))==0:\n        print(f"[+] {p} open")\n    s.close()');
    o += C(8, 'نصائح');
    o += L(['استخدم virtualenv لعزل المكتبات.', 'try/except للأخطاء.', 'argparse لتمرير معاملات.', 'وثّق كودك بتعليقات.']);
    o += F();
    return { filename: 'Python-Hacking-Book.txt', content: o };
  }});

  /* 5. Git */
  BOOKS.push({ key: 'git-commands', title: 'Git Commands', icon: '📦', desc: 'أوامر Git', color: 'orange', generate: function () {
    var o = H('GIT COMMANDS BOOK', 'التحكم بالإصدارات');
    o += C(1, 'الإعداد');
    o += CODE('git config --global user.name "اسمك"\ngit config --global user.email "email"');
    o += C(2, 'بدء مشروع');
    o += CODE('git init              # مستودع جديد\ngit clone URL         # استنساخ');
    o += C(3, 'سير يومي');
    o += CODE('git status\ngit add .\ngit commit -m "msg"\ngit push');
    o += C(4, 'الفروع');
    o += CODE('git branch             # عرض\ngit branch new          # إنشاء\ngit checkout new        # تبديل\ngit checkout -b new     # إنشاء+تبديل\ngit merge new           # دمج');
    o += C(5, 'السجلات');
    o += CODE('git log\ngit log --oneline\ngit log --graph\ngit diff');
    o += C(6, 'التراجع');
    o += CODE('git checkout -- file     # استعادة\ngit reset HEAD file      # إلغاء add\ngit reset --soft HEAD~1  # إلغاء commit\ngit revert COMMIT');
    o += C(7, 'Remote');
    o += CODE('git remote add origin URL\ngit push -u origin main\ngit pull\ngit fetch');
    o += C(8, 'Stash');
    o += CODE('git stash\ngit stash list\ngit stash pop');
    o += F();
    return { filename: 'Git-Commands-Book.txt', content: o };
  }});

  /* 6. Docker */
  BOOKS.push({ key: 'docker-master', title: 'Docker Master', icon: '🐳', desc: 'الحاويات', color: 'cyan', generate: function () {
    var o = H('DOCKER MASTER', 'الحاويات');
    o += C(1, 'مقدمة');
    o += P('Docker منصة حاويات — بديل أخف من VMs. ممتاز لبناء مختبرات اختبار آمنة.');
    o += C(2, 'الأساسيات');
    o += CODE('docker ps\ndocker ps -a\ndocker images');
    o += C(3, 'التشغيل');
    o += CODE('docker pull ubuntu\ndocker run -it ubuntu bash\ndocker run -d nginx\ndocker run -p 8080:80 nginx');
    o += C(4, 'الإدارة');
    o += CODE('docker exec -it CONT bash\ndocker stop CONT\ndocker rm CONT\ndocker logs CONT\ndocker stats');
    o += C(5, 'بناء صورة');
    o += CODE('# Dockerfile\nFROM ubuntu:22.04\nRUN apt install -y python3\nCOPY app.py /app.py\nCMD ["python3","/app.py"]\n\n# Build\ndocker build -t myimage .');
    o += C(6, 'مختبرات جاهزة');
    o += CODE('docker run -d -p 3000:3000 bkimminich/juice-shop\ndocker run -d -p 80:80 vulnerables/web-dvwa\ndocker run -it kalilinux/kali-rolling bash');
    o += C(7, 'التنظيف');
    o += CODE('docker system prune -a\ndocker volume prune');
    o += F();
    return { filename: 'Docker-Master-Book.txt', content: o };
  }});

  /* 7. ADB */
  BOOKS.push({ key: 'android-adb', title: 'Android & ADB', icon: '📲', desc: 'التحكم بأندرويد', color: 'green', generate: function () {
    var o = H('ANDROID & ADB BOOK', 'التحكم بأندرويد');
    o += C(1, 'ما هو ADB؟');
    o += P('Android Debug Bridge — أداة رسمية للتحكم بأندرويد من الكمبيوتر.');
    o += C(2, 'التفعيل');
    o += N(['الإعدادات ← حول الهاتف.', 'اضغط رقم الإصدار 7 مرات.', 'خيارات المطوّر ← تصحيح USB.', 'وافق على البصمة.']);
    o += C(3, 'الأساسيات');
    o += CODE('adb devices\nadb shell\nadb reboot\nadb reboot recovery\nadb reboot bootloader');
    o += C(4, 'التطبيقات');
    o += CODE('adb install app.apk\nadb install -r app.apk\nadb uninstall com.pkg\nadb shell pm list packages\nadb shell pm list packages -3');
    o += C(5, 'الملفات');
    o += CODE('adb push file /sdcard/\nadb pull /sdcard/file ./');
    o += C(6, 'السجلات');
    o += CODE('adb logcat\nadb logcat -v time\nadb logcat *:E');
    o += C(7, 'التحكم');
    o += CODE('adb shell input tap 500 500\nadb shell input text "hello"\nadb shell input keyevent 26\nadb shell screencap -p /sdcard/s.png');
    o += C(8, 'الشبكة');
    o += CODE('adb tcpip 5555\nadb connect 192.168.1.5:5555');
    o += F();
    return { filename: 'Android-ADB-Book.txt', content: o };
  }});

  /* 8. Network */
  BOOKS.push({ key: 'network-master', title: 'Network Master', icon: '📡', desc: 'أمن الشبكات', color: 'purple', generate: function () {
    var o = H('NETWORK MASTER', 'دليل الشبكات الشامل');
    o += C(1, 'طبقات OSI السبع');
    o += L(['7. Application — HTTP, DNS, FTP', '6. Presentation — SSL/TLS', '5. Session — NetBIOS, RPC', '4. Transport — TCP, UDP', '3. Network — IP, ICMP, ARP', '2. Data Link — Ethernet, MAC', '1. Physical — كابلات']);
    o += C(2, 'المنافذ الشهيرة');
    o += L(['20/21 FTP', '22 SSH', '23 Telnet', '25 SMTP', '53 DNS', '80 HTTP', '443 HTTPS', '445 SMB', '3306 MySQL', '3389 RDP', '6379 Redis']);
    o += C(3, 'البروتوكولات');
    o += L(['TCP — موثوق متصل', 'UDP — سريع بدون اتصال', 'HTTP/HTTPS — الويب', 'DNS — ترجمة النطاقات', 'DHCP — عناوين تلقائية', 'ARP — IP إلى MAC', 'ICMP — ping']);
    o += C(4, 'فحص بـ Nmap');
    o += CODE('nmap 192.168.1.1\nnmap -sV 192.168.1.1\nnmap -p 1-1000 192.168.1.1\nnmap -sn 192.168.1.0/24\nnmap -A 192.168.1.1');
    o += C(5, 'اختبار الاتصال');
    o += CODE('ping 8.8.8.8\ntraceroute google.com\nmtr google.com');
    o += C(6, 'تحليل DNS');
    o += CODE('dig example.com\ndig @8.8.8.8 example.com ANY\nwhois example.com');
    o += C(7, 'هجمات');
    o += L(['MITM — رجل في المنتصف', 'ARP Spoofing', 'DNS Spoofing', 'DoS / DDoS', 'Session Hijacking', 'Rogue AP']);
    o += C(8, 'الدفاعات');
    o += L(['Firewall / NGFW', 'IDS / IPS', 'WAF', 'SIEM', 'Zero Trust', '802.1X']);
    o += C(9, 'تحليل الحزم');
    o += CODE('wireshark\ntshark -i eth0\ntcpdump -i eth0 port 80\ntcpdump -i eth0 -A');
    o += F();
    return { filename: 'Network-Master-Book.txt', content: o };
  }});

  /* 9. SQL */
  BOOKS.push({ key: 'sql-commands', title: 'SQL Commands', icon: '🗄️', desc: 'قواعد البيانات', color: 'yellow', generate: function () {
    var o = H('SQL COMMANDS BOOK', 'قواعد البيانات');
    o += C(1, 'مقدمة');
    o += P('SQL لغة قواعد البيانات العلائقية (MySQL, PostgreSQL, SQLite, Oracle).');
    o += C(2, 'SELECT');
    o += CODE('SELECT * FROM users;\nSELECT name, email FROM users;\nSELECT * FROM users WHERE id=1;\nSELECT * FROM users ORDER BY id DESC;\nSELECT * FROM users LIMIT 10;');
    o += C(3, 'التجميع');
    o += CODE('SELECT COUNT(*) FROM users;\nSELECT AVG(salary) FROM users;\nSELECT city, COUNT(*) FROM users GROUP BY city;');
    o += C(4, 'INSERT/UPDATE/DELETE');
    o += CODE('INSERT INTO users (name) VALUES ("Ali");\nUPDATE users SET name="Ahmed" WHERE id=1;\nDELETE FROM users WHERE id=1;');
    o += C(5, 'JOIN');
    o += CODE('SELECT * FROM users u\nINNER JOIN orders o ON u.id=o.uid;\n\nSELECT * FROM users u\nLEFT JOIN orders o ON u.id=o.uid;');
    o += C(6, 'أنماط');
    o += CODE('WHERE name LIKE "A%"\nWHERE id IN (1,2,3)\nWHERE id BETWEEN 1 AND 10\nWHERE email IS NULL');
    o += C(7, 'الجداول');
    o += CODE('CREATE DATABASE shop;\nCREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(50));\nALTER TABLE users ADD email VARCHAR(100);\nDROP TABLE users;');
    o += C(8, 'الحماية من SQLi');
    o += P('استخدم Prepared Statements دائماً:');
    o += CODE('cursor.execute("SELECT * FROM users WHERE id=%s", (uid,))');
    o += F();
    return { filename: 'SQL-Commands-Book.txt', content: o };
  }});

  /* 10. Ethical Hacking */
  BOOKS.push({ key: 'ethical-hacking', title: 'Ethical Hacking', icon: '🎯', desc: 'دليل الاختراق الأخلاقي', color: 'red', generate: function () {
    var o = H('ETHICAL HACKING GUIDE', 'الفن والعلم');
    o += C(1, 'مقدمة');
    o += P('الاختراق الأخلاقي استخدام مهارات الاختراق بشكل قانوني بهدف اختبار أمان الأنظمة، بموافقة كتابية مسبقة.');
    o += C(2, 'المراحل التسع');
    o += N(['Reconnaissance — جمع المعلومات', 'Scanning — مسح الشبكة', 'Enumeration — تعداد الخدمات', 'Exploitation — استغلال الثغرات', 'Privilege Escalation — تصعيد', 'Lateral Movement — تنقل جانبي', 'Persistence — الثبات', 'Covering Tracks — تغطية', 'Reporting — التقرير']);
    o += C(3, 'أنواع المخترقين');
    o += L(['White Hat — أخلاقي بقانون', 'Black Hat — ضار ومجرم', 'Grey Hat — بينهما', 'Red Team — هجوم', 'Blue Team — دفاع', 'Purple Team — دمج', 'Script Kiddie — مبتدئ', 'APT — مدعوم دولة']);
    o += C(4, 'الشهادات');
    o += L(['مبتدئ: Security+, CEH, eJPT', 'متوسط: PNPT, GPEN, CRTP', 'متقدم: OSCP, OSWE, OSED, OSEP', 'خبير: CISSP, CISM, CISA']);
    o += C(5, 'منصات التدريب');
    o += L(['TryHackMe — مبتدئين', 'Hack The Box — واقعي', 'VulnHub — أجهزة', 'PortSwigger Academy — ويب', 'picoCTF — مسابقات', 'OverTheWire — Linux']);
    o += C(6, 'الأدوات');
    o += L(['Nmap, Wireshark, Burp Suite', 'Metasploit, sqlmap, Hydra', 'Hashcat, John, Aircrack-ng', 'Maltego, Ghidra, Volatility']);
    o += C(7, 'الإطار القانوني');
    o += L(['إذن كتابي دائماً', 'Scope واضح', 'Rules of Engagement', 'الإفصاح المسؤول', 'تسليم التقرير']);
    o += P('⚠️ الاختراق بدون إذن = جريمة في كل الدول.');
    o += C(8, 'خارطة التعلم');
    o += N(['أساسيات الشبكات و Linux', 'Python و Bash', 'مفاهيم الأمن', 'TryHackMe و OverTheWire', 'تخصص', 'HTB و شهادات', 'OSCP ووظيفة']);
    o += F();
    return { filename: 'Ethical-Hacking-Guide.txt', content: o };
  }});

  /* 11. Web Security */
  BOOKS.push({ key: 'web-security', title: 'Web Security', icon: '🌐', desc: 'أمن الويب و OWASP', color: 'cyan', generate: function () {
    var o = H('WEB SECURITY GUIDE', 'أمن تطبيقات الويب');
    o += C(1, 'OWASP Top 10');
    o += N(['Broken Access Control', 'Cryptographic Failures', 'Injection', 'Insecure Design', 'Security Misconfiguration', 'Vulnerable Components', 'Auth Failures', 'Data Integrity Failures', 'Logging Failures', 'SSRF']);
    o += C(2, 'SQL Injection');
    o += P('المثال: admin\' OR \'1\'=\'1 — يفتح الدخول.');
    o += L(['الأنواع: Classic, Union, Error, Blind, Time-based', 'الحماية: Prepared Statements', 'الأداة: sqlmap']);
    o += C(3, 'XSS');
    o += L(['Reflected — يعكس مباشرة', 'Stored — مخزن (الأخطر)', 'DOM-based — من JavaScript', 'الحماية: CSP، Escape، Sanitize']);
    o += C(4, 'CSRF');
    o += P('تزوير طلب من موقع آخر. الحماية: CSRF Tokens، SameSite.');
    o += C(5, 'IDOR');
    o += P('تغيير ?id=1000 إلى 1001 للوصول لبيانات آخرين. الحماية: UUIDs.');
    o += C(6, 'SSRF');
    o += L(['http://127.0.0.1:80', 'http://169.254.169.254/latest/meta-data/', 'file:///etc/passwd']);
    o += C(7, 'الأدوات');
    o += L(['Burp Suite — الأشهر', 'OWASP ZAP — مجاني', 'sqlmap — SQLi', 'ffuf, gobuster — Fuzzing', 'nuclei — قوالب']);
    o += C(8, 'منصات التدريب');
    o += L(['PortSwigger Academy (مجاني)', 'Juice Shop', 'DVWA', 'bWAPP', 'WebGoat']);
    o += F();
    return { filename: 'Web-Security-Guide.txt', content: o };
  }});

  /* 12. Crypto */
  BOOKS.push({ key: 'crypto-guide', title: 'Cryptography', icon: '🔐', desc: 'علم التشفير', color: 'purple', generate: function () {
    var o = H('CRYPTOGRAPHY GUIDE', 'علم التشفير');
    o += C(1, 'أنواع التشفير');
    o += L(['Symmetric — نفس المفتاح', 'Asymmetric — مفتاحان', 'Hash — اتجاه واحد', 'Digital Signature — توقيع']);
    o += C(2, 'خوارزميات متماثلة');
    o += L(['AES (128/192/256)', 'ChaCha20', 'Twofish', 'Blowfish (قديم)', '3DES (قديم)']);
    o += C(3, 'خوارزميات غير متماثلة');
    o += L(['RSA (2048/4096)', 'ECC', 'Ed25519', 'ECDSA']);
    o += C(4, 'دوال الهاش');
    o += L(['SHA-256/512', 'SHA-3', 'BLAKE2/BLAKE3', 'bcrypt/Argon2', 'MD5/SHA-1 (مكسورة)']);
    o += C(5, 'GPG');
    o += CODE('gpg --gen-key\ngpg -c file.txt          # تشفير\ngpg -d file.txt.gpg      # فك\ngpg -e -r user@x.com file');
    o += C(6, 'OpenSSL');
    o += CODE('openssl enc -aes-256-cbc -in f -out f.enc\nopenssl enc -d -aes-256-cbc -in f.enc -out f\nopenssl s_client -connect site.com:443');
    o += C(7, 'Hash');
    o += CODE('sha256sum file\nmd5sum file\necho -n "text" | sha256sum');
    o += C(8, 'أدوات');
    o += L(['GPG — بريد وملفات', 'OpenSSL — مكتبة شاملة', 'VeraCrypt — أقراص', 'Age — حديث', 'Cryptomator — سحابة']);
    o += C(9, 'Post-Quantum');
    o += L(['CRYSTALS-Kyber', 'CRYSTALS-Dilithium', 'Falcon', 'SPHINCS+']);
    o += F();
    return { filename: 'Cryptography-Guide.txt', content: o };
  }});

  /* 13. OSINT */
  BOOKS.push({ key: 'osint-guide', title: 'OSINT Guide', icon: '🔍', desc: 'الاستخبارات المفتوحة', color: 'cyan', generate: function () {
    var o = H('OSINT GUIDE', 'الاستخبارات المفتوحة');
    o += C(1, 'مقدمة');
    o += P('OSINT = Open Source Intelligence. جمع معلومات من مصادر عامة بشكل قانوني.');
    o += C(2, 'محركات البحث');
    o += L(['Shodan — أجهزة IoT', 'Censys — مسح الإنترنت', 'FOFA — محرك صيني', 'GreyNoise — تحليل تهديدات']);
    o += C(3, 'Google Dorks');
    o += CODE('site:example.com\ninurl:admin\nintitle:"index of"\nfiletype:pdf\nintext:"password"\next:env DB_PASSWORD');
    o += C(4, 'البحث عن أشخاص');
    o += L(['Have I Been Pwned', 'DeHashed', 'IntelX', 'Sherlock', 'Maigret']);
    o += C(5, 'النطاقات');
    o += L(['Whois', 'DNSDumpster', 'SecurityTrails', 'VirusTotal', 'urlscan.io', 'crt.sh', 'BuiltWith']);
    o += C(6, 'الصور');
    o += L(['Google Reverse', 'Yandex Images', 'TinEye', 'PimEyes', 'ExifTool']);
    o += C(7, 'الأدوات');
    o += L(['Maltego — تحليل علاقات', 'SpiderFoot — أتمتة', 'theHarvester', 'Recon-ng', 'Photon']);
    o += C(8, 'أخلاقيات');
    o += L(['استخدم فقط المعلومات المتاحة علناً', 'لا تخترق حسابات خاصة', 'احترم الخصوصية', 'وثّق المصادر']);
    o += F();
    return { filename: 'OSINT-Guide.txt', content: o };
  }});

  /* 14. Wireless */
  BOOKS.push({ key: 'wireless-security', title: 'Wireless Security', icon: '📶', desc: 'أمن WiFi', color: 'purple', generate: function () {
    var o = H('WIRELESS SECURITY', 'أمن WiFi و Bluetooth');
    o += C(1, 'معايير WiFi');
    o += L(['802.11n — WiFi 4', '802.11ac — WiFi 5', '802.11ax — WiFi 6', '802.11be — WiFi 7']);
    o += C(2, 'التشفير');
    o += L(['WEP — مكسور ❌', 'WPA — ضعيف ❌', 'WPA2 — مقبول ✅', 'WPA3 — الأفضل ✅']);
    o += C(3, 'Monitor Mode');
    o += CODE('sudo airmon-ng start wlan0\nsudo airmon-ng check kill\nsudo airodump-ng wlan0mon\nsudo airmon-ng stop wlan0mon');
    o += C(4, 'التقاط Handshake');
    o += CODE('sudo airodump-ng -c 6 --bssid MAC -w cap wlan0mon\n# نافذة أخرى:\nsudo aireplay-ng --deauth 10 -a MAC wlan0mon');
    o += C(5, 'هجمات WiFi');
    o += L(['Handshake Capture', 'Deauth Attack', 'Evil Twin', 'Rogue AP', 'WPS PIN', 'PMKID', 'KRACK']);
    o += C(6, 'Bluetooth');
    o += L(['Bluejacking', 'Bluesnarfing', 'Bluebugging', 'BLE Sniffing']);
    o += C(7, 'حماية WiFi');
    o += N(['WPA3 + AES', 'كلمة مرور 20+ حرف', 'تعطيل WPS', 'تعطيل الإدارة عن بعد', 'تحديث Firmware', 'شبكة ضيوف منفصلة']);
    o += F();
    return { filename: 'Wireless-Security-Book.txt', content: o };
  }});

  /* 15. Forensics */
  BOOKS.push({ key: 'forensics-guide', title: 'Digital Forensics', icon: '🔬', desc: 'التحليل الجنائي', color: 'cyan', generate: function () {
    var o = H('DIGITAL FORENSICS', 'التحليل الجنائي الرقمي');
    o += C(1, 'المراحل');
    o += N(['Identification', 'Preservation', 'Acquisition', 'Examination', 'Analysis', 'Documentation', 'Presentation']);
    o += C(2, 'نسخ القرص');
    o += CODE('dd if=/dev/sda of=image.dd bs=4M\ndc3dd if=/dev/sda of=image.dd hash=sha256\nsha256sum image.dd');
    o += C(3, 'الأدوات');
    o += L(['Autopsy — GUI', 'Sleuth Kit — CLI', 'Volatility — ذاكرة', 'Binwalk — firmware', 'Foremost — استعادة', 'ExifTool']);
    o += C(4, 'تحليل الذاكرة');
    o += CODE('vol.py -f mem.dump imageinfo\nvol.py -f mem.dump --profile=Win10x64 pslist\nvol.py -f mem.dump --profile=Win10x64 netscan');
    o += C(5, 'قواعد');
    o += L(['استخدم Write Blocker', 'وثّق كل خطوة', 'Chain of Custody', 'Hash للتحقق', 'بيئة معزولة']);
    o += F();
    return { filename: 'Forensics-Guide.txt', content: o };
  }});

  /* 16. Reverse */
  BOOKS.push({ key: 'reverse-engineering', title: 'Reverse Engineering', icon: '🔧', desc: 'الهندسة العكسية', color: 'red', generate: function () {
    var o = H('REVERSE ENGINEERING', 'الهندسة العكسية');
    o += C(1, 'الأدوات');
    o += L(['Ghidra — مفتوح', 'IDA Pro/Free', 'radare2 / Cutter', 'x64dbg — Windows', 'GDB + pwndbg — Linux', 'Jadx — Android']);
    o += C(2, 'أنواع التحليل');
    o += L(['Static — بدون تشغيل', 'Dynamic — أثناء التشغيل', 'Hybrid — مختلط']);
    o += C(3, 'أوامر');
    o += CODE('file binary\nstrings binary\nreadelf -h binary\nobjdump -d binary\nltrace ./binary\nstrace ./binary\ngdb ./binary');
    o += C(4, 'ثغرات شائعة');
    o += L(['Buffer Overflow', 'Use After Free', 'Double Free', 'Race Condition', 'Format String', 'Integer Overflow', 'ROP/JOP']);
    o += C(5, 'حمايات');
    o += L(['ASLR', 'DEP/NX', 'Stack Canary', 'PIE', 'CFI']);
    o += C(6, 'Android');
    o += CODE('jadx -d out app.apk\napktool d app.apk\nfrida -U -f com.app -l hook.js');
    o += F();
    return { filename: 'Reverse-Engineering.txt', content: o };
  }});

  /* 17. Cloud */
  BOOKS.push({ key: 'cloud-security', title: 'Cloud Security', icon: '☁️', desc: 'أمن السحابة', color: 'cyan', generate: function () {
    var o = H('CLOUD SECURITY', 'أمن AWS/Azure/GCP');
    o += C(1, 'نماذج الخدمة');
    o += L(['IaaS — بنية كخدمة', 'PaaS — منصة كخدمة', 'SaaS — برنامج كخدمة', 'FaaS — وظيفة كخدمة', 'Serverless']);
    o += C(2, 'AWS');
    o += L(['GuardDuty', 'Security Hub', 'IAM Access Analyzer', 'CloudTrail', 'Inspector', 'Macie']);
    o += C(3, 'Azure');
    o += L(['Defender for Cloud', 'Sentinel', 'Entra ID', 'Key Vault']);
    o += C(4, 'GCP');
    o += L(['Security Command Center', 'Cloud Armor', 'IAM', 'VPC Service Controls']);
    o += C(5, 'أدوات تدقيق');
    o += L(['ScoutSuite', 'Prowler', 'Cloudsplaining', 'Pacu', 'trufflehog', 'gitleaks']);
    o += C(6, 'مخاطر');
    o += N(['مفاتيح API مسربة', 'S3 Buckets مفتوحة', 'IAM Permissions زائدة', 'عدم تشفير', 'Security Groups مفتوحة', 'عدم استخدام MFA']);
    o += C(7, 'أفضل ممارسات');
    o += L(['Least Privilege', 'MFA على كل شيء', 'تشفير at-rest و in-transit', 'مراقبة مستمرة', 'تدوير المفاتيح', 'Zero Trust']);
    o += F();
    return { filename: 'Cloud-Security-Book.txt', content: o };
  }});

  /* 18. IoT */
  BOOKS.push({ key: 'iot-security', title: 'IoT Security', icon: '🌐', desc: 'إنترنت الأشياء', color: 'green', generate: function () {
    var o = H('IOT SECURITY', 'إنترنت الأشياء');
    o += C(1, 'المخاطر');
    o += N(['كلمات مرور افتراضية', 'Firmware قديم', 'منافذ مفتوحة', 'تشفير ضعيف', 'اتصالات غير آمنة', 'Hardcoded credentials']);
    o += C(2, 'الأدوات');
    o += L(['Binwalk — firmware', 'Firmware Analysis Toolkit', 'AttifyOS', 'RouterSploit', 'Shodan', 'UART/JTAG tools']);
    o += C(3, 'منهجية');
    o += N(['جمع معلومات', 'تحليل اتصالات', 'استخراج Firmware', 'تحليل Firmware', 'اختبار UART/JTAG', 'اختبار Wireless', 'اختبار APIs']);
    o += C(4, 'أوامر');
    o += CODE('binwalk firmware.bin\nbinwalk -e firmware.bin\nfirmwalker folder');
    o += C(5, 'دفاعات');
    o += L(['غيّر كلمات المرور الافتراضية', 'حدّث Firmware', 'افصل IoT', 'راقب التدفق', 'أغلق المنافذ', 'فعّل التشفير']);
    o += F();
    return { filename: 'IoT-Security-Book.txt', content: o };
  }});

  /* 19. Blockchain */
  BOOKS.push({ key: 'blockchain-security', title: 'Blockchain Security', icon: '⛓️', desc: 'أمن العقود الذكية', color: 'orange', generate: function () {
    var o = H('BLOCKCHAIN SECURITY', 'أمن العقود الذكية');
    o += C(1, 'ثغرات شائعة');
    o += L(['Reentrancy', 'Integer Overflow', 'Access Control', 'Front-running', 'Flash Loan', 'Oracle Manipulation', 'DoS']);
    o += C(2, 'Reentrancy — مثال');
    o += CODE('// خاطئ\nfunction withdraw() {\n    uint bal = balances[msg.sender];\n    msg.sender.call{value: bal}("");\n    balances[msg.sender] = 0;  // ← بعد الإرسال!\n}\n\n// صحيح\nfunction withdraw() {\n    uint bal = balances[msg.sender];\n    balances[msg.sender] = 0;  // ← قبل الإرسال\n    msg.sender.call{value: bal}("");\n}');
    o += C(3, 'أدوات التدقيق');
    o += L(['Slither — تحليل ثابت', 'Mythril', 'Manticore', 'Echidna — fuzzer', 'Remix IDE', 'Foundry']);
    o += C(4, 'منهجية');
    o += N(['فهم العقد', 'تحليل ثابت', 'اختبار يدوي', 'Fuzzing', 'Formal Verification', 'اختبار الغاز', 'التقرير']);
    o += C(5, 'أفضل ممارسات');
    o += L(['تدقيق من أكثر من جهة', 'Bug Bounty', 'Timelock', 'Multi-sig', 'اختبار شامل', 'OpenZeppelin']);
    o += F();
    return { filename: 'Blockchain-Security-Book.txt', content: o };
  }});

  /* 20. SCADA */
  BOOKS.push({ key: 'scada-security', title: 'SCADA Security', icon: '🏭', desc: 'أنظمة التحكم', color: 'red', generate: function () {
    var o = H('SCADA SECURITY', 'أنظمة التحكم الصناعية');
    o += C(1, 'المفاهيم');
    o += L(['SCADA — التحكم والإشراف', 'ICS — Industrial Control', 'PLC — Programmable Logic Controller', 'HMI — Human Machine Interface', 'RTU', 'DCS']);
    o += C(2, 'البروتوكولات');
    o += L(['Modbus', 'DNP3', 'Profinet', 'EtherNet/IP', 'OPC UA', 'IEC 61850', 'BACnet']);
    o += C(3, 'هجمات معروفة');
    o += L(['Stuxnet (2010)', 'Industroyer (2016)', 'Triton (2017)', 'Havex (2014)', 'BlackEnergy (2015)']);
    o += C(4, 'مخاطر');
    o += N(['اتصال ICS بالإنترنت', 'كلمات مرور ضعيفة', 'عدم تحديث', 'شبكات مسطحة', 'غياب المراقبة', 'USB غير موثوق']);
    o += C(5, 'أدوات');
    o += L(['GRASSMARLIN', 'Wireshark dissectors', 'PLCinject', 'Metasploit ICS', 'ModbusPal']);
    o += C(6, 'دفاعات');
    o += L(['فصل شبكة ICS', 'Data Diode', 'مراقبة مستمرة', 'تدريب الموظفين', 'Backups', 'IDS متخصص']);
    o += F();
    return { filename: 'SCADA-Security-Book.txt', content: o };
  }});

  /* 21. Threat Intel */
  BOOKS.push({ key: 'threat-intel', title: 'Threat Intelligence', icon: '🕵️', desc: 'استخبارات التهديدات', color: 'purple', generate: function () {
    var o = H('THREAT INTELLIGENCE', 'استخبارات التهديدات');
    o += C(1, 'الأنواع');
    o += L(['Strategic — للقادة', 'Operational — للعمليات', 'Tactical — للمحللين', 'Technical — للمهندسين']);
    o += C(2, 'أطر');
    o += L(['Cyber Kill Chain', 'MITRE ATT&CK — الأشهر', 'Diamond Model', 'Pyramid of Pain']);
    o += C(3, 'MITRE ATT&CK — 14 تكتيك');
    o += L(['Reconnaissance', 'Resource Development', 'Initial Access', 'Execution', 'Persistence', 'Privilege Escalation', 'Defense Evasion', 'Credential Access', 'Discovery', 'Lateral Movement', 'Collection', 'C2', 'Exfiltration', 'Impact']);
    o += C(4, 'مصادر');
    o += L(['MISP', 'OpenCTI', 'AlienVault OTX', 'ThreatConnect', 'Recorded Future', 'VirusTotal']);
    o += C(5, 'مصطلحات');
    o += L(['IOC — Indicator of Compromise', 'IOA — Indicator of Attack', 'TTPs — Tactics, Techniques, Procedures', 'APT — Advanced Persistent Threat', 'C2 — Command and Control']);
    o += F();
    return { filename: 'Threat-Intelligence.txt', content: o };
  }});

  /* 22. Malware Analysis */
  BOOKS.push({ key: 'malware-analysis', title: 'Malware Analysis', icon: '🦠', desc: 'تحليل البرمجيات الخبيثة', color: 'red', generate: function () {
    var o = H('MALWARE ANALYSIS', 'تحليل البرمجيات الخبيثة');
    o += C(1, 'الأنواع');
    o += L(['Virus — ينسخ نفسه', 'Worm — ينتشر', 'Trojan — متنكر', 'Ransomware — فدية', 'Spyware', 'Rootkit', 'Keylogger', 'Botnet', 'RAT', 'Dropper', 'Loader']);
    o += C(2, 'التحليل الساكن');
    o += CODE('file sample.exe\nstrings sample.exe\nobjdump -d sample\nreadelf -h sample');
    o += P('أدوات: PEview, PEStudio, Detect It Easy, YARA.');
    o += C(3, 'التحليل الديناميكي');
    o += L(['Cuckoo / ANY.RUN — Sandbox', 'Process Monitor', 'Process Hacker', 'Regshot', 'Wireshark', 'Frida / x64dbg']);
    o += C(4, 'بيئة آمنة');
    o += N(['VM معزولة (VirtualBox)', 'بدون شبكة أو Host-Only', 'Snapshot قبل', 'Host Linux منفصل', 'أدوات مراقبة جاهزة']);
    o += P('⚠️ لا تحلل Malware على جهاز حقيقي!');
    o += C(5, 'قواعد YARA');
    o += CODE('rule Example {\n    strings:\n        $a = "malicious_string"\n    condition:\n        $a\n}');
    o += C(6, 'دفاعات');
    o += L(['EDR على كل الأجهزة', 'تحديثات دورية', 'تدريب الموظفين', 'Email filtering', 'Backups منتظمة']);
    o += F();
    return { filename: 'Malware-Analysis-Book.txt', content: o };
  }});

  /* 23. SOC */
  BOOKS.push({ key: 'soc-analyst', title: 'SOC Analyst Guide', icon: '🎯', desc: 'محلل SOC', color: 'cyan', generate: function () {
    var o = H('SOC ANALYST GUIDE', 'مركز عمليات الأمن');
    o += C(1, 'ما هو SOC؟');
    o += P('Security Operations Center — فريق يعمل 24/7 لمراقبة الأنظمة والاستجابة للحوادث.');
    o += C(2, 'المسؤوليات');
    o += L(['مراقبة 24/7', 'تحليل التنبيهات', 'التحقق', 'الاستجابة', 'التصعيد', 'التقارير', 'Threat Hunting']);
    o += C(3, 'المستويات');
    o += N(['L1 — Triaging', 'L2 — Investigation', 'L3 — Threat Hunting', 'Manager']);
    o += C(4, 'الأدوات');
    o += L(['SIEM: Splunk, QRadar, Sentinel', 'EDR: CrowdStrike, SentinelOne', 'SOAR: Phantom, Demisto', 'TIP: MISP, OpenCTI']);
    o += C(5, 'مصادر البيانات');
    o += L(['Firewall logs', 'Proxy logs', 'DNS logs', 'EDR telemetry', 'Windows Events', 'Linux syslog', 'Cloud logs', 'NetFlow']);
    o += C(6, 'مؤشرات IOC');
    o += L(['عناوين IP مشبوهة', 'نطاقات DNS خبيثة', 'Hash files', 'URLs خطرة', 'User Agents غريبة', 'Registry Keys جديدة']);
    o += C(7, 'أول 10 دقائق');
    o += N(['تحقق من التنبيه', 'اجمع السياق', 'حدد المصدر', 'افحص الأثر', 'قرر التصعيد', 'وثّق', 'تواصل مع الفريق', 'اعزل', 'تعلّم', 'حدّث Playbook']);
    o += F();
    return { filename: 'SOC-Analyst-Guide.txt', content: o };
  }});

  /* 24. Career */
  BOOKS.push({ key: 'career-guide', title: 'Cyber Career Guide', icon: '💼', desc: 'المسار الوظيفي', color: 'green', generate: function () {
    var o = H('CYBER CAREER GUIDE', 'مسار وظيفي في الأمن');
    o += C(1, 'خارطة التعلم');
    o += N(['الشهر 1-2: شبكات + Linux', 'الشهر 3: Python + Bash', 'الشهر 4: مفاهيم أمن', 'الشهر 5-6: THM + OverTheWire', 'الشهر 7-9: تخصص', 'الشهر 10-12: HTB + شهادات', 'السنة 2: OSCP + وظيفة']);
    o += C(2, 'المسارات الوظيفية');
    o += L(['SOC Analyst — الأسهل دخولاً', 'Penetration Tester', 'Red Team Operator', 'Blue Team Analyst', 'Malware Analyst', 'Forensics Investigator', 'Cloud Security Engineer', 'AppSec Engineer', 'DevSecOps', 'Security Architect', 'CISO']);
    o += C(3, 'المهارات');
    o += L(['Networking (TCP/IP)', 'Linux + Windows', 'Python + Bash', 'Web fundamentals', 'Cryptography', 'Active Directory', 'Cloud', 'Reporting']);
    o += C(4, 'الشهادات');
    o += L(['مبتدئ: Security+, CEH, eJPT', 'متوسط: PNPT, GPEN, CRTP', 'متقدم: OSCP, OSWE', 'خبير: CISSP, CISM, CISA']);
    o += C(5, 'بناء Portfolio');
    o += N(['مدونة تقنية', 'GitHub بمشاريع', 'CTF Writeups', 'Bug Bounty Reports', 'LinkedIn احترافي']);
    o += C(6, 'مصادر مجانية');
    o += L(['TryHackMe', 'PortSwigger Academy', 'OWASP', 'YouTube: NetworkChuck, TCM, John Hammond', 'Cybrary']);
    o += F();
    return { filename: 'Cyber-Career-Guide.txt', content: o };
  }});

  /* 25. Certifications */
  BOOKS.push({ key: 'certifications', title: 'Certifications Guide', icon: '📜', desc: 'دليل الشهادات', color: 'purple', generate: function () {
    var o = H('CERTIFICATIONS GUIDE', 'دليل الشهادات');
    o += C(1, 'المبتدئ');
    o += L(['CompTIA Security+', 'CEH', 'eJPT', 'Google Cybersecurity', 'Cisco CyberOps']);
    o += C(2, 'المتوسط');
    o += L(['PNPT', 'GPEN', 'CRTP', 'CompTIA CySA+', 'CompTIA PenTest+']);
    o += C(3, 'المتقدم');
    o += L(['OSCP — الأشهر', 'OSWE', 'OSED', 'OSEP', 'CRTO']);
    o += C(4, 'الخبير');
    o += L(['CISSP', 'CISM', 'CISA', 'CCSP']);
    o += C(5, 'سحابية');
    o += L(['AWS Security Specialty', 'Azure AZ-500', 'Google Cloud Security', 'CCSP']);
    o += C(6, 'جنائية');
    o += L(['GCFA', 'CHFI', 'EnCE']);
    o += C(7, 'نصائح');
    o += N(['ابدأ بمستواك', 'ركّز على هدفك', 'لا تجمع بدون خبرة', 'المشاريع أهم', 'ابنِ مختبرك']);
    o += F();
    return { filename: 'Certifications-Guide.txt', content: o };
  }});

  /* 26. Pentest Methodology */
  BOOKS.push({ key: 'pentest-methodology', title: 'Pentest Methodology', icon: '⚔️', desc: 'منهجية اختبار الاختراق', color: 'red', generate: function () {
    var o = H('PENTEST METHODOLOGY', 'منهجية اختبار الاختراق');
    o += C(1, 'المراحل السبع');
    o += N(['Pre-engagement', 'Intelligence Gathering', 'Threat Modeling', 'Vulnerability Analysis', 'Exploitation', 'Post-Exploitation', 'Reporting']);
    o += C(2, 'Pre-engagement');
    o += L(['تحديد Scope', 'توقيع العقد', 'Rules of Engagement', 'جهات اتصال طارئة']);
    o += C(3, 'جمع المعلومات');
    o += L(['Passive: OSINT, Shodan, theHarvester', 'Active: Nmap, DNS, Port scan']);
    o += C(4, 'تحليل الثغرات');
    o += L(['Nessus / OpenVAS', 'يدوي', 'مراجعة كود', 'بحث CVE']);
    o += C(5, 'الاستغلال');
    o += L(['استغلال مؤكد فقط', 'وصول أولي', 'تجنب الاكتشاف', 'توثيق']);
    o += C(6, 'بعد الاختراق');
    o += L(['تصعيد الصلاحيات', 'التنقل الجانبي', 'جمع البيانات', 'Persistence', 'تغطية الآثار']);
    o += C(7, 'التقرير');
    o += L(['Executive Summary', 'Technical Findings', 'CVSS', 'الحلول', 'Appendix']);
    o += C(8, 'الأدوات حسب المرحلة');
    o += L(['Recon: Nmap, Masscan, Amass', 'Web: Burp, ZAP, sqlmap', 'Exploit: Metasploit', 'Post: Mimikatz, BloodHound', 'Wireless: Aircrack-ng']);
    o += F();
    return { filename: 'Pentest-Methodology.txt', content: o };
  }});

  /* 27. Glossary */
  BOOKS.push({ key: 'glossary-book', title: 'Security Glossary', icon: '📖', desc: 'قاموس المصطلحات', color: 'yellow', generate: function () {
    var o = H('SECURITY GLOSSARY', 'قاموس المصطلحات الأمنية');
    o += C(1, 'الأساسيات');
    var b1 = [['APT','تهديد متقدم مستمر'],['Payload','الحمولة'],['Exploit','كود استغلال'],['0-Day','ثغرة يوم الصفر'],['CVE','معرف ثغرة'],['CVSS','تقييم خطورة'],['PoC','إثبات المفهوم'],['Bug Bounty','مكافأة ثغرات']];
    b1.forEach(function(x){o += '  • ' + x[0] + ' — ' + x[1] + '\n';});
    o += C(2, 'البرمجيات الخبيثة');
    var b2 = [['Virus','ينسخ نفسه'],['Worm','ينتشر'],['Trojan','متنكر'],['Ransomware','فدية'],['Spyware','تجسس'],['Rootkit','يخفي'],['Keylogger','يسجل مفاتيح'],['C2','خادم تحكم']];
    b2.forEach(function(x){o += '  • ' + x[0] + ' — ' + x[1] + '\n';});
    o += C(3, 'الاختراق');
    var b3 = [['Reverse Shell','صدفة معكوسة'],['PrivEsc','تصعيد صلاحيات'],['Lateral Movement','تنقل جانبي'],['Persistence','ثبات'],['Fuzzing','اختبار عشوائي'],['Brute Force','قوة غاشمة']];
    b3.forEach(function(x){o += '  • ' + x[0] + ' — ' + x[1] + '\n';});
    o += C(4, 'التشفير');
    var b4 = [['Symmetric','مفتاح واحد'],['Asymmetric','مفتاحان'],['Hash','اتجاه واحد'],['AES','معيار حديث'],['RSA','خوارزمية'],['TLS','نقل آمن'],['PKI','بنية مفاتيح']];
    b4.forEach(function(x){o += '  • ' + x[0] + ' — ' + x[1] + '\n';});
    o += C(5, 'الشبكات');
    var b5 = [['TCP','موثوق'],['UDP','سريع'],['DNS','أسماء'],['DHCP','عناوين'],['VPN','افتراضية'],['MITM','رجل في المنتصف'],['DDoS','حجب موزع']];
    b5.forEach(function(x){o += '  • ' + x[0] + ' — ' + x[1] + '\n';});
    o += C(6, 'ثغرات الويب');
    var b6 = [['SQLi','حقن SQL'],['XSS','برمجة عبر مواقع'],['CSRF','تزوير طلبات'],['SSRF','تزوير من خادم'],['LFI','تضمين محلي'],['IDOR','مرجع مباشر'],['RCE','تنفيذ عن بعد']];
    b6.forEach(function(x){o += '  • ' + x[0] + ' — ' + x[1] + '\n';});
    o += C(7, 'الأدوات');
    var b7 = [['Kali','توزيعة اختراق'],['Termux','Linux للهاتف'],['Metasploit','إطار استغلال'],['Nmap','ماسح'],['Wireshark','محلل حزم'],['Burp','وسيط ويب'],['Hashcat','كسر هاش']];
    b7.forEach(function(x){o += '  • ' + x[0] + ' — ' + x[1] + '\n';});
    o += C(8, 'المعايير');
    var b8 = [['GDPR','قانون أوروبي'],['HIPAA','قانون أمريكي'],['PCI-DSS','بطاقات'],['ISO 27001','إدارة أمن'],['NIST','معايير'],['OWASP','تطبيقات']];
    b8.forEach(function(x){o += '  • ' + x[0] + ' — ' + x[1] + '\n';});
    o += F();
    return { filename: 'Glossary-Book.txt', content: o };
  }});

  /* 28. Companies */
  BOOKS.push({ key: 'companies-book', title: 'Companies Directory', icon: '🏢', desc: 'دليل الشركات', color: 'cyan', generate: function () {
    var o = H('COMPANIES DIRECTORY', 'شركات الأمن السيبراني');
    o += C(1, 'EDR/XDR/Endpoint');
    var c1 = [['CrowdStrike','EDR/XDR','USA'],['SentinelOne','EDR','USA'],['Cybereason','EDR','Israel'],['Carbon Black','EDR','USA'],['Sophos','Endpoint','UK'],['Kaspersky','AV','Russia'],['ESET','AV','Slovakia'],['Bitdefender','AV','Romania'],['Malwarebytes','Anti-Malware','USA']];
    c1.forEach(function(x){o += '  • ' + x[0] + ' — ' + x[1] + ' (' + x[2] + ')\n';});
    o += C(2, 'NGFW/Firewall');
    var c2 = [['Palo Alto','NGFW','USA'],['Fortinet','FortiGate','USA'],['Cisco','Networking','USA'],['Check Point','Firewall','Israel'],['Juniper','Networking','USA'],['SonicWall','Firewall','USA']];
    c2.forEach(function(x){o += '  • ' + x[0] + ' — ' + x[1] + ' (' + x[2] + ')\n';});
    o += C(3, 'SIEM/SOC');
    var c3 = [['Splunk','SIEM','USA'],['IBM QRadar','SIEM','USA'],['LogRhythm','SIEM','USA'],['Elastic','SIEM','Open'],['Exabeam','UEBA','USA'],['Microsoft Sentinel','SIEM','USA']];
    c3.forEach(function(x){o += '  • ' + x[0] + ' — ' + x[1] + ' (' + x[2] + ')\n';});
    o += C(4, 'Threat Intel');
    var c4 = [['Mandiant','IR','USA'],['Recorded Future','TI','USA'],['MISP','مفتوح','Open'],['OpenCTI','مفتوح','Open'],['AlienVault','TI','USA'],['VirusTotal','File Analysis','Google']];
    c4.forEach(function(x){o += '  • ' + x[0] + ' — ' + x[1] + ' (' + x[2] + ')\n';});
    o += C(5, 'Web App Security');
    var c5 = [['PortSwigger','Burp Suite','UK'],['OWASP','مفتوح','Open'],['Veracode','SAST/DAST','USA'],['Checkmarx','SAST','Israel'],['Snyk','DevSecOps','UK'],['SonarQube','SAST','Open']];
    c5.forEach(function(x){o += '  • ' + x[0] + ' — ' + x[1] + ' (' + x[2] + ')\n';});
    o += C(6, 'IAM');
    var c6 = [['Okta','Identity','USA'],['Ping Identity','IAM','USA'],['Auth0','Identity','USA'],['CyberArk','PAM','Israel'],['BeyondTrust','PAM','USA'],['1Password','Password','Canada'],['Bitwarden','Password','Open']];
    c6.forEach(function(x){o += '  • ' + x[0] + ' — ' + x[1] + ' (' + x[2] + ')\n';});
    o += C(7, 'VPN/Privacy');
    var c7 = [['Mullvad','VPN','Sweden'],['Proton','Privacy','Switzerland'],['IVPN','VPN','Gibraltar'],['ExpressVPN','VPN','BVI'],['NordVPN','VPN','Lithuania'],['Signal','Messaging','USA']];
    c7.forEach(function(x){o += '  • ' + x[0] + ' — ' + x[1] + ' (' + x[2] + ')\n';});
    o += C(8, 'Cloud Security');
    var c8 = [['Wiz','Cloud','Israel'],['Orca','Cloud','Israel'],['Lacework','Cloud','USA'],['Aqua','Container','Israel'],['Sysdig','Container','USA']];
    c8.forEach(function(x){o += '  • ' + x[0] + ' — ' + x[1] + ' (' + x[2] + ')\n';});
    o += C(9, 'التدريب');
    var c9 = [['OffSec','OSCP','USA'],['SANS','GIAC','USA'],['EC-Council','CEH','USA'],['ISC²','CISSP','USA'],['CompTIA','Security+','USA'],['HackTheBox','تدريب','UK'],['TryHackMe','تدريب','UK']];
    c9.forEach(function(x){o += '  • ' + x[0] + ' — ' + x[1] + ' (' + x[2] + ')\n';});
    o += C(10, 'Bug Bounty');
    var c10 = [['HackerOne','منصة','USA'],['Bugcrowd','منصة','USA'],['YesWeHack','منصة','France'],['Synack','منصة','USA'],['Intigriti','منصة','Belgium']];
    c10.forEach(function(x){o += '  • ' + x[0] + ' — ' + x[1] + ' (' + x[2] + ')\n';});
    o += F();
    return { filename: 'Companies-Directory.txt', content: o };
  }});

  /* 29. Bundle */
  BOOKS.push({ key: 'complete-bundle', title: 'Complete Bundle', icon: '📦', desc: 'فهرس شامل', color: 'green', generate: function () {
    var o = H('SECRET BOX BUNDLE', 'فهرس كامل');
    o += C(1, 'مقدمة');
    o += P('فهرس لكل شيء في Secret Box — كل كتاب لاحتياج معين.');
    o += C(2, 'الكتب المتاحة');
    var books = ['Termux Master — Linux على أندرويد', 'Linux Master — Linux الشامل', 'Kali Master — أدوات Kali', 'Python for Hacking', 'Git Commands', 'Docker Master', 'Android & ADB', 'Network Master', 'SQL Commands', 'Ethical Hacking Guide', 'Web Security', 'Cryptography', 'OSINT Guide', 'Wireless Security', 'Digital Forensics', 'Reverse Engineering', 'Cloud Security', 'IoT Security', 'Blockchain Security', 'SCADA Security', 'Threat Intelligence', 'Malware Analysis', 'SOC Analyst Guide', 'Cyber Career Guide', 'Certifications Guide', 'Pentest Methodology', 'Security Glossary', 'Companies Directory'];
    o += books.map(function(b,i){return '  ' + (i+1) + ') ' + b + '\n';}).join('');
    o += C(3, 'كيف تستخدم؟');
    o += P('للمبتدئ: Ethical Hacking + Linux + Termux');
    o += P('للويب: Web Security + SQL + Python');
    o += P('للشبكات: Network + Wireless + Kali');
    o += P('للجنائي: Forensics + Malware + Reverse');
    o += P('للسحابة: Cloud + Docker + Linux');
    o += C(4, 'خاتمة');
    o += P('اختر مساراً واحداً وأتقنه قبل الانتقال لغيره.');
    o += F();
    return { filename: 'SecretBox-Complete-Bundle.txt', content: o };
  }});

  /* 30. Quick Reference */
  BOOKS.push({ key: 'quick-reference', title: 'Quick Reference', icon: '⚡', desc: 'مرجع سريع', color: 'yellow', generate: function () {
    var o = H('QUICK REFERENCE', 'مرجع سريع للأوامر');
    o += C(1, 'Linux');
    o += CODE('pwd, ls -la, cd, mkdir, touch, cp, mv, rm\nfind, grep, cat, less, head, tail\nchmod 755, chown user:group, sudo su -\nps aux, top, kill -9 PID\nip a, ping, netstat, curl -I');
    o += C(2, 'Termux');
    o += CODE('pkg update && pkg upgrade -y\ntermux-setup-storage\npkg install git python nmap hydra -y\npip install sqlmap requests');
    o += C(3, 'Kali');
    o += CODE('nmap -sV target\nmsfconsole\nsqlmap -u URL --dbs\nhydra -l u -P list ssh://target\nairmon-ng start wlan0');
    o += C(4, 'Windows');
    o += CODE('dir, cd, md, rd, del, copy, move\ntasklist, taskkill /F /PID\ntasklist, ipconfig /all, netstat -an\nnet user, net localgroup\nwmic, reg, sfc /scannow');
    o += C(5, 'Python');
    o += CODE('import requests, socket, scapy, paramiko\nrequests.get(URL)\nsocket.socket()\nparamiko.SSHClient()');
    o += C(6, 'Git');
    o += CODE('git init, clone, status, add, commit, push\ngit branch, checkout, merge\ngit log --oneline, git diff');
    o += C(7, 'Docker');
    o += CODE('docker ps, images, run, exec, logs\ndocker compose up -d\ndocker system prune -a');
    o += C(8, 'شهادات ومنصات');
    o += L(['TryHackMe, HackTheBox', 'Security+, CEH, OSCP', 'PortSwigger, picoCTF, OverTheWire']);
    o += F();
    return { filename: 'Quick-Reference.txt', content: o };
  }});

  /* ========== PUBLIC API ========== */
  function getAll() {
    return BOOKS.map(function(b){
      return { key: b.key, title: b.title, icon: b.icon, desc: b.desc, color: b.color || 'green' };
    });
  }
  function generate(key) {
    for (var i = 0; i < BOOKS.length; i++) {
      if (BOOKS[i].key === key) {
        try { return BOOKS[i].generate(); }
        catch (e) { return { filename: key + '.txt', content: 'خطأ: ' + e.message + '\n' }; }
      }
    }
    return null;
  }

  window.SB_BOOKS = {
    books: BOOKS,
    getAll: getAll,
    generate: generate,
    count: BOOKS.length
  };

  console.log('%c📚 SECRET BOX — ' + BOOKS.length + ' Books Loaded v4',
    'background:linear-gradient(90deg,#a855f7,#ff2d95);color:#fff;font-size:13px;font-weight:bold;padding:5px 10px;border-radius:5px');

})();
