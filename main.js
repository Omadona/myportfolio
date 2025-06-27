'use strict';

(() => {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const favoImgs = document.querySelectorAll("#favorite .favo-img img");

  favoImgs.forEach(img => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modal.classList.add("open");
    });
  });

  modal.addEventListener("click", () => {
    modal.classList.remove("open");
  });
})();


