const nav_menu=document.getElementById("nav-menu"),
menu_icon=document.getElementById("nav-toggle"),
close_icon=document.getElementById("nav-close");

if(menu_icon){
    menu_icon.addEventListener("click",()=>{
        nav_menu.classList.add("show-menu");
    });
}
if(close_icon){
    close_icon.addEventListener("click",()=>{
    nav_menu.classList.remove("show-menu");
    });
}
