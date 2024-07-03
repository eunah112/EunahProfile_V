const nav = document.querySelector('#nav');
const navHeight = nav.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY > navHeight) {
        nav.classList.add('active');
    } else {
        menu.classList.remove('active');
    }
});

document.getElementById('hamburger_icon').addEventListener('click', function() {
    const menu = document.getElementById('hamburger_menu');
    menu.classList.toggle('active');
});


/*const hamburger_icon = document.querySelector('#hamburger_icon');
const hamburger_menu = documet.querySelector('#hamburger_menu');

function showhamburgermenu(){
    document.getElementById("hamburger_menu").style.display = "block";
}

function nonehamburgermenu() {
    document.getElementById("hamburger_menu").style.display ="none";
}*/

/*hamburger_icon.addEventListener('click', () => {
    hamburger_menu.id('block');
    });*/


//hamburger_icon.addEventListener('click', showhamburgermenu);

