/* =====================================================================
   IS2 THE PITCH · ตัวแสดงหน้า Portfolio รายทีม
   ---------------------------------------------------------------------
   หน้า teams/gN.html กำหนด window.PF_ID = "G1" แล้วโหลด ../data/teams.js และไฟล์นี้
   ข้อมูลหน้า Portfolio อยู่ใน data/teams.js ที่ช่อง pf ของแต่ละทีม (เพิ่มหลังครูอนุมัติในเว็บแอปเท่านั้น)
     pf: { tag, prob, how, proof, voice, next, clip, ai, updated,
           photos: [{ src: "img/g1-1.jpg", cap: "คำบรรยาย" }],
           team: [{ name: "ชื่อ สกุล", role: "Project Lead" }],
           share: { topic, kind, words, clip, try, ref, ai } }   ← คลิปถ่ายทอดความรู้สู่รุ่นน้อง (MC12 สัปดาห์ที่ 17 · เพิ่มหลังครูอนุมัติ ไม่มีก็ได้)
   ห้ามใส่รหัสนักเรียน เลขที่ เบอร์โทร หรืออีเมล
   หน้าตัวอย่าง (ข้อมูลสมมติ) กำหนด window.PF_SAMPLE = { id, name, path, pf } แทน
   ===================================================================== */
