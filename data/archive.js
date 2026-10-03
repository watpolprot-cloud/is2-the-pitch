/* =====================================================================
   IS2 THE PITCH · คลังสื่อและใบงานรายสัปดาห์ (เพิ่มต่อท้ายเท่านั้น)
   ---------------------------------------------------------------------
   ทุกเธรดที่สร้างใบงาน สื่อ หรือผลสรุประดับห้อง ให้เพิ่มรายการที่นี่
   - หาบล็อกของสัปดาห์นั้น { week: N, ... } ถ้ายังไม่มีให้คัดลอกบล็อกล่าสุดไปวางต่อท้าย
   - type ใช้ได้: "ใบงาน" "สไลด์" "สื่อ" "เกม" "เว็บแอป" "สรุปผล" "ประกาศ"
   - link: ไฟล์ภายใน (docs/... .pdf หรือ slides/... .html หรือ media/... .html) หรือ https://...
   - ห้ามใส่คู่มือครู เฉลย ข้อสอบที่ใช้ซ้ำ คะแนนรายคน หรือรหัสนักเรียน
   ===================================================================== */

window.IS2_ARCHIVE = [

  {
    week: 1,
    title: "ปฐมนิเทศ “IS2 THE PITCH”",
    items: [
      { type: "สไลด์",  text: "สไลด์ปฐมนิเทศ IS2 THE PITCH",               link: "slides/w01-orientation.html" },
      { type: "ใบงาน",  text: "ใบงาน W01 Player Card (รายบุคคล)",          link: "docs/w01-player-card.pdf" },
      { type: "ใบงาน",  text: "แบบสำรวจ Asset Check (กลุ่ม)",              link: "docs/w01-asset-check.pdf" },
      { type: "สื่อ",   text: "บัตรบทบาท 5 ตำแหน่ง",                       link: "docs/w01-roles.pdf" },
      { type: "สื่อ",   text: "กติกาความปลอดภัย 5 ข้อ",                     link: "docs/w01-safety-rules.pdf" },
    ],
  },

  {
    week: 2,
    title: "MC1 Project Health Check",
    items: [
      { type: "สไลด์",  text: "สไลด์ MC1 Project Health Check",             link: "slides/w02-health-check.html" },
      { type: "ใบงาน",  text: "ใบงาน W02 Project Health Check (รายบุคคล)",   link: "docs/w02-health-check.pdf" },
      { type: "ใบงาน",  text: "แผนที่ช่องว่าง Gap Map (กลุ่ม)",              link: "docs/w02-gap-map.pdf" },
      { type: "สื่อ",   text: "แผ่นสรุปโครงสร้างรายงานโครงงาน 5 บท",         link: "docs/w02-report-structure.pdf" },
    ],
  },

];
