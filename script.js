const messages=[

"I love you more than words can say ❤️",
"You are the best thing that ever happened to me 💕",
"Every moment with you feels like a beautiful dream ☀️",
"My heart is always yours forever 💖",
"You make my life brighter every single day ❤️"

];

const photos=[

"picture/pic1 (1).jpg",
"picture/pic1 (2).jpg"

];

function createMessage(){

const msg=document.createElement("div");

msg.className="message";

msg.innerText=messages[Math.floor(Math.random()*messages.length)];

msg.style.left=Math.random()*90+"vw";

document.body.appendChild(msg);

setTimeout(()=>{
msg.remove();
},9000);

}

function createPhoto(){

const img=document.createElement("img");

img.className="photo";

img.src=photos[Math.floor(Math.random()*photos.length)];

img.style.left=Math.random()*90+"vw";

document.body.appendChild(img);

setTimeout(()=>{
img.remove();
},10000);

}

const start=document.getElementById("start");
const music=document.getElementById("music");

start.onclick=()=>{

music.src="https://www.youtube.com/embed/IpFX2vq8HKw?autoplay=1";

start.style.display="none";

/* start instantly */

setInterval(createMessage,1000);
setInterval(createPhoto,2300);

/* stop music after 48s */

setTimeout(()=>{

music.src="";
start.style.display="flex";

},48000);

};