(function () {
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const img = u => { u = String(u || '').trim(); return /^(img\/)?[A-Za-z0-9_\-]+\.(jpg|jpeg|png|webp)$/.test(u) ? u : ''; };
  /** ลิงก์คลิป YouTube / Google Drive → ลิงก์ฝังวิดีโอ */
  function embed(u) {
    u = String(u || '').trim();
    let m = u.match(/^https:\/\/(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|shorts\/)([\w\-]{6,})/) || u.match(/^https:\/\/youtu\.be\/([\w\-]{6,})/);
    if (m) return 'https://www.youtube-nocookie.com/embed/' + m[1] + '?rel=0';
    m = u.match(/^https:\/\/drive\.google\.com\/(?:file\/d\/|open\?id=)([\w\-]{6,})/);
    if (m) return 'https://drive.google.com/file/d/' + m[1] + '/preview';
    return '';
  }
  const T = window.PF_SAMPLE || (window.IS2_TEAMS || []).find(t => t.id === window.PF_ID) || { id: window.PF_ID || '', name: '' };
  const pf = T.pf;
  document.title = (T.id ? T.id + ' ' : '') + (T.name || 'Portfolio') + ' · IS2 THE PITCH';
  const root = document.getElementById('pf');
  const crest = window.PF_SAMPLE ? '../assets/crest.png' : '../assets/crest.png';
  const head = '<div class="tb"><div class="tb-main"><img src="' + crest + '" alt="ตราโรงเรียนพรตพิทยพยัต"><div>' +
    '<div class="tag">IS2 THE PITCH · PROJECT PORTFOLIO · ' + esc(T.id) + (window.PF_SAMPLE ? ' · ตัวอย่างข้อมูลสมมติ' : '') + '</div>' +
    '<h1>' + esc(T.name) + '</h1>' + (pf && pf.tag ? '<p class="tl">' + esc(pf.tag) + '</p>' : '') + '</div></div>' +
    '<div class="tb-grid"><div><b>SCHOOL</b><span>โรงเรียนพรตพิทยพยัต</span></div><div><b>CLASS</b><span>ม.5/4 · IS2 ภาคเรียนที่ 2/2569</span></div>' +
    (T.path ? '<div><b>PATH</b><span>' + esc(T.path) + '</span></div>' : '') + (pf && pf.updated ? '<div><b>UPDATED</b><span>' + esc(pf.updated) + '</span></div>' : '') + '</div></div>';
  if (!pf) {
    root.innerHTML = head + '<div class="empty">หน้า Portfolio ของทีมนี้กำลังจัดทำ · จะเผยแพร่หลังครูตรวจและอนุมัติ</div>';
    return;
  }
  const cell = (k, t, cls) => pf[k] ? '<div class="cell ' + (cls || '') + '"><h3>' + t + '</h3><p>' + esc(pf[k]) + '</p></div>' : '';
  const photos = (pf.photos || []).map((p, i) => {
    const u = img(p.src);
    return '<figure>' + (u ? '<img src="' + esc(u) + '" alt="' + esc(p.cap) + '" loading="lazy">' : '<div class="ph">FIG.' + (i + 1) + '</div>') +
      '<figcaption><b>FIG.' + (i + 1) + '</b>' + esc(p.cap) + '</figcaption></figure>';
  }).join('');
  const ev = embed(pf.clip);
  const sh = pf.share && pf.share.topic ? pf.share : null;
  const sv = sh ? embed(sh.clip) : '';
  const shc = (k, t, cls) => sh && sh[k] ? '<div class="cell ' + (cls || '') + '"><h3>' + t + '</h3><p>' + esc(sh[k]) + '</p></div>' : '';
  const share = sh ? '<section><div class="sh"><span class="no">05</span><h2>คลิปถ่ายทอดความรู้สู่รุ่นน้อง</h2><span class="dim"></span></div>' +
    '<div class="cells">' + '<div class="cell wide"><h3>' + esc(sh.kind || 'KNOWLEDGE') + '</h3><p>' + esc(sh.topic) + '</p></div>' +
    shc('words', 'KEY WORDS · ศัพท์น่ารู้') + shc('try', 'TRY IT · ลองทำเอง') + '</div>' +
    '<div class="video" style="margin-top:14px">' + (sv ? '<iframe src="' + esc(sv) + '" title="คลิปถ่ายทอดความรู้ ' + esc(T.name) + '" loading="lazy" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>'
      : '<div class="ph">คลิปกำลังจัดทำ</div>') + '</div>' +
    (sh.ref || sh.ai ? '<p class="note">' + (sh.ref ? 'แหล่งอ้างอิงและเครดิต: ' + esc(sh.ref) : '') + (sh.ref && sh.ai ? ' · ' : '') + (sh.ai ? 'การใช้ AI: ' + esc(sh.ai) : '') + '</p>' : '') +
    '</section>' : '';
  const team = (pf.team || []).map(m => '<div><b>' + esc(m.role || 'MEMBER') + '</b>' + esc(m.name) + '</div>').join('');
  const notes = (T.notes || []).slice(0, 3).map(n => '<div class="nt"><b>W' + String(n.week || 0).padStart(2, '0') + '</b> ' +
    (n.strength ? 'จุดเด่น: ' + esc(n.strength) + ' ' : '') + (n.next ? '· ก้าวต่อไป: ' + esc(n.next) : '') + '</div>').join('');
  root.innerHTML = head +
    '<section><div class="sh"><span class="no">01</span><h2>โครงงานนี้คืออะไร</h2><span class="dim"></span></div><div class="cells">' +
      cell('prob', 'PROBLEM · ปัญหา') + cell('how', 'HOW IT WORKS · ทำงานอย่างไร', 'wide') + '</div></section>' +
    '<section><div class="sh"><span class="no">02</span><h2>หลักฐาน</h2><span class="dim"></span></div><div class="cells">' +
      cell('proof', 'TEST RESULT · ผลทดสอบ', 'proof wide') + cell('voice', 'USER VOICE · เสียงจากผู้ใช้') + '</div></section>' +
    (photos ? '<section><div class="sh"><span class="no">03</span><h2>ภาพชิ้นงาน</h2><span class="dim"></span></div><div class="pics">' + photos + '</div></section>' : '') +
    '<section><div class="sh"><span class="no">04</span><h2>คลิป 60 วินาที</h2><span class="dim"></span></div><div class="video">' +
      (ev ? '<iframe src="' + esc(ev) + '" title="คลิป 60 วินาที ' + esc(T.name) + '" loading="lazy" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>'
        : '<div class="ph">' + (window.PF_SAMPLE ? 'ตำแหน่งคลิป 60 วินาที (YouTube หรือ Google Drive)' : 'คลิปกำลังจัดทำ') + '</div>') + '</div></section>' +
    share +
    '<section><div class="sh"><span class="no">' + (sh ? '06' : '05') + '</span><h2>ทีมผู้จัดทำและก้าวต่อไป</h2><span class="dim"></span></div>' +
      (team ? '<div class="team">' + team + '</div>' : '') +
      (pf.next ? '<div class="cells" style="margin-top:14px">' + cell('next', 'NEXT STEP · ก้าวต่อไป', 'wide') + '</div>' : '') +
      (notes ? '<div style="margin-top:14px"><div class="tag">MENTOR NOTES</div>' + notes + '</div>' : '') +
      '<p class="note">' + (pf.ai ? 'การใช้ AI: ' + esc(pf.ai) + ' · ' : '') + 'รายวิชา IS2 การสื่อสารและการนำเสนอ (I30202) · ครูผู้สอน ครูนพพล ภาณุสุวัฒน์ · ข้อมูลจากรายงานโครงงานของทีม</p></section>';
})();
