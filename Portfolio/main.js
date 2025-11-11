const makeupButton = document.querySelector("#makeup_btn");
const hairStyleButton = document.querySelector("#hair_style_btn");
const boxMakeup = document.querySelector(".boxes-makeup");
const boxHairStyle = document.querySelector(".boxes-hair-style");

makeupButton.addEventListener("click", () => {
  hairStyleButton.classList.remove("toggle-selected");
  makeupButton.classList.add("toggle-selected");
  boxMakeup.classList.add("box-selected");
  boxHairStyle.classList.remove("box-selected");
});

hairStyleButton.addEventListener("click", () => {
  makeupButton.classList.remove("toggle-selected");
  hairStyleButton.classList.add("toggle-selected");
  boxHairStyle.classList.add("box-selected");
  boxMakeup.classList.remove("box-selected");
});

const viewMoreButton = document.querySelector("#view-more-button");
const optionalImage = document.querySelector("#optional");
viewMoreButton.addEventListener("click", () => {
  optionalImage.classList.remove("responsive-hidden");
});
