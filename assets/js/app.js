const leftCurtains = document.querySelector(".curtain.left");
const rightCurtains = document.querySelector(".curtain.right");

window.addEventListener("DOMContentLoaded", (e) => {
  rightCurtains.style.scale = "1.2";
  leftCurtains.style.scale = "1.2";
});

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  const styles = window.getComputedStyle(rightCurtains);
  if (scroll > 100 && scroll < 500) {
    rightCurtains.style.right = `-${scroll / 5}%`;
    leftCurtains.style.left = `-${scroll / 5}%`;
  } else if (scroll <= 99) {
    rightCurtains.style.right = `-10%`;
    leftCurtains.style.left = `-10%`;
  } else if (scroll >= 501) {
    rightCurtains.style.right = `-40%`;
    leftCurtains.style.left = `-40%`;
  }
});
