const obyekt = document.querySelector('.obyekt');
const qiymet = document.querySelector('.qiymet');
const qiymetPage = document.querySelector('.qiymetPage');
const obyektPage = document.querySelector('.obyektPage');

function changeObyekt() {
  obyektPage.classList.remove('elchange');
  qiymetPage.classList.add('elchange');
  obyekt.classList.add('activeObyekt');
  qiymet.classList.remove('activeQiymet');
}

function changeQiymet() {
  obyektPage.classList.add('elchange');
  qiymetPage.classList.remove('elchange');
  obyekt.classList.remove('activeObyekt');
  qiymet.classList.add('activeQiymet');
}

obyekt?.addEventListener('click', changeObyekt);
qiymet?.addEventListener('click', changeQiymet);
