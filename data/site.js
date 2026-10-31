/* =====================================================================
   IS2 THE PITCH · ไฟล์ข้อมูลหน้าเว็บ (ครูแก้ไฟล์นี้ไฟล์เดียว)
   ---------------------------------------------------------------------
   วิธีแก้บน GitHub: เปิดไฟล์ data/site.js > กดรูปดินสอ (Edit) >
   แก้เฉพาะข้อความในเครื่องหมาย "..." > กด Commit changes
   หน้าเว็บจะเปลี่ยนภายใน 1-2 นาที

   กติกาเล็กๆ กันหน้าเว็บพัง
   1) แก้เฉพาะข้อความในเครื่องหมาย "..."  อย่าลบเครื่องหมาย " , [ ] { }
   2) ถ้าข้อความมีเครื่องหมาย " ให้ใช้ “ ” (อัญประกาศแบบไทย) แทน
   3) ทุกบรรทัดในรายการต้องจบด้วยเครื่องหมาย ,  (จุลภาค)
   4) ไม่ต้องการบรรทัดใด ให้ใส่ // ไว้หน้าบรรทัดนั้น (ซ่อน) หรือลบทิ้ง

   งานประจำสัปดาห์
   - เปลี่ยน week: เป็นสัปดาห์ใหม่ (ตารางเส้นทาง 20 สัปดาห์จะไฮไลต์ให้เอง)
   - แก้บล็อก thisWeek ให้เป็นเรื่องของสัปดาห์นั้น
   - ไฟล์ PDF ใบงานวางในโฟลเดอร์ docs/ สไลด์ HTML วางใน slides/ สื่อ/เกม HTML วางใน media/
   - สื่อที่สร้างแล้วทุกชิ้นให้เพิ่มใน data/archive.js ด้วย (คลังสื่อรายสัปดาห์)
     (ชื่อไฟล์ภาษาอังกฤษ ไม่มีเว้นวรรค เช่น w02-health-check.pdf)
   ===================================================================== */

window.IS2_SITE = {

  week: 2,                              // สัปดาห์ที่กำลังเรียน (1-20)
  updated: "31 ต.ค. 2569",               // วันที่ครูแก้ไฟล์นี้ล่าสุด

  // ประกาศสั้นๆ แถบบนสุด (ไม่มีให้เว้นเป็น "")
  announce: "ช่วงกีฬาภายใน (ถึง 11 พ.ย. 69) โรงเรียนใช้ตารางเรียน 2 · คาบ IS2 วันจันทร์ 2 และ 9 พ.ย. เวลา 13.10–14.30 น. ห้อง 335 · สัปดาห์นี้ให้แต่ละกลุ่มนำเค้าโครง IS1 (ไฟล์ในมือถือหรือฉบับพิมพ์) และผล Asset Check มาด้วย · ใบงานทุกหน้าเขียน ม.5/4 เลขที่ และเลขประจำตัว 5 หลักในกรอบมุมขวาบน",

  // ---------- สัปดาห์นี้ ----------
  thisWeek: {
    label: "สัปดาห์ที่ 2 · แผนที่ 2",
    date: "จันทร์ 2 พ.ย. 2569 คาบ 8–9 (13.10–14.30 น. ตารางเรียน 2 ช่วงกีฬาภายใน) ห้อง 335",   // วันที่และคาบที่เรียนจริง
    title: "MC1 Project Health Check",
    unit: "หน่วยที่ 1 Blueprint & Evidence",
    goals: [
      "รู้โครงสร้างรายงานโครงงาน 5 บท และหัวข้อย่อยของแต่ละบท",
      "ตรวจสุขภาพเค้าโครง IS1 ของกลุ่ม 15 รายการ (0 / 1 / 2) ด้วยหลักฐาน ในเว็บแอป เมนู Health Check",
      "อ่านผลทั้งห้องเป็นแผนภาพช่องว่าง และทำแผนที่ช่องว่าง (Gap Map) ของกลุ่ม",
      "ฝึกเขียนวัตถุประสงค์ให้วัดผลได้: วัดอะไร หน่วยอะไร เกณฑ์เท่าไร",
      "รู้ว่าตนเป็นเจ้าภาพบทไหนตามบทบาทในทีม",
    ],
    bring: [
      "เค้าโครง IS1 ของกลุ่ม (ไฟล์ในมือถือ ไดรฟ์ หรือฉบับพิมพ์)",
      "ผล Asset Check และบทบาทที่เลือกไว้เมื่อสัปดาห์ที่ 1",
      "มือถือที่ชาร์จแบตเตอรี่แล้ว",
    ],
    tasks: [                            // link เว้น "" ได้
      { text: "ใบงาน W02 Project Health Check (รายบุคคล 1 หน้า) ส่งท้ายคาบ · ช่อง 1", link: "docs/w02-health-check.pdf" },
      { text: "แผนที่ช่องว่าง Gap Map (กลุ่มละ 1 แผ่น) ส่งท้ายคาบ · ใช้ต่อสัปดาห์ที่ 3", link: "docs/w02-gap-map.pdf" },
      { text: "ตรวจ Health Check 15 ข้อ และส่ง Mission Log ในเว็บแอปในคาบ", link: "https://script.google.com/macros/s/AKfycby9Emg9HGEli_fzRICZ2437bpW13ij-Iep_-lOuiUInV76zyv9K1-DhwPVNrQ4e00OE/exec" },
    ],
    media: [
      { text: "สไลด์ MC1 Project Health Check", link: "slides/w02-health-check.html" },
      { text: "แผ่นสรุปโครงสร้างรายงานโครงงาน 5 บท", link: "docs/w02-report-structure.pdf" },
    ],
  },

  // สัปดาห์หน้า (แสดงสั้นๆ ใต้สัปดาห์นี้)
  nextWeek: "สัปดาห์ที่ 3 · จ. 9 พ.ย. 69 (13.10–14.30 น.) · MC2 Restore – Upgrade – Pivot · เลือกเส้นทาง ทำรายการวัสดุ (BOM) และเค้าโครง v2 · ปิดรับเปลี่ยนเรื่อง · นำ Gap Map ผล Asset Check และราคาชิ้นส่วนที่ต้องซื้อมาด้วย",

  // ลิงก์ประจำรายวิชา
  links: [
    { text: "เว็บแอปในคาบ (โหวต บทบาท Runway Mission Log)", link: "https://script.google.com/macros/s/AKfycby9Emg9HGEli_fzRICZ2437bpW13ij-Iep_-lOuiUInV76zyv9K1-DhwPVNrQ4e00OE/exec" },
  ],

  // ---------- เส้นทาง 20 สัปดาห์ (วันที่ = วันจันทร์ที่มีคาบ IS2 ตามตารางเรียนภาค 2/2569 · วันงานเปิดบ้านรอประกาศ) ----------
  calendar: [
    { w: 1,  dates: "จ. 26 ต.ค. 69",       title: "ปฐมนิเทศ “IS2 THE PITCH”",                     slot: "" },
    { w: 2,  dates: "จ. 2 พ.ย. 69",         title: "MC1 Project Health Check",                     slot: "1" },
    { w: 3,  dates: "จ. 9 พ.ย. 69",        title: "MC2 Restore – Upgrade – Pivot · ปิดรับเปลี่ยนเรื่อง", slot: "1" },
    { w: 4,  dates: "จ. 16 พ.ย. 69",       title: "MC3 Source Detective",                         slot: "3" },
    { w: 5,  dates: "จ. 23 พ.ย. 69",       title: "MC4 PROVE IT!",                                slot: "3" },
    { w: 6,  dates: "จ. 30 พ.ย. 69",   title: "MC5 Data Logger",                              slot: "" },
    { w: 7,  dates: "จ. 14 ธ.ค. 69 (เลื่อน · 7 ธ.ค. หยุด)",        title: "MC6 Numbers Talk",                             slot: "2" },
    { w: 8,  dates: "จ. 21 ธ.ค. 69 (เลื่อน)",       title: "Campaign 1 Mid-Pitch Runway",                  slot: "5", campaign: true },
    { w: 9,  dates: "จ. 28 ธ.ค. 69 (เลื่อน)",       title: "MC7 Report Doctor & Board Design",             slot: "6" },
    { w: 10, dates: "ไม่มีคาบ · Sprint ที่บ้าน", title: "Build & Write Sprint (สัปดาห์สำรอง)",          slot: "" },
    { w: 11, dates: "จ. 4 ม.ค. 70",         title: "MC8 Booth Experience & Judge Roulette",        slot: "6" },
    { w: 12, dates: "จ. 11 ม.ค. 70",       title: "Campaign 2 Final Walk · งานเปิดบ้านวิชาการ (วันจริงรอประกาศ)", slot: "8, 9", campaign: true },
    { w: 13, dates: "จ. 18 ม.ค. 70",       title: "MC9 After the Show",                           slot: "" },
    { w: 14, dates: "จ. 25 ม.ค. 70",       title: "MC10 Final Report Lab 1",                      slot: "" },
    { w: 15, dates: "จ. 1 ก.พ. 70",         title: "MC10 Final Report Lab 2",                      slot: "" },
    { w: 16, dates: "จ. 8 ก.พ. 70",        title: "MC11 Digital Portfolio",                       slot: "7" },
    { w: 17, dates: "จ. 15 ก.พ. 70",       title: "MC12 Share the Knowledge",                     slot: "7" },
    { w: 18, dates: "จ. 22 ก.พ. 70",       title: "Campaign 3 Final Report",                      slot: "4", campaign: true },
    { w: 19, dates: "จ. 1 มี.ค. 70",        title: "Season Finale",                                slot: "" },
    { w: 20, dates: "จ. 8 มี.ค. 70",       title: "สรุปผลการเรียนรู้ · เก็บตกงานค้าง",              slot: "" },
  ],

  // ข้อมูล 8 ทีม (Portfolio, Mentor's Notes) อยู่ที่ data/teams.js · คลังสื่อทุกสัปดาห์อยู่ที่ data/archive.js
};
