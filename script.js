document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector('.Menu');
    const menuList = document.querySelector('.List ul');
    menu.addEventListener('click', () => {
        menuList.classList.toggle('ShowMenu');
    });
});
