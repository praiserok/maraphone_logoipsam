let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
})


let price = document.querySelector('.price');
let paket = document.querySelectorAll('.paket');

price.addEventListener('click', (event) => {
  let why = event.target
  if (why.classList.contains('paket')) {
    for (var i = 0; i < paket.length; i++) {
      if (paket[i].classList.contains('activePrice')) {
        paket[i].classList.remove('activePrice')
      }
    }
    why.classList.add('activePrice')
  }
})