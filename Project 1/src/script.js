const menuToggle = document.querySelector(".toggle"); /*寻找class toggle*/
const showcase = document.querySelector(".showcase"); /*寻找class showcase*/

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});
