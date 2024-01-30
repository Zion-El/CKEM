const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 1000,
    spaceBetween: 100,
  
    direction: 'horizontal',
    loop: true,
  
    autoplay: {
        delay: 3000,
      },

      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
  });


// ---------------------------------------------------------
// HANDLE NAVBAR
// ---------------------------------------------------------

const sidebar = document.getElementById('sidebar');
const toogler = document.getElementById('toogleBtn');
const toogler_icon = document.getElementById('tooglerIcon');
const navbar = document.getElementById('nav')
const showBtn = document.getElementById('show')
const showIcon = document.getElementById('icon')
const passwordInput = document.getElementById('password')


const ChangeBackground = () => {
    if (window.scrollY >= 80) {
      navbar.classList.add('header')
    } else {
        navbar.classList.remove('header')
    }
  };
document.addEventListener('scroll', ChangeBackground)




function handleToggle() {
    if (toogler_icon.classList.contains('fa-bars')) {
        console.log('yes');
        sidebar.style.transform = 'translateX(0)';
        toogler_icon.classList.remove('fa-bars');
        toogler_icon.classList.add('fa-times');
    } else {
        sidebar.style.transform = 'translateX(-800px)';
        toogler_icon.classList.remove('fa-times');        
        toogler_icon.classList.add('fa-bars');
    }
}

toogler.addEventListener('click', handleToggle);


