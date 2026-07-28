const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover",()=>{

const x=Math.random()*(window.innerWidth-150);

const y=Math.random()*(window.innerHeight-80);

noBtn.style.position="absolute";

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";

});

document.getElementById("yesBtn").addEventListener("click",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

window.location.href="choice.html";

},800);

});