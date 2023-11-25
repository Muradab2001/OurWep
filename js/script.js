// const closeIcon = document.querySelector('.closeIcon');
// const burgerIcon = document.querySelector('.burgerIcon');
// const burgerMenu = document.querySelector('.burgerMenu');
// const main = document.querySelector('main');
// const footer = document.querySelector('footer');
// const header = document.querySelector('header');
// burgerIcon.onclick = () => {
//   burgerMenu.classList.remove('invisible');
//   burgerMenu.classList.remove('opacity-0');
//   main.classList.add('hidden');
//   footer.classList.add('hidden');
//   header.classList.add('min-h-screen');
//   document.body.classList.remove('overflow-x-hidden');
// };
// closeIcon.onclick = () => {
//   burgerMenu.classList.add('invisible');
//   burgerMenu.classList.add('opacity-0');
//   main.classList.remove('hidden');
//   footer.classList.remove('hidden');
//   header.classList.remove('min-h-screen');
//   document.body.classList.add('overflow-x-hidden');
// };

// // Accordion

accordion('accordion');

function accordion(acc) {
  const accordions = document.querySelectorAll(`.${acc}`);
  accordions?.forEach((item) => {
    item.addEventListener('click', function () {
      let opened = document.querySelector(`.${acc}.active`);
      if (this.classList.contains('active')) {
        this.classList.remove('active');
      } else {
        opened?.classList.remove('active');
        this.classList.add('active');
      }
    });
  });
}

// Partnyor Ol
// toggle('elektron', 'furset');

// function toggle(target1, target2) {
//   const elektron = document.querySelector(`.${target1}`);
//   const furset = document.querySelector(`.${target2}`);
//   const elektronPage = document.querySelector(`.${target1}-page`);
//   const fursetPage = document.querySelector(`.${target2}-page`);

//   function target1Toggle() {
//     elektronPage.classList.add('d-none');
//     fursetPage.classList.remove('d-none');
//   }

//   function target2Toggle() {
//     elektronPage.classList.remove('d-none');
//     fursetPage.classList.add('d-none');
//   }

//   elektron.addEventListener('click', target2Toggle);
//   furset.addEventListener('click', target1Toggle);
// }
