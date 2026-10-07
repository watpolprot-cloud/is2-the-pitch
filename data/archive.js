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

  {
    week: 3,
    title: "MC2 Restore – Upgrade – Pivot",
    items: [
      { type: "สไลด์",  text: "สไลด์ MC2 Restore – Upgrade – Pivot",        link: "slides/w03-restore-upgrade-pivot.html" },
      { type: "ใบงาน",  text: "ใบงาน W03 Restore – Upgrade – Pivot (รายบุคคล)", link: "docs/w03-path-worksheet.pdf" },
      { type: "ใบงาน",  text: "เค้าโครงโครงงาน v2 (กลุ่ม)",                 link: "docs/w03-outline-v2.pdf" },
      { type: "ใบงาน",  text: "รายการวัสดุ (BOM) และแผนการสร้าง (กลุ่ม)",    link: "docs/w03-bom-build-plan.pdf" },
      { type: "สื่อ",   text: "การ์ด 3 เส้นทาง Restore – Upgrade – Pivot",   link: "docs/w03-path-cards.pdf" },
    ],
  },

  {
    week: 4,
    title: "MC3 Source Detective",
    items: [
      { type: "สไลด์",  text: "สไลด์ MC3 Source Detective",                 link: "slides/w04-source-detective.html" },
      { type: "ใบงาน",  text: "ใบงาน W04 Source Detective (รายบุคคล)",       link: "docs/w04-source-detective.pdf" },
      { type: "ใบงาน",  text: "Source Log และแผนบทที่ 2 (กลุ่ม)",            link: "docs/w04-source-log-chapter2.pdf" },
      { type: "สื่อ",   text: "การ์ดนักสืบ 5 เบาะแส และสูตรอ้างอิง APA",     link: "docs/w04-detective-apa-card.pdf" },
      { type: "เว็บแอป", text: "เว็บแอปในคาบ: เกมนักสืบ และ Source Log ของกลุ่ม", link: "https://script.google.com/macros/s/AKfycby9Emg9HGEli_fzRICZ2437bpW13ij-Iep_-lOuiUInV76zyv9K1-DhwPVNrQ4e00OE/exec" },
    ],
  },

  {
    week: 5,
    title: "MC4 PROVE IT!",
    items: [
      { type: "สไลด์",  text: "สไลด์ MC4 PROVE IT!",                       link: "slides/w05-prove-it.html" },
      { type: "ใบงาน",  text: "ใบงาน W05 PROVE IT! Test Plan Card (รายบุคคล)", link: "docs/w05-prove-it.pdf" },
      { type: "ใบงาน",  text: "การ์ด C-M-T-S ของกลุ่ม และแผนบทที่ 3 (กลุ่ม)", link: "docs/w05-cmts-chapter3.pdf" },
      { type: "สื่อ",   text: "การ์ด C-M-T-S และตัวตรวจ 8 ข้อ",              link: "docs/w05-cmts-card.pdf" },
      { type: "เว็บแอป", text: "เว็บแอปในคาบ: Claim Buster และการ์ด C-M-T-S ของกลุ่ม", link: "https://script.google.com/macros/s/AKfycby9Emg9HGEli_fzRICZ2437bpW13ij-Iep_-lOuiUInV76zyv9K1-DhwPVNrQ4e00OE/exec" },
    ],
  },

  {
    week: 6,
    title: "MC5 Data Logger",
    items: [
      { type: "สไลด์",  text: "สไลด์ MC5 Data Logger",                     link: "slides/w06-data-logger.html" },
      { type: "ใบงาน",  text: "ใบงาน W06 Data Logger เส้นทางข้อมูลของฉัน (รายบุคคล)", link: "docs/w06-data-logger.pdf" },
      { type: "ใบงาน",  text: "แผนเก็บข้อมูลและ Build Log (กลุ่ม)",          link: "docs/w06-logger-build-log.pdf" },
      { type: "สื่อ",   text: "แผ่นขั้นตอน ESP32 Data Logger และการแก้ปัญหา", link: "docs/w06-esp32-steps.pdf" },
      { type: "สื่อ",   text: "โค้ด ESP32 Data Logger (คัดลอก/ดาวน์โหลด)",    link: "media/w06-esp32-code.html" },
      { type: "เว็บแอป", text: "เว็บแอปในคาบ: Data Logger ของกลุ่ม (รหัสอุปกรณ์ กราฟสด บันทึกมือ)", link: "https://script.google.com/macros/s/AKfycby9Emg9HGEli_fzRICZ2437bpW13ij-Iep_-lOuiUInV76zyv9K1-DhwPVNrQ4e00OE/exec" },
    ],
  },

  {
    week: 7,
    title: "MC6 Numbers Talk",
    items: [
      { type: "สไลด์",  text: "สไลด์ MC6 Numbers Talk",                    link: "slides/w07-numbers-talk.html" },
      { type: "ใบงาน",  text: "ใบงาน W07 Numbers Talk ตัวเลขที่กรรมการเชื่อ (รายบุคคล)", link: "docs/w07-numbers-talk.pdf" },
      { type: "ใบงาน",  text: "ร่างบทที่ 3–4 และผลทดสอบรอบแรก (กลุ่ม)",      link: "docs/w07-chapter3-4-draft.pdf" },
      { type: "สื่อ",   text: "การ์ดสูตร Numbers Talk สถิติพื้นฐาน ตาราง กราฟ", link: "docs/w07-stats-card.pdf" },
      { type: "เว็บแอป", text: "เว็บแอปในคาบ: Graph Makeover และ Stats Lab คำนวณสถิติของกลุ่ม", link: "https://script.google.com/macros/s/AKfycby9Emg9HGEli_fzRICZ2437bpW13ij-Iep_-lOuiUInV76zyv9K1-DhwPVNrQ4e00OE/exec" },
    ],
  },

  {
    week: 8,
    title: "Campaign 1 Mid-Pitch Runway",
    items: [
      { type: "สไลด์",  text: "สไลด์ Campaign 1 Mid-Pitch Runway",          link: "slides/w08-mid-pitch.html" },
      { type: "ใบงาน",  text: "ใบงาน W08 Mid-Pitch Runway พิช 3 นาทีของฉัน (รายบุคคล)", link: "docs/w08-mid-pitch.pdf" },
      { type: "ใบงาน",  text: "แผนพิช 3 นาที และตรวจความพร้อมต้นแบบ (กลุ่ม)", link: "docs/w08-pitch-plan.pdf" },
      { type: "สื่อ",   text: "การ์ด Pitch 3 นาที และเกณฑ์ Mid-Pitch",       link: "docs/w08-pitch-card.pdf" },
      { type: "เว็บแอป", text: "เว็บแอปในคาบ: Pitch Card ของกลุ่ม และประเมินเพื่อน Mid-Pitch", link: "https://script.google.com/macros/s/AKfycby9Emg9HGEli_fzRICZ2437bpW13ij-Iep_-lOuiUInV76zyv9K1-DhwPVNrQ4e00OE/exec" },
    ],
  },

  {
    week: 9,
    title: "MC7 Report Doctor & Board Design",
    items: [
      { type: "สไลด์",  text: "สไลด์ MC7 Report Doctor & Board Design",      link: "slides/w09-report-doctor.html" },
      { type: "ใบงาน",  text: "ใบงาน W09 Report Doctor และออกแบบบอร์ด 3 พับ (รายบุคคล)", link: "docs/w09-report-doctor.pdf" },
      { type: "ใบงาน",  text: "ร่างบทที่ 4–5 และแผนบอร์ด 3 พับ (กลุ่ม)",      link: "docs/w09-chapter4-5-board.pdf" },
      { type: "สื่อ",   text: "การ์ด Report Doctor บทที่ 4–5 และแม่แบบบอร์ด 3 พับ", link: "docs/w09-doctor-board-card.pdf" },
      { type: "เว็บแอป", text: "เว็บแอปในคาบ: Report Doctor, Board Planner และแบบสำรวจความพึงพอใจนำร่อง", link: "https://script.google.com/macros/s/AKfycby9Emg9HGEli_fzRICZ2437bpW13ij-Iep_-lOuiUInV76zyv9K1-DhwPVNrQ4e00OE/exec" },
    ],
  },

  {
    week: 10,
    title: "Build & Write Sprint",
    items: [
      { type: "สไลด์",  text: "สไลด์ Build & Write Sprint",                   link: "slides/w10-build-write-sprint.html" },
      { type: "ใบงาน",  text: "ใบงาน W10 Sprint Card ของฉัน (รายบุคคล · ไม่มีคะแนน)", link: "docs/w10-sprint-card.pdf" },
      { type: "ใบงาน",  text: "แผน Sprint และรายการตรวจความพร้อมสัปดาห์ที่ 11 (กลุ่ม)", link: "docs/w10-sprint-plan.pdf" },
      { type: "สื่อ",   text: "การ์ด Sprint และคู่มือผลิตบอร์ดจริง",          link: "docs/w10-sprint-board-card.pdf" },
      { type: "เว็บแอป", text: "เว็บแอปในคาบ: Sprint Board งานก่อนสัปดาห์ที่ 11 ของกลุ่ม", link: "https://script.google.com/macros/s/AKfycby9Emg9HGEli_fzRICZ2437bpW13ij-Iep_-lOuiUInV76zyv9K1-DhwPVNrQ4e00OE/exec" },
    ],
  },

  {
    week: 11,
    title: "MC8 Booth Experience & Judge Roulette",
    items: [
      { type: "สไลด์",  text: "สไลด์ MC8 Booth Experience & Judge Roulette",  link: "slides/w11-booth-judge.html" },
      { type: "ใบงาน",  text: "ใบงาน W11 Judge Prep และบทบาทที่บูธ (รายบุคคล · ไม่มีคะแนน)", link: "docs/w11-judge-prep.pdf" },
      { type: "ใบงาน",  text: "แผนเกมที่บูธ และรายการตรวจรับช่องคะแนนที่ 6 (กลุ่ม)", link: "docs/w11-booth-game-plan.pdf" },
      { type: "สื่อ",   text: "การ์ด Booth Experience และ Judge Roulette",   link: "docs/w11-booth-judge-card.pdf" },
      { type: "เว็บแอป", text: "เว็บแอปในคาบ: Booth Game Planner, Judge Prep และ Booth Check", link: "https://script.google.com/macros/s/AKfycby9Emg9HGEli_fzRICZ2437bpW13ij-Iep_-lOuiUInV76zyv9K1-DhwPVNrQ4e00OE/exec" },
    ],
  },

  {
    week: 12,
    title: "Campaign 2 Final Walk",
    items: [
      { type: "สไลด์",  text: "สไลด์ Campaign 2 Final Walk",                  link: "slides/w12-final-walk.html" },
      { type: "ใบงาน",  text: "ใบงาน W12 Final Walk Log (รายบุคคล · หลักฐานช่องคะแนนที่ 8)", link: "docs/w12-final-walk-log.pdf" },
      { type: "ใบงาน",  text: "แผนวันงานเปิดบ้าน และบันทึกบูธของกลุ่ม (กลุ่ม)", link: "docs/w12-booth-day-plan.pdf" },
      { type: "สื่อ",   text: "การ์ด Final Walk และ Booth Passport",          link: "docs/w12-final-walk-card.pdf" },
      { type: "สื่อ",   text: "Booth Passport กระดาษ สำหรับผู้เยี่ยมชม (4 ใบต่อ A4)", link: "docs/w12-booth-passport-paper.pdf" },
      { type: "เว็บแอป", text: "เว็บแอปในคาบ: Final Walk บันทึกที่บูธ และ Booth Passport", link: "https://script.google.com/macros/s/AKfycby9Emg9HGEli_fzRICZ2437bpW13ij-Iep_-lOuiUInV76zyv9K1-DhwPVNrQ4e00OE/exec" },
    ],
  },

];
