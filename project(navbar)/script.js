function display(){
    const menu=document.querySelector(".menu-bar");//menu icon
        //console.log(menu);
        const menulist=document.querySelector(".menu");//list of menus
        //console.log(menulist)
        menu.addEventListener("click",()=>{
        menulist.classList.toggle("showmenu");});
}
display();