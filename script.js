const modalBtn = document.querySelector(".btn");
const modal = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close");

modalBtn.addEventListener("click", function() {
    modal.classList.toggle("open-modal");
});

closeBtn.addEventListener("click", function() {
    modal.classList.toggle("open-modal");
});
