// ---------------------------------------------------------
// HANDLE NAVBAR
// ---------------------------------------------------------

const sidebar = document.getElementById('sidebar');
const toogler = document.getElementById('toogleBtn');
const toogler_icon = document.getElementById('tooglerIcon');

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
