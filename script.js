document.addEventListener("DOMContentLoaded", () => {

const btn = document.querySelector("button");

if(btn){
btn.addEventListener("click", () => {
window.location.href="news.html";
});
}

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{
card.addEventListener("mouseenter",()=>{
card.style.boxShadow="0 0 25px #38bdf8";
});

card.addEventListener("mouseleave",()=>{
card.style.boxShadow="none";
});
});

});
