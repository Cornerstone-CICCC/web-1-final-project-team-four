const messageIcon = document.querySelector('.message-icon');
const offScreenMessageIcon = document.querySelector('.off-screen-message-icon');
const messageIconImg = document.querySelector('.message-icon-img');

messageIcon.addEventListener('click', () => {
        offScreenMessageIcon.classList.toggle('active');

        // .message-icon-img to be closed
        if (offScreenMessageIcon.classList.contains('active')) {
                messageIconImg.src = './assets/images/icon-close.svg';
        } else {
                messageIconImg.src = './assets/images/message-icon-nobc.svg';
        }
})

window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
                messageIcon.classList.add('on-scroll');
        } else {
                messageIcon.classList.remove('on-scroll');
        }
})