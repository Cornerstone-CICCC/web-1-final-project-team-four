const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const instaIcon = document.querySelector('.insta-icon');
const navBar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
                navBar.classList.add('on-scroll');
                offScreenMenu.classList.add('on-scroll');
        } else {
                navBar.classList.remove('on-scroll');
                offScreenMenu.classList.remove('on-scroll');
        }
})

hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
        instaIcon.classList.toggle('active');
})