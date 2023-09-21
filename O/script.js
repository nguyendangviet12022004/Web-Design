const btn = document.getElementById("btn");

const header = document.querySelector("header");
const main = document.querySelector("main");

btn.addEventListener("click",(even)=>{
    btn.classList.toggle("on");
    btn.classList.toggle("off");

    if(btn.classList.contains("off"))
    {
        header.style.display="none";
        main.style.display = "none";
    }
    else {
        header.style.display = "block";
        main.style.display = "flex";
    }
})