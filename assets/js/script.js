const burger = document.getElementById("burger");
const navModal = document.getElementById("modalNavBlock")
const navModalBlack = document.getElementById("modalNavBlack");
const galleryContainer = document.querySelectorAll(".galleryContainer")
const galleryContainerImage = document.querySelectorAll(".galleryContainerImage");
const galleryContainerText = document.querySelectorAll(".galleryContainerText");
const headerOverlay = document.getElementById("headerOverlay");
const galleryIcon1 = document.querySelectorAll(".galleryIcon1")
const galleryIcon2 = document.querySelectorAll(".galleryIcon2");
const scrollToHeader = document.querySelector(".scrollToHeader");
const header = document.getElementById("header");

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

[].forEach.call(galleryContainer,function(el){
    el.addEventListener("mouseover", AddAnimationGallery);
    el.addEventListener("mouseout", RemoveAnimationGallery);
});


window.addEventListener("load", AnimationSlider);
window.addEventListener("scroll", function() {
    if(window.scrollY >= 1000) {
        scrollToHeader.classList.add("activeScrollHeader");
    }
    if(window.scrollY <= 1000) {
        scrollToHeader.classList.remove("activeScrollHeader");
    }
})
window.addEventListener("scroll", function() {
    if(window.scrollY >= 10) {
        headerOverlay.classList.add("activityHeader")
    }
    else {
        headerOverlay.classList.remove("activityHeader")
    }

    
})

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

function AddAnimationGallery() {
    for( let i = 0; i < galleryContainer.length; i++){ 
        galleryContainerImage[i].classList.add("activeGallery");
        galleryContainerText[i].classList.add("activeGalleryText");
        galleryIcon1[i].classList.add("activityIcon");
        galleryIcon2[i].classList.add("activityIcon");
	}  
}

function RemoveAnimationGallery() {
    for( let i = 0; i < galleryContainer.length; i++){ 
        galleryContainerImage[i].classList.remove("activeGallery");
        galleryContainerText[i].classList.remove("activeGalleryText");
        galleryIcon1[i].classList.remove("activityIcon");
        galleryIcon2[i].classList.remove("activityIcon");
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
