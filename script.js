let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");

dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})

let typingEffect = new Typed("#text", {
    strings: ["Developer","Programmer","Designer"],
    loop:true,
    typespeed:100,
    backspeed:50,
    backDelay:1000,
})