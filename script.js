const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const toast = document.getElementById('toast');

if (menu && nav) {
  menu.addEventListener('click', () => nav.classList.toggle('open'));
}

function notify(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2600);
}

function apply(job) {
  notify('تم اختيار التقديم على: ' + job);
}

function buy(item) {
  notify('تم اختيار ' + item);
}

function connect(event) {
  if (event) event.preventDefault();
  notify('ضع رابط اتصال FiveM الخاص بك داخل هذه الدالة.');
}
