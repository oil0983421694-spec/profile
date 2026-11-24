export function AboutPage() {
  return `
    <section class="max-w-4xl mx-auto px-4 py-12">
      <div class="bg-white rounded-2xl shadow-md border border-slate-100 p-8 md:p-10">
        <span class="inline-block px-3 py-1 text-xs font-semibold uppercase bg-emerald-100 text-emerald-700 rounded-full mb-3">
          About Page
        </span>
        <h1 class="text-3xl font-bold text-slate-900 mb-4">เกี่ยวกับเรา</h1>
        <p class="text-slate-600 leading-relaxed mb-6">
          หน้านี้จัดทำขึ้นเพื่อแสดงรายละเอียดข้อมูลทั่วไป รายละเอียดโปรเจกต์ และโครงสร้างการแบ่งหน้าเว็บไซต์ด้วย JavaScript
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div class="text-sm text-slate-500">จำนวนหน้า</div>
            <div class="text-2xl font-bold text-slate-800 mt-1">4 หน้า</div>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div class="text-sm text-slate-500">สไตล์</div>
            <div class="text-2xl font-bold text-slate-800 mt-1">Tailwind CSS</div>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div class="text-sm text-slate-500">โฮสติ้ง</div>
            <div class="text-2xl font-bold text-slate-800 mt-1">Vercel</div>
          </div>
        </div>
      </div>
    </section>
  `;
}