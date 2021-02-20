const burger = document.getElementById("burger");
const navModal = document.getElementById("modalNavBlock")
const navModalBlack = document.getElementById("modalNavBlack");
const galleryContainer = document.querySelectorAll(".galleryContainer")
const galleryContainerImage = document.querySelectorAll(".galleryContainerImage");
const galleryContainerText = document.querySelectorAll(".galleryContainerText");
const headerOverlay = document.getElementById("headerOverlay");
const galleryIcon1 = document.querySelectorAll(".galleryIcon1")
const galleryIcon2 = document.querySelectorAll(".galleryIcon2");



burger.addEventListener("click", OpenNavModal);
navModalBlack.addEventListener("click", CloseModalBlock);


[].forEach.call(galleryContainer,function(el){
    el.addEventListener("mouseover", AddAnimationGallery);
    el.addEventListener("mouseout", RemoveAnimationGallery);
});


window.addEventListener("scroll", function() {
    if(window.scrollY >= 10) {
        headerOverlay.classList.add("activityHeader")
    }
    else {
        headerOverlay.classList.remove("activityHeader")
    }
})


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


// const burger = document.getElementById("burger");
// const navModal = document.getElementById("modalNavBlock")
// const navModalBlack = document.getElementById("modalNavBlack");
// const galleryContainer = document.getElementById("galleryContainer")
// const galleryContainerImage = document.getElementById("galleryContainerImage");
// const galleryContainerText = document.getElementById("galleryContainerText");
// const headerOverlay = document.getElementById("headerOverlay");



// burger.addEventListener("click", OpenNavModal);
// navModalBlack.addEventListener("click", CloseModalBlock);

// galleryContainer.addEventListener("mouseover", AddAnimationGallery);
// galleryContainer.addEventListener("mouseout", RemoveAnimationGallery);

// window.addEventListener("scroll", function() {
//     if(window.scrollY >= 10) {
//         headerOverlay.classList.add("activityHeader")
//     }
//     else {
//         headerOverlay.classList.remove("activityHeader")
//     }
// })


// function AddAnimationGallery() {
//     galleryContainerImage.classList.add("activeGallery");
//     galleryContainerText.classList.add("activeGalleryText");
// }
// function RemoveAnimationGallery() {
//     galleryContainerImage.classList.remove("activeGallery");
//     galleryContainerText.classList.remove("activeGalleryText");}

// function OpenNavModal() {
//     navModal.classList.add("activeNavModal");
//     navModalBlack.classList.add("activeNavBlack");
// }
// function CloseModalBlock() {
//     navModal.classList.remove("activeNavModal");
//     navModalBlack.classList.remove("activeNavBlack");
// }


