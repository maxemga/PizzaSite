const burger = document.getElementById("burger");
const navModal = document.getElementById("modalNavBlock")
const navModalBlack = document.getElementById("modalNavBlack");
// const galleryContainer = document.querySelectorAll(".galleryContainer")
// const galleryContainerImage = document.querySelectorAll(".galleryContainerImage");
// const galleryContainerText = document.querySelectorAll(".galleryContainerText");
const headerOverlay = document.getElementById("headerOverlay");
// const galleryIcon1 = document.querySelectorAll(".galleryIcon1")
// const galleryIcon2 = document.querySelectorAll(".galleryIcon2");
const scrollToHeader = document.querySelector(".scrollToHeader");
const header = document.getElementById("header");
const counterBlock = document.querySelector(".counterBlock");

const sliderBlock = document.querySelector(".sliderBlock");
const slideImg = document.querySelectorAll(".slideContentImg")
const slideTitle = document.querySelectorAll(".slideContentTitle")
const slideText = document.querySelectorAll(".slideContentText")
const slideButton1 = document.querySelectorAll(".slideContentButton1")
const slideButton2 = document.querySelectorAll(".slideContentButton2")
const slideClickEvent = document.querySelector(".slideClickEvent");

burger.addEventListener("click", OpenNavModal);
navModalBlack.addEventListener("click", CloseModalBlock);

scrollToHeader.addEventListener("click", ScrollToHeader);


window.addEventListener("load", AnimationSlider);

window.addEventListener("scroll", ShowScrollBlock)
window.addEventListener("scroll", HideScrollBlock);

function ScrollToHeader() {
    sliderBlock.scrollIntoView({
        block: "center",
        behavior: "smooth"
    });
}

function AnimationSlider() {
    setTimeout(() => {
        CycleForSlider(slideTitle);
        setTimeout(() => {
            CycleForSlider(slideImg)
            setTimeout(() => {
                CycleForSlider(slideText)
                setTimeout(() => {
                    CycleForSlider(slideButton1)
                }, 300);
                setTimeout(() => {
                    CycleForSlider(slideButton2);
                }, 500);
            }, 300);
        }, 300);
    }, 800);
    header.classList.add("activityHeader");
}

function CycleForSlider(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.add("activeSlider");      
    }  
}  

function ShowScrollBlock() {
    if(window.pageYOffset  >= 1000) {
        scrollToHeader.classList.add("activeScrollHeader");
    }
    if(window.pageYOffset  <= 1000) {
        scrollToHeader.classList.remove("activeScrollHeader");
    }
}
function HideScrollBlock() {
    if(window.pageYOffset  >= 10) {
        headerOverlay.classList.add("activityHeader")
    }
    else {
        headerOverlay.classList.remove("activityHeader")
    }  
} 

function OpenNavModal() {
    navModal.classList.add("activeNavModal");
    navModalBlack.classList.add("activeNavBlack");
}
function CloseModalBlock() {
    navModal.classList.remove("activeNavModal");
    navModalBlack.classList.remove("activeNavBlack");
}

// let counterOffset = Offset(counterBlock).top;
// let counterHeight = counterBlock.offsetHeight; 
// let counterItemPoint = window.innerHeight - counterHeight / 2;
// if (counterHeight > window.innerHeight) {
//     counterItemPoint = window.innerHeight - window.innerHeight / 2;
// }

// Функция расчета скролла от верха страницы до объекта 
function Offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return{ top: rect.top + scrollTop, left: rect.left + scrollLeft}    
}

