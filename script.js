var mainSlider = new Swiper(".mySwiper2", {
	parallax: true,
	speed: 1000,
	effect: 'slide',
    direction: "vertical",
    autoplay: true,
	navigation: {
	  nextEl: '.upk-button-next',
	  prevEl: '.upk-button-prev',
	},
    pagination: {
         el: '.swiper-pagination',
         clickable: true,
         renderBullet: function(index, className) {
             return '<span class="' + className + ' swiper-pagination-bullet--svg-animation"><svg width="28" height="28" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="10" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="2" stroke-width="3"></circle></svg></span>';
         },
     },
  });

  
  const cursor = document.querySelector('#cursor');
let mouse = { x: 300, y: 300 };
let pos = { x: 0, y: 0 };
const speed = 0.1; // between 0 and 1

const updatePosition = () => {
  pos.x += (mouse.x - pos.x) * speed;
  pos.y += (mouse.y - pos.y) * speed;
  cursor.style.transform = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';
};

const updateCoordinates = e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}

window.addEventListener('mousemove', updateCoordinates);

function loop() {
  updatePosition();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

const sectionIds = ['about-area', 'features-area', 'product-area', 'gallery-area', 'footer'];

window.addEventListener('scroll', () => {
  sectionIds.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    const sectionTop = section.getBoundingClientRect().top;

    // Ekranda görünmesini istediğiniz konum
    const triggerPoint = window.innerHeight * 0.8;

    if (sectionTop < triggerPoint) {
      section.style.opacity = 1;
      section.classList.add('animate__animated', 'animate__fadeInUp');
      // İstediğiniz animasyon sınıfını kullanabilirsiniz
    }
  });
});



const ev1 = document.querySelector('.ev1');
const ev2 = document.querySelector('.ev2');
const ev3 = document.querySelector('.ev3');

ev1.addEventListener('click', () => {
  ev2.classList.remove('d-none');
  ev2.classList.add('animate__animated', 'animate__fadeIn'); // Animasyonu ekler
  ev3.classList.add('d-none');
});

ev2.addEventListener('click', () => {
  ev3.classList.remove('d-none');
  ev3.classList.add('animate__animated', 'animate__fadeIn'); // Animasyonu ekler
  ev2.classList.add('d-none');
});
