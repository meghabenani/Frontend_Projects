
let typed=new Typed("#text",{
    strings:["Frontend Developer","Web Developer","Learner"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})


let body=document.querySelector("body")
let day=document.querySelector(".brightness")

day.addEventListener("click",()=>{
    document.body.classList.toggle("toggle")
})

