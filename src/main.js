import './style.css';
import { HomePage } from './pages/home.js';
import { AboutPage } from './pages/about.js';
import { ContactPage } from './pages/contact.js';
import { AdminPage } from './pages/admin.js';

const routes = {
  '/': HomePage,
  '/about': AboutPage,
  '/contact': ContactPage,
  '/admin': AdminPage,
};

function render(path) {
  const pageFn = routes[path] || HomePage;

  document.querySelector('#app').innerHTML = `
    <div class="min-h-screen bg-slate-50 text-slate-800 font-sans pb-12">
      <!-- เมนูด้านบน (Navbar) -->
      <nav class="bg-slate-900 text-white shadow-md">
        <div class="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div class="font-bold text-xl tracking-wide text-indigo-400 cursor-pointer" data-link="/">
            MyWebProject
          </div>
          <div class="flex space-x-6 text-sm font-medium">
            <a href="/" data-link="/" class="${path === '/' ? 'text-indigo-400 font-bold' : 'text-slate-300 hover:text-white'} transition">Home</a>
            <a href="/about" data-link="/about" class="${path === '/about' ? 'text-indigo-400 font-bold' : 'text-slate-300 hover:text-white'} transition">About</a>
            <a href="/contact" data-link="/contact" class="${path === '/contact' ? 'text-indigo-400 font-bold' : 'text-slate-300 hover:text-white'} transition">Contact</a>
            <a href="/admin" data-link="/admin" class="${path === '/admin' ? 'text-indigo-400 font-bold' : 'text-slate-300 hover:text-white'} transition">Admin</a>
          </div>
        </div>
      </nav>

      <!-- พื้นที่แสดงเนื้อหาแต่ละหน้า -->
      <main class="px-4">
        ${pageFn()}
      </main>
    </div>
  `;
}

// จัดการการคลิกลิงก์และปุ่มเปลี่ยนหน้า (SPA Routing)
document.addEventListener('click', (e) => {
  const target = e.target.closest('[data-link]');
  if (target) {
    e.preventDefault();
    const path = target.getAttribute('data-link');
    window.history.pushState({}, '', path);
    render(path);
  }
});

// รองรับปุ่ม Back / Forward ของเบราว์เซอร์
window.addEventListener('popstate', () => {
  render(window.location.pathname);
});

// โหลดหน้าเริ่มต้น
render(window.location.pathname);