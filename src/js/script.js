const iconOpen = document.getElementById('icon-open');
const menu = document.getElementById('menu');
const iconClose = document.getElementById('icon-close')

iconOpen.addEventListener('click', ()=> {
    menu.classList.add('active');
});

iconClose.addEventListener("click", ()=> {
    menu.classList.remove('active');
});

console.log(iconClose);

