/* ============================================================
   SECRET BOX — COMPANIES DATABASE
   Developed by: Ahmed Ali (Black Lord / السيد الأسود)
   Version: 15.0 — 200 Companies
   ============================================================
   أعطيك معلومات مجاناً — لا تبخل عليّ وانشر الموقع ليستفيد غيرك
   ============================================================ */

(function () {
  'use strict';

  /* ============================================================
     COMPANIES — [name, field, country]
     ============================================================ */
  const COMPANIES = [
    /* === EDR / XDR / Endpoint === */
    ["CrowdStrike", "EDR / XDR", "USA"],
    ["SentinelOne", "EDR", "USA"],
    ["Cybereason", "EDR", "Israel"],
    ["Carbon Black", "EDR", "USA"],
    ["VMware Carbon Black", "EDR", "USA"],
    ["Sophos", "Endpoint", "UK"],
    ["Trend Micro", "Endpoint", "Japan"],
    ["McAfee", "Endpoint", "USA"],
    ["Symantec", "Endpoint", "USA"],
    ["Kaspersky", "Antivirus", "Russia"],
    ["ESET", "Antivirus", "Slovakia"],
    ["Avast", "Antivirus", "Czech"],
    ["AVG", "Antivirus", "Czech"],
    ["Bitdefender", "Antivirus", "Romania"],
    ["Norton", "Antivirus", "USA"],
    ["Malwarebytes", "Anti-Malware", "USA"],
    ["Webroot", "Endpoint", "USA"],
    ["Comodo", "Endpoint", "USA"],
    ["F-Secure", "Endpoint", "Finland"],
    ["WithSecure", "Cybersecurity", "Finland"],
    ["Trellix", "XDR", "USA"],
    ["BlackBerry Cylance", "AI Endpoint", "Canada"],

    /* === NGFW / Network Security === */
    ["Palo Alto Networks", "NGFW / Cloud", "USA"],
    ["Fortinet", "FortiGate", "USA"],
    ["Cisco", "Networking", "USA"],
    ["Check Point", "Firewall", "Israel"],
    ["Juniper Networks", "Networking", "USA"],
    ["SonicWall", "Firewall", "USA"],
    ["WatchGuard", "Firewall", "USA"],
    ["Barracuda Networks", "Email / WAF", "USA"],
    ["A10 Networks", "DDoS", "USA"],
    ["Radware", "DDoS", "Israel"],
    ["Netscout", "DDoS", "USA"],
    ["F5 Networks", "App Delivery", "USA"],
    ["Akamai", "CDN / WAF", "USA"],
    ["Cloudflare", "CDN / WAF", "USA"],
    ["Fastly", "CDN", "USA"],
    ["Imperva", "WAF", "USA"],
    ["Wallarm", "API Security", "USA"],
    ["Signal Sciences", "WAF", "USA"],

    /* === SIEM / SOC / Analytics === */
    ["Splunk", "SIEM", "USA"],
    ["IBM QRadar", "SIEM", "USA"],
    ["LogRhythm", "SIEM", "USA"],
    ["Elastic", "SIEM", "Open"],
    ["Sumo Logic", "SIEM", "USA"],
    ["Exabeam", "UEBA / SIEM", "USA"],
    ["Securonix", "SIEM", "USA"],
    ["Rapid7", "Vuln Mgmt / SIEM", "USA"],
    ["Devo", "SIEM", "USA"],
    ["Hunters", "SIEM", "Israel"],
    ["Panther Labs", "SIEM", "USA"],
    ["Datadog Security", "Cloud SIEM", "USA"],

    /* === Threat Intel === */
    ["FireEye", "Threat Intel", "USA"],
    ["Mandiant", "IR / Threat Intel", "USA"],
    ["Recorded Future", "Threat Intel", "USA"],
    ["Anomali", "Threat Intel", "USA"],
    ["ThreatConnect", "Threat Intel", "USA"],
    ["MISP", "Threat Sharing", "Open"],
    ["OpenCTI", "Threat Intel", "Open"],
    ["AlienVault / AT&T", "Threat Intel", "USA"],
    ["VirusTotal", "File Analysis", "Google"],
    ["Shodan", "Search Engine", "USA"],
    ["Censys", "Search Engine", "USA"],
    ["GreyNoise", "Threat Intel", "USA"],
    ["Intel471", "Threat Intel", "USA"],
    ["Flashpoint", "Threat Intel", "USA"],
    ["KELA", "Threat Intel", "Israel"],

    /* === Vulnerability Management === */
    ["Tenable", "Vuln Mgmt", "USA"],
    ["Qualys", "Cloud Security", "USA"],
    ["Rapid7 InsightVM", "Vuln Mgmt", "USA"],
    ["OpenVAS", "Vuln Scanner", "Open"],
    ["Nessus", "Vuln Scanner", "USA"],
    ["Acunetix", "Web Scanner", "Malta"],
    ["Invicti (Netsparker)", "Web Scanner", "USA"],
    ["HCL AppScan", "Web Scanner", "India"],
    ["Detectify", "Web Scanning", "Sweden"],
    ["Intruder", "Vuln Scanning", "UK"],

    /* === Web Application Security === */
    ["PortSwigger", "Web Security", "UK"],
    ["OWASP", "Web Security", "Open"],
    ["Caido", "Web Security", "Canada"],
    ["Veracode", "SAST / DAST", "USA"],
    ["Checkmarx", "SAST", "Israel"],
    ["Snyk", "DevSecOps", "UK"],
    ["SonarQube", "SAST", "Open"],
    ["Mend", "SCA", "Israel"],
    ["Black Duck", "SCA", "USA"],
    ["ShiftLeft", "Code Analysis", "USA"],
    ["Semgrep", "SAST", "USA"],
    ["StackHawk", "DAST", "USA"],
    ["Bright Security", "DAST", "Israel"],
    ["Escape", "API Security", "France"],
    ["Salt Security", "API Security", "Israel"],
    ["Noname Security", "API Security", "USA"],
    ["42Crunch", "API Security", "USA"],

    /* === Identity & Access === */
    ["Okta", "Identity", "USA"],
    ["Ping Identity", "IAM", "USA"],
    ["Auth0", "Identity", "USA"],
    ["JumpCloud", "Directory", "USA"],
    ["CyberArk", "PAM", "Israel"],
    ["BeyondTrust", "PAM", "USA"],
    ["Delinea", "PAM", "USA"],
    ["HashiCorp", "Secrets Mgmt", "USA"],
    ["1Password", "Password Manager", "Canada"],
    ["Bitwarden", "Password Manager", "Open"],
    ["Dashlane", "Password Manager", "USA"],
    ["LastPass", "Password Manager", "USA"],
    ["Keeper", "Password Manager", "USA"],
    ["NordPass", "Password Manager", "Lithuania"],
    ["Proton Pass", "Password Manager", "Switzerland"],

    /* === Privacy & VPN === */
    ["Mullvad", "VPN", "Sweden"],
    ["Proton", "Privacy Suite", "Switzerland"],
    ["IVPN", "VPN", "Gibraltar"],
    ["ExpressVPN", "VPN", "BVI"],
    ["NordVPN", "VPN", "Lithuania"],
    ["Surfshark", "VPN", "Netherlands"],
    ["Tor Project", "Anonymity", "Open"],
    ["Signal Foundation", "Encrypted Messaging", "USA"],
    ["Wire", "Encrypted Messaging", "Switzerland"],
    ["Element (Matrix)", "Encrypted Messaging", "Open"],
    ["Tutanota", "Encrypted Email", "Germany"],
    ["Mailfence", "Encrypted Email", "Belgium"],
    ["StartMail", "Encrypted Email", "Netherlands"],

    /* === Cloud Security === */
    ["Wiz", "Cloud Security", "Israel"],
    ["Orca Security", "Cloud Security", "Israel"],
    ["Lacework", "Cloud Security", "USA"],
    ["Aqua Security", "Container Security", "Israel"],
    ["Sysdig", "Container Security", "USA"],
    ["Twistlock (Palo Alto)", "Container Security", "USA"],
    ["StackRox (Red Hat)", "Container Security", "USA"],
    ["Snyk Cloud", "Cloud Native", "UK"],
    ["ScoutSuite", "AWS Audit", "Open"],
    ["Prowler", "AWS Audit", "Open"],
    ["Cloudsplaining", "AWS IAM", "Open"],
    ["Pacu", "AWS Exploitation", "Open"],
    ["trufflehog", "Secrets Detection", "Open"],
    ["gitleaks", "Secrets Detection", "Open"],

    /* === Email Security === */
    ["Proofpoint", "Email Security", "USA"],
    ["Mimecast", "Email Security", "UK"],
    ["Abnormal Security", "Email Security", "USA"],
    ["Ironscales", "Email Security", "Israel"],
    ["Avanan (Check Point)", "Email Security", "USA"],
    ["GreatHorn", "Email Security", "USA"],
    ["Agari (HelpSystems)", "Email Security", "USA"],
    ["Valimail", "Email Authentication", "USA"],
    ["DMARC Analyzer", "Email Security", "UK"],

    /* === DDoS & CDN === */
    ["Neustar", "DDoS", "USA"],
    ["Verisign", "DDoS / DNS", "USA"],
    ["Incapsula (Imperva)", "DDoS", "USA"],
    ["Corero", "DDoS", "USA"],
    ["Link11", "DDoS", "Germany"],

    /* === Training & Certifications === */
    ["Offensive Security (OffSec)", "Training", "USA"],
    ["SANS Institute", "Training", "USA"],
    ["EC-Council", "Training", "USA"],
    ["ISC²", "Certifications", "USA"],
    ["ISACA", "Certifications", "USA"],
    ["CompTIA", "Certifications", "USA"],
    ["Hack The Box", "Training", "UK"],
    ["TryHackMe", "Training", "UK"],
    ["PentesterLab", "Training", "Australia"],
    ["INE / eLearnSecurity", "Training", "USA"],
    ["Pluralsight", "Training", "USA"],
    ["Udemy", "Training", "USA"],
    ["Coursera", "Training", "USA"],
    ["edX", "Training", "USA"],
    ["Cybrary", "Training", "USA"],
    ["Zero-Point Security", "Training", "UK"],
    ["Altered Security", "Training", "India"],
    ["TCM Security", "Training", "USA"],

    /* === Bug Bounty Platforms === */
    ["HackerOne", "Bug Bounty", "USA"],
    ["Bugcrowd", "Bug Bounty", "USA"],
    ["YesWeHack", "Bug Bounty", "France"],
    ["Synack", "Bug Bounty", "USA"],
    ["Intigriti", "Bug Bounty", "Belgium"],
    ["Open Bug Bounty", "Bug Bounty", "Open"],
    ["Yogosha", "Bug Bounty", "France"],
    ["Zerodium", "Vulnerability Acquisition", "USA"],

    /* === Pentest Firms === */
    ["Bishop Fox", "Pentest", "USA"],
    ["NCC Group", "Pentest", "UK"],
    ["Trustwave", "Pentest", "USA"],
    ["TrustedSec", "Pentest", "USA"],
    ["Black Hills Info Security", "Pentest", "USA"],
    ["Trail of Bits", "Security Research", "USA"],
    ["IOActive", "Security", "USA"],
    ["Riscure", "Hardware Security", "Netherlands"],
    ["Quarkslab", "Security", "France"],
    ["Cure53", "Web Audit", "Germany"],
    ["Doyensec", "Web Audit", "USA"],
    ["Include Security", "Web Audit", "USA"],
    ["Kudelski Security", "Security", "Switzerland"],

    /* === Research Labs === */
    ["Google Project Zero", "Research", "USA"],
    ["Microsoft MSRC", "Research", "USA"],
    ["Apple Security", "Research", "USA"],
    ["Mozilla Security", "Research", "USA"],
    ["Cisco Talos", "Research", "USA"],
    ["Fortinet FortiGuard", "Research", "USA"],
    ["Kaspersky GReAT", "Research", "Russia"],
    ["ESET Research", "Research", "Slovakia"],
    ["Avast Threat Labs", "Research", "Czech"],
    ["SophosLabs", "Research", "UK"],
    ["Trend Micro Research", "Research", "Japan"],
    ["McAfee Labs", "Research", "USA"],
    ["Symantec Threat Intel", "Research", "USA"],
    ["Bitdefender Labs", "Research", "Romania"],
    ["Check Point Research", "Research", "Israel"],
    ["Palo Alto Unit 42", "Research", "USA"],
    ["CrowdStrike Intel", "Research", "USA"],
    ["Mandiant FLARE", "Research", "USA"],

    /* === Incident Response === */
    ["Volexity", "IR", "USA"],
    ["Kroll", "IR", "USA"],
    ["Arete", "IR", "USA"],
    ["Charles River Associates", "IR", "USA"],
    ["Stroz Friedberg", "IR", "USA"],
    ["Control Risks", "IR", "UK"],
    ["Coveware", "Ransomware IR", "USA"],

    /* === Consulting === */
    ["Deloitte Cyber", "Consulting", "Global"],
    ["EY Cyber", "Consulting", "Global"],
    ["KPMG Cyber", "Consulting", "Global"],
    ["PwC Cyber", "Consulting", "Global"],
    ["Accenture Security", "Consulting", "Global"],
    ["Booz Allen", "Consulting", "USA"],
    ["Capgemini Cyber", "Consulting", "France"],
    ["Atos", "Consulting", "France"],

    /* === Defense & Government === */
    ["Leidos", "Defense", "USA"],
    ["Northrop Grumman", "Defense", "USA"],
    ["Lockheed Martin", "Defense", "USA"],
    ["Raytheon", "Defense", "USA"],
    ["BAE Systems", "Defense", "UK"],
    ["Thales", "Defense", "France"],
    ["Leonardo", "Defense", "Italy"],
    ["Elbit Systems", "Defense", "Israel"],
    ["Rafael", "Defense", "Israel"],
    ["IAI", "Defense", "Israel"],
    ["L3Harris", "Defense", "USA"],
    ["General Dynamics", "Defense", "USA"],
    ["Boeing", "Aerospace", "USA"],
    ["Airbus Cyber", "Aerospace", "France"],

    /* === AI Security === */
    ["Darktrace", "AI Security", "UK"],
    ["Vectra AI", "NDR", "USA"],
    ["ExtraHop", "NDR", "USA"],
    ["Corelight", "NDR", "USA"],
    ["Gigamon", "NDR", "USA"],
    ["Awake Security", "NDR", "USA"],
    ["MixMode", "AI Security", "USA"],
    ["Abnormal AI", "AI Email", "USA"],

    /* === MDR === */
    ["Arctic Wolf", "MDR", "USA"],
    ["Expel", "MDR", "USA"],
    ["Red Canary", "MDR", "USA"],
    ["Huntress", "MDR", "USA"],
    ["Deepwatch", "MDR", "USA"],
    ["Rapid7 MDR", "MDR", "USA"],

    /* === DevSecOps === */
    ["GitHub Advanced Security", "DevSecOps", "USA"],
    ["GitLab Security", "DevSecOps", "USA"],
    ["Aqua", "Container", "Israel"],
    ["Anchore", "Container", "USA"],
    ["Chainguard", "Container", "USA"],
    ["ChaosSearch", "Log Analytics", "USA"],

    /* === IoT / OT === */
    ["Claroty", "OT Security", "Israel"],
    ["Nozomi Networks", "OT Security", "Switzerland"],
    ["Dragos", "OT Security", "USA"],
    ["Armis", "IoT Security", "USA"],
    ["Axonius", "Asset Management", "Israel"],
    ["Cisco IoT", "IoT", "USA"],
    ["Microsoft Defender for IoT", "IoT", "USA"]
  ];

  /* ============================================================
     FILTERS
     ============================================================ */
  const FIELDS = [
    'All', 'EDR', 'XDR', 'Firewall', 'NGFW', 'SIEM', 'Threat Intel',
    'Vuln Mgmt', 'IAM', 'PAM', 'Cloud', 'DevSecOps', 'Training',
    'Bug Bounty', 'Pentest', 'IR', 'Defense', 'OT Security', 'IoT'
  ];

  /* ============================================================
     RENDER FUNCTION
     ============================================================ */
  function renderGrid(filter) {
    let list = COMPANIES;
    if (filter && filter !== 'All') {
      list = COMPANIES.filter(([n, f, c]) =>
        f.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return list.map(([name, field, country]) => {
      const initials = name.substring(0, 2).toUpperCase();
      return '<div class="company">' +
        '<div class="company-logo">' + initials + '</div>' +
        '<div class="company-info">' +
          '<strong>' + name + '</strong>' +
          '<span>' + field + ' • ' + country + '</span>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  /* ============================================================
     EXPORT TO WINDOW
     ============================================================ */
  window.SB_COMPANIES = COMPANIES;
  window.SB_COMPANIES_API = {
    list: COMPANIES,
    fields: FIELDS,
    count: COMPANIES.length,
    render: renderGrid,
    filter: function (field) {
      if (!field || field === 'All') return COMPANIES;
      return COMPANIES.filter(([n, f]) =>
        f.toLowerCase().includes(field.toLowerCase())
      );
    },
    search: function (query) {
      const q = (query || '').toLowerCase();
      return COMPANIES.filter(([n, f, c]) =>
        n.toLowerCase().includes(q) ||
        f.toLowerCase().includes(q) ||
        c.toLowerCase().includes(q)
      );
    }
  };

  console.log(
    '%c🏢 SECRET BOX — ' + COMPANIES.length + ' Companies Loaded',
    'background:linear-gradient(90deg,#00d9ff,#0091b3);color:#00151c;font-size:13px;font-weight:bold;padding:5px 10px;border-radius:5px'
  );

})();
