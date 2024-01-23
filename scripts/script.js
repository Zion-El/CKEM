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
// show password
showBtn.addEventListener('click', function(){
    if (showIcon.classList.contains('fa-eye')){
        showIcon.classList.remove('fa-eye')
        showIcon.classList.add('fa-eye-slash')
        passwordInput.type = 'text'
    }else{
        showIcon.classList.add('fa-eye')
        showIcon.classList.remove('fa-eye-slash')
        passwordInput.type = 'password'
    }
})


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

const ChangeBackground = () => {
    console.log('hello')
    if (window.scrollY >= 80) {
      navbar.classList.add('header')
    } else {
        navbar.classList.remove('header')
    }
  };
document.addEventListener('scroll', ChangeBackground)

