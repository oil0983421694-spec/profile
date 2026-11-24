export function HomePage() {
  return `
    <div class="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-md border border-slate-100">
      <div class="flex flex-wrap items-center gap-2">
        <span class="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">ยินดีต้อนรับ</span>
        <span class="px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-50 rounded-full">ผู้จัดทำ: นายธนากร นาทันลิ</span>
      </div>

      <h1 class="text-4xl font-bold text-slate-800 mt-4 mb-3">หน้าหลัก (Home)</h1>
      <p class="text-slate-600 text-lg mb-8 leading-relaxed">
        พัฒนาโดย <strong>นายธนากร นาทันลิ</strong> — เว็บไซต์ 4 หน้า (Home, About, Contact, Admin) ที่สร้างด้วย Vite และตกแต่งด้วย Tailwind CSS พร้อม Deploy บน Vercel
      </p>

      <div class="flex flex-wrap gap-4">
        <button
          data-link="/admin"
          class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow transition cursor-pointer"
        >
          ไปที่หน้า Admin →
        </button>
        <button
          data-link="/about"
          class="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition cursor-pointer"
        >
          เกี่ยวกับผู้จัดทำ
        </button>
      </div>
    </div>
  `;
}