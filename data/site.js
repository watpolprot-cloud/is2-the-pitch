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

  week: 1,                              // สัปดาห์ที่กำลังเรียน (1-20)
  updated: "3 ต.ค. 2569",               // วันที่ครูแก้ไฟล์นี้ล่าสุด

  // ประกาศสั้นๆ แถบบนสุด (ไม่มีให้เว้นเป็น "")
  announce: "เปิดภาคเรียน 26 ต.ค. 2569 · คาบแรกให้แต่ละกลุ่มนำชิ้นงาน ชิ้นส่วน และไฟล์จาก IS1 ที่ยังมีอยู่มาด้วย",

  // ---------- สัปดาห์นี้ ----------
  thisWeek: {
    label: "สัปดาห์ที่ 1 · แผนที่ 1",
    date: "",                           // วันที่และคาบที่เรียนจริง เช่น "พุธ 28 ต.ค. 2569 คาบ 5-6" (รอตารางสอน)
    title: "ปฐมนิเทศ “IS2 THE PITCH”",
    unit: "หน่วยที่ 1 Blueprint & Evidence",
    goals: [
      "รู้จักแนวคิด THE PITCH เส้นทาง 20 สัปดาห์ และ Campaign 3 ครั้ง",
      "เข้าใจกติกาคะแนน 9 ช่อง: ช่อง 1–8 ส่งครบได้เต็ม ช่อง 9 กรรมการภายนอกประเมิน",
      "สำรวจสิ่งที่เหลือจาก IS1 ของกลุ่ม (Asset Check)",
      "เลือกบทบาทในทีมให้ครบ 5 บทบาท",
      "รู้กติกาความปลอดภัยในการสร้างชิ้นงาน 5 ข้อ",
    ],
    bring: [
      "ชิ้นงานหรือชิ้นส่วนจาก IS1 ที่ยังเหลืออยู่ (ชำรุดก็นำมาได้)",
      "ไฟล์โค้ด ภาพถ่าย หรือวิดีโอชิ้นงานในมือถือหรือไดรฟ์",
      "มือถือที่ชาร์จแบตเตอรี่แล้ว",
    ],
    tasks: [                            // link เว้น "" ได้
      { text: "ใบงาน W01 Player Card (รายบุคคล) ส่งท้ายคาบ · ไม่มีคะแนน", link: "docs/w01-player-card.pdf" },
      { text: "แบบสำรวจ Asset Check (กลุ่มละ 1 ชุด) ส่งท้ายคาบ · ไม่มีคะแนน", link: "docs/w01-asset-check.pdf" },
      { text: "บันทึกบทบาทและส่ง Mission Log ในเว็บแอปในคาบ", link: "https://script.google.com/macros/s/AKfycby9Emg9HGEli_fzRICZ2437bpW13ij-Iep_-lOuiUInV76zyv9K1-DhwPVNrQ4e00OE/exec" },
    ],
    media: [
      { text: "สไลด์ปฐมนิเทศ IS2 THE PITCH", link: "slides/w01-orientation.html" },
      { text: "บัตรบทบาท 5 ตำแหน่ง", link: "docs/w01-roles.pdf" },
      { text: "กติกาความปลอดภัย 5 ข้อ", link: "docs/w01-safety-rules.pdf" },
    ],
  },

  // สัปดาห์หน้า (แสดงสั้นๆ ใต้สัปดาห์นี้)
  nextWeek: "สัปดาห์ที่ 2 · MC1 Project Health Check · ตรวจสุขภาพเค้าโครงเดิม หาช่องว่างก่อนเขียนรายงาน 5 บท · นำผล Asset Check และเค้าโครง IS1 มาด้วย",

  // ลิงก์ประจำรายวิชา
  links: [
    { text: "เว็บแอปในคาบ (โหวต บทบาท Runway Mission Log)", link: "https://script.google.com/macros/s/AKfycby9Emg9HGEli_fzRICZ2437bpW13ij-Iep_-lOuiUInV76zyv9K1-DhwPVNrQ4e00OE/exec" },
  ],

  // ---------- เส้นทาง 20 สัปดาห์ (ช่วงวันที่เป็นค่าประมาณ จนกว่าตารางสอนและวันงานเปิดบ้านจะประกาศ) ----------
  calendar: [
    { w: 1,  dates: "26–30 ต.ค. 69",       title: "ปฐมนิเทศ “IS2 THE PITCH”",                     slot: "" },
    { w: 2,  dates: "2–6 พ.ย. 69",         title: "MC1 Project Health Check",                     slot: "1" },
    { w: 3,  dates: "9–13 พ.ย. 69",        title: "MC2 Restore – Upgrade – Pivot · ปิดรับเปลี่ยนเรื่อง", slot: "1" },
    { w: 4,  dates: "16–20 พ.ย. 69",       title: "MC3 Source Detective",                         slot: "3" },
    { w: 5,  dates: "23–27 พ.ย. 69",       title: "MC4 PROVE IT!",                                slot: "3" },
    { w: 6,  dates: "30 พ.ย.–4 ธ.ค. 69",   title: "MC5 Data Logger",                              slot: "" },
    { w: 7,  dates: "7–11 ธ.ค. 69",        title: "MC6 Numbers Talk",                             slot: "2" },
    { w: 8,  dates: "14–18 ธ.ค. 69",       title: "Campaign 1 Mid-Pitch Runway",                  slot: "5", campaign: true },
    { w: 9,  dates: "21–25 ธ.ค. 69",       title: "MC7 Report Doctor & Board Design",             slot: "6" },
    { w: 10, dates: "28 ธ.ค. 69–1 ม.ค. 70", title: "Build & Write Sprint (สัปดาห์สำรอง)",          slot: "" },
    { w: 11, dates: "4–8 ม.ค. 70",         title: "MC8 Booth Experience & Judge Roulette",        slot: "6" },
    { w: 12, dates: "11–15 ม.ค. 70",       title: "Campaign 2 Final Walk · งานเปิดบ้านวิชาการ (วันจริงรอประกาศ)", slot: "8, 9", campaign: true },
    { w: 13, dates: "18–22 ม.ค. 70",       title: "MC9 After the Show",                           slot: "" },
    { w: 14, dates: "25–29 ม.ค. 70",       title: "MC10 Final Report Lab 1",                      slot: "" },
    { w: 15, dates: "1–5 ก.พ. 70",         title: "MC10 Final Report Lab 2",                      slot: "" },
    { w: 16, dates: "8–12 ก.พ. 70",        title: "MC11 Digital Portfolio",                       slot: "7" },
    { w: 17, dates: "15–19 ก.พ. 70",       title: "MC12 Share the Knowledge",                     slot: "7" },
    { w: 18, dates: "22–26 ก.พ. 70",       title: "Campaign 3 Final Report",                      slot: "4", campaign: true },
    { w: 19, dates: "1–5 มี.ค. 70",        title: "Season Finale",                                slot: "" },
    { w: 20, dates: "8–12 มี.ค. 70",       title: "สรุปผลการเรียนรู้ · เก็บตกงานค้าง",              slot: "" },
  ],

  // ข้อมูล 8 ทีม (Portfolio, Mentor's Notes) อยู่ที่ data/teams.js · คลังสื่อทุกสัปดาห์อยู่ที่ data/archive.js
};
