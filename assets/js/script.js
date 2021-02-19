const burger = document.getElementById("burger");
const navModal = document.getElementById("modalNavBlock")
const navModalBlack = document.getElementById("modalNavBlack");
const galleryContainer = document.getElementById("galleryContainer")
const galleryContainerImage = document.getElementById("galleryContainerImage");
const galleryContainerText = document.getElementById("galleryContainerText");
const headerOverlay = document.getElementById("headerOverlay");


burger.addEventListener("click", OpenNavModal);
navModalBlack.addEventListener("click", CloseModalBlock);

// galleryContainer.addEventListener("mouseover", AddAnimationGallery);
// galleryContainer.addEventListener("mouseout", RemoveAnimationGallery);

window.addEventListener("scroll", function() {
    if(window.scrollY >= 10) {
        headerOverlay.classList.add("activityHeader")
    }
    else {
        headerOverlay.classList.remove("activityHeader")
    }
})


function AddAnimationGallery() {
    galleryContainerImage.classList.add("activeGallery");
    galleryContainerText.classList.add("activeGalleryText");
}
function RemoveAnimationGallery() {
    galleryContainerImage.classList.remove("activeGallery");
    galleryContainerText.classList.remove("activeGalleryText");
}

function OpenNavModal() {
    navModal.classList.add("activeNavModal");
    navModalBlack.classList.add("activeNavBlack");
}
function CloseModalBlock() {
    navModal.classList.remove("activeNavModal");
    navModalBlack.classList.remove("activeNavBlack");
}