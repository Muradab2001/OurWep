const elektron = document.querySelector('.elektron');
const jurnal = document.querySelector('.jurnal');
const elektronpage = document.querySelector('.elektronpage');
const jurnalpage = document.querySelector('.jurnalpage');

function changeJurnal() {
  elektronpage.classList.remove('change');
  jurnalpage.classList.add('change');
  jurnal.classList.add('opacity');
  elektron.classList.remove('opacity');
}

function changeElektron() {
  elektronpage.classList.add('change');
  jurnalpage.classList.remove('change');
  elektron.classList.add('opacity');
  jurnal.classList.remove('opacity');
}

elektron.addEventListener('click', changeJurnal);
jurnal.addEventListener('click', changeElektron);
