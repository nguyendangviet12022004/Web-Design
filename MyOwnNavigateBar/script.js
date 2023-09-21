const dropListButton = document.querySelector("#dropList > a");

const dropListContent = document.getElementById("dropContent");

const dropListIcon = document.querySelector("#dropList>a>i");


dropListButton.addEventListener("click",(event)=>{
    dropListContent.classList.toggle("on");
    dropListContent.classList.toggle("off");
    dropListIcon.classList.toggle("fa-angle-down");
    dropListIcon.classList.toggle("fa-angle-up");
})