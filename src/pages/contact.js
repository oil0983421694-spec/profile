export function ContactPage() {
  return `
    <div class="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-md border border-slate-100">
      <h1 class="text-3xl font-bold text-slate-800 mb-2">ติดต่อเรา (Contact)</h1>
      <p class="text-slate-500 mb-6">มีข้อสงสัยหรือต้องการสอบถามข้อมูลเพิ่มเติม สามารถส่งข้อความหาเราได้ที่นี่</p>
      
      <form onsubmit="event.preventDefault(); alert('ส่งข้อความเรียบร้อยแล้ว!');" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">ชื่อ-นามสกุล</label>
          <input type="text" required placeholder="กรอกชื่อของคุณ" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">อีเมล</label>
          <input type="email" required placeholder="example@email.com" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1">ข้อความ</label>
          <textarea rows="4" required placeholder="พิมพ์ข้อความที่ต้องการติดต่อ..." class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
        </div>
        <button type="submit" class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow transition cursor-pointer">
          ส่งข้อความ
        </button>
      </form>
    </div>
  `;
}