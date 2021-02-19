const burger = document.getElementById("burger");
const navModal = document.getElementById("modalNavBlock")

burger.addEventListener("click", OpenNavModal);

function OpenNavModal() {
    navModal.classList.toggle("activeNavModal");
}