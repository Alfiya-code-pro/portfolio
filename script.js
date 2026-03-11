/* typing intro */

const text = "BCA Student • Aspiring Full Stack Developer";
let i = 0;

function typing(){

if(i < text.length){

document.querySelector(".typing").textContent += text.charAt(i);

i++;

setTimeout(typing,60);

}

}

typing();

/* dark mode toggle */

const toggle = document.getElementById("themeToggle");

toggle.onclick = function(){

document.body.classList.toggle("dark");

}