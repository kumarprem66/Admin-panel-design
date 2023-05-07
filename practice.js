const side_menu = document.querySelector("aside");
const menu_btn = document.querySelector("#menu_btn");
const close_btn = document.querySelector("#close-btn");
const theme_toggler  =document.querySelector(".theme_change")

menu_btn.addEventListener('click',()=>{
    side_menu.style.display = 'block';
})

close_btn.addEventListener('click', ()=>{
    side_menu.style.display = 'none';
})

theme_toggler.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variable');

    theme_toggler.querySelector('span:nth-child(1)').classList.toggle('active');
    theme_toggler.querySelector('span:nth-child(2)').classList.toggle('active');

})