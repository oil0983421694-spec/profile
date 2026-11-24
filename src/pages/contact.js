export function ContactPage() {
  return `
    <section class="max-w-4xl mx-auto px-4 py-12">
      <div class="bg-white rounded-2xl shadow-md border border-slate-100 p-8 md:p-10">
        <span class="inline-block px-3 py-1 text-xs font-semibold uppercase bg-amber-100 text-amber-700 rounded-full mb-3">
          Contact Page
        </span>
        <h1 class="text-3xl font-bold text-slate-900 mb-2">ติดต่อเรา</h1>
        <p class="text-slate-600 mb-6">ส่งข้อความสอบถามหรือแจ้งรายละเอียดเพิ่มเติมได้ที่นี่</p>

        <form id="contact-form" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">ชื่อของคุณ</label>
            <input
              type="text"
              placeholder="กรอกชื่อ"
              class="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">อีเมล</label>
            <input
              type="email"
              placeholder="name@example.com"
              class="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">ข้อความ</label>
            <textarea
              rows="4"
              placeholder="พิมพ์ข้อความที่ต้องการติดต่อ..."
              class="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            class="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            ส่งข้อความ
          </button>
          <p id="contact-status" class="text-sm text-emerald-600 font-medium hidden">
            บันทึกข้อความเรียบร้อยแล้ว
          </p>
        </form>
      </div>
    </section>
  `;
}