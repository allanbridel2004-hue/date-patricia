const noBtn=document.getElementById("noBtn");

let vitesse=1;

noBtn.addEventListener("mouseover",()=>{

const x=Math.random()*(window.innerWidth-180);

const y=Math.random()*(window.innerHeight-120);

noBtn.style.position="absolute";

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";

noBtn.style.transform=`scale(${1+Math.random()*0.4})`;

vitesse+=0.2;

});

document.getElementById("yesBtn").addEventListener("click",()=>{

document.body.style.transition="1s";

document.body.style.opacity="0";

setTimeout(()=>{

window.location.href="choice.html";

},900);

});