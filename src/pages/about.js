export function AboutPage() {
  return `
    <div class="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-md border border-slate-100">
      <h1 class="text-3xl font-bold text-slate-800 mb-4">เกี่ยวกับเรา (About)</h1>
      <p class="text-slate-600 mb-6 leading-relaxed">
        โปรเจกต์นี้สร้างขึ้นเพื่อฝึกการจัดการ Routing แบบ Single Page Application (SPA) ด้วย JavaScript ล้วน และการแบ่งโครงสร้างไฟล์ให้เป็นระเบียบในโฟลเดอร์ <code class="bg-slate-100 px-2 py-1 rounded text-pink-600">src/pages</code>
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div class="p-4 bg-blue-50 rounded-xl">
          <h3 class="font-bold text-blue-800 mb-1">รวดเร็ว</h3>
          <p class="text-sm text-blue-600">ทำงานด้วย Vite ทำให้โหลดหน้าเว็บได้ไว</p>
        </div>
        <div class="p-4 bg-emerald-50 rounded-xl">
          <h3 class="font-bold text-emerald-800 mb-1">สวยงาม</h3>
          <p class="text-sm text-emerald-600">ตกแต่ง UI ทุกหน้าด้วย Tailwind CSS</p>
        </div>
        <div class="p-4 bg-purple-50 rounded-xl">
          <h3 class="font-bold text-purple-800 mb-1">เป็นระเบียบ</h3>
          <p class="text-sm text-purple-600">แยกโค้ดแต่ละหน้าออกเป็นสัดส่วน</p>
        </div>
      </div>
    </div>
  `;
}