document.getElementById('hamburger').addEventListener('click', showNav);
document.getElementById('product').addEventListener('click', showSubMenu);
document.getElementById('company').addEventListener('click', showSubMenu);
document.getElementById('connect').addEventListener('click', showSubMenu);
window.addEventListener('resize', removeToggle);

const navMenu = document.getElementById('nav_bar');

function showNav() {
    navMenu.classList.toggle('burger_active');
}

function removeToggle() {
    if (window.innerWidth > 900) {
        navMenu.classList.remove('burger_active');
    }
}

function showSubMenu(e) {
    e.preventDefault;
   if ( window.innerWidth < 900) {
        e.target.nextElementSibling.classList.toggle('sub_item_active');
    e.target.firstElementChild.classList.toggle('rotate');
   }
}

export { showNav, showSubMenu }