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
    <div class="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      <!-- เมนูด้านบน (Navbar) -->
      <nav class="bg-slate-900 text-white shadow-md">
        <div class="max-w-5xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">
          <div class="flex items-center gap-3 cursor-pointer" data-link="/">
            <span class="font-bold text-xl tracking-wide text-indigo-400">MyWebProject</span>
            <span class="text-xs sm:text-sm bg-slate-800 text-slate-200 px-3 py-1 rounded-full border border-slate-700">
              นายธนากร นาทันลิ
            </span>
          </div>

          <div class="flex space-x-6 text-sm font-medium">
            <a href="/" data-link="/" class="${path === '/' ? 'text-indigo-400 font-bold' : 'text-slate-300 hover:text-white'} transition">Home</a>
            <a href="/about" data-link="/about" class="${path === '/about' ? 'text-indigo-400 font-bold' : 'text-slate-300 hover:text-white'} transition">About</a>
            <a href="/contact" data-link="/contact" class="${path === '/contact' ? 'text-indigo-400 font-bold' : 'text-slate-300 hover:text-white'} transition">Contact</a>
            <a href="/admin" data-link="/admin" class="${path === '/admin' ? 'text-indigo-400 font-bold' : 'text-slate-300 hover:text-white'} transition">Admin</a>
          </div>
        </div>
      </nav>

      <!-- เนื้อหาหลัก -->
      <main class="flex-1 px-4 pb-12">
        ${pageFn()}
      </main>

      <!-- ส่วนท้าย (Footer) -->
      <footer class="bg-white border-t border-slate-200 py-4 text-center text-sm text-slate-500">
        จัดทำโดย <span class="font-semibold text-slate-700">นายธนากร นาทันลิ</span> • 4-Page Web on Vercel
      </footer>
    </div>
  `;
}

document.addEventListener('click', (e) => {
  const target = e.target.closest('[data-link]');
  if (target) {
    e.preventDefault();
    const path = target.getAttribute('data-link');
    window.history.pushState({}, '', path);
    render(path);
  }
});

window.addEventListener('popstate', () => {
  render(window.location.pathname);
});

render(window.location.pathname);