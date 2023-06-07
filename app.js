const navLinks = document.getElementById("navLinks")
const timesİcon = document.getElementById("timesİcon")
const menuİcon = document.getElementById("menuİcon")
function runEventListeners(){
    timesİcon.addEventListener("click",hideMenu)
    menuİcon.addEventListener("click",showMenu)
}
runEventListeners();

function hideMenu(){
    console.log("hello")
    navLinks.style.right="-200px";
}

function showMenu(){
    console.log(" hello ")
    navLinks.style.right="0";
}
