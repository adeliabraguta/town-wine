const burger = document.querySelector('.burger')
const menu = document.querySelector('#menu')
const links = document.querySelectorAll('.links')

burger.addEventListener('click', function () {
    if (menu.classList.contains('menu-hidden')) {
        menu.classList.toggle('menu-visible')
    }
    console.log('ada')
})
document.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
        if (menu.classList.contains('menu-visible')) {
            menu.classList.remove('menu-visible');
        }
    }
});
links.forEach((link) => {
    link.addEventListener('click', function () {
        console.log('ada')
        menu.classList.remove('menu-visible')
    })
})


