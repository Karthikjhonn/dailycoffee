let menuBar=document.querySelector(".menu-bar");
let navList=document.querySelector("header ul");
menuBar.addEventListener("click",dropDown);
function dropDown(){
    navList.classList.toggle("list-active");
};
//slide bar
indexNum=0;
let slides=document.querySelectorAll(".slider-img img");
let leftArrow=document.getElementById("left-arrow");
let rightArrow=document.getElementById("right-arrow");
let totalSlide=slides.length;
leftArrow.addEventListener("click",leftSlide);
rightArrow.addEventListener("click",rightSlide);

function slideUpdate(){
    slides.forEach((slideImg)=>{
        slideImg.classList.remove("active");  
        slideImg.classList.add("hidden");
    });
    slides[indexNum].classList.add("active");
}
function rightSlide(){
    if(indexNum==totalSlide-1){
        indexNum=0
    }
    else{
        indexNum++
    }
    slideUpdate()   
}
function leftSlide(){
    if(indexNum==0){
        indexNum=totalSlide-1
    }
    else{
        indexNum--
    }
    slideUpdate()
}
setInterval(leftSlide,4000)

//navegation 
let navegation=document.getElementById("navegation");
document.addEventListener("scroll",actionTop);
function actionTop(){
    navegation.style.opacity="1"
};


