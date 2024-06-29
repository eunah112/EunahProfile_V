const nav = document.querySelector('#nav');
const navHeight = nav.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY > navHeight) {
        nav.classList.add('active');
    } else {
        menu.classList.remove('active');
    }
});