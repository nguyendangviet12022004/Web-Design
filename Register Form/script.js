const btn = document.querySelector("button");
const content = document.querySelector("div");

btn.addEventListener("click",(event)=>{
    content.classList.toggle("show");
    content.classList.toggle("close");
    console.log(content)
}) 