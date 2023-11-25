const accordions = document.querySelectorAll('.accordion');
const popcorn = document.querySelector('.pop');

accordions?.forEach((item) => {
  item.addEventListener('click', function () {
    let opened = document.querySelector('.accordion.active-m');
    if (this.classList.contains('active-m')) {
      this.classList.remove('active-m');
    } else {
      opened?.classList.remove('active-m');
      this.classList.add('active-m');
    }
  });
});

console.log(popcorn);

window.addEventListener('click', function (e) {
  const accordion = document.querySelector('.xususi');
  let clicks = e.composedPath()
  if(popcorn.classList.contains('flex') && !clicks.includes(accordion)) {
    let opened = document.querySelector('.accordion.active-m');
    if (opened) {
      opened.classList.remove('active-m');
      opened.classList.remove('active');
    }
  }

})