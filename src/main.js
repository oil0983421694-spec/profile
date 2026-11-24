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

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
  { path: '/admin', label: 'Admin' },
];

function getCurrentRoute() {
  const hash = window.location.hash.replace(/^#/, '');
  return routes[hash] ? hash : '/';
}

function renderNavbar(currentPath) {
  const linksHtml = navItems
    .map((item) => {
      const isActive = item.path === currentPath;
      const activeClass = isActive
        ? 'bg-blue-600 text-white'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900';
      return `
        <a
          href="#${item.path}"
          class="px-3.5 py-2 rounded-lg text-sm font-medium transition ${activeClass}"
        >
          ${item.label}
        </a>
      `;
    })
    .join('');

  return `
    <header class="bg-white border-b border-slate-200 sticky top-0 z-10">
      <div class="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#/" class="text-lg font-bold text-slate-900 tracking-tight">
          MySite
        </a>
        <nav class="flex items-center gap-1 sm:gap-2">
          ${linksHtml}
        </nav>
      </div>
    </header>
  `;
}

function renderApp() {
  const app = document.querySelector('#app');
  if (!app) return;

  const currentPath = getCurrentRoute();
  const PageComponent = routes[currentPath];

  app.innerHTML = `
    <div class="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      ${renderNavbar(currentPath)}
      <main class="flex-1">
        ${PageComponent()}
      </main>
    </div>
  `;

  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#contact-status');
  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.classList.remove('hidden');
      form.reset();
    });
  }
}

window.addEventListener('hashchange', renderApp);
window.addEventListener('DOMContentLoaded', renderApp);
renderApp();