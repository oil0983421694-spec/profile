export function AdminPage() {
  return `
    <div class="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-md border border-slate-100">
      <div class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-3xl font-bold text-slate-800">หน้าแอดมิน (Admin)</h1>
          <p class="text-slate-500 mt-1">จัดการข้อมูลเว็บไซต์และตรวจสอบสถานะระบบ</p>
        </div>
        <button data-link="/" class="px-4 py-2 text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition cursor-pointer">
          ← กลับหน้าแรก
        </button>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-slate-100 text-slate-700 text-sm">
              <th class="p-3 rounded-tl-lg">ID</th>
              <th class="p-3">ชื่อผู้ใช้งาน</th>
              <th class="p-3">สถานะ</th>
              <th class="p-3 rounded-tr-lg">จัดการ</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 text-sm">
            <tr>
              <td class="p-3 font-medium">#001</td>
              <td class="p-3">สมชาย ใจดี</td>
              <td class="p-3"><span class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">Active</span></td>
              <td class="p-3 text-indigo-600 hover:underline cursor-pointer">แก้ไข</td>
            </tr>
            <tr>
              <td class="p-3 font-medium">#002</td>
              <td class="p-3">สมหญิง รักเรียน</td>
              <td class="p-3"><span class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">Active</span></td>
              <td class="p-3 text-indigo-600 hover:underline cursor-pointer">แก้ไข</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}