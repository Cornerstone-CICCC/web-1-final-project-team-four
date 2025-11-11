const makeupButton = document.querySelector("#makeup_btn");
const hairStyleButton = document.querySelector("#hair_style_btn");
const boxMakeup = document.querySelector(".boxes-makeup");
const boxHairStyle = document.querySelector(".boxes-hair-style");
const viewMoreButton = document.querySelector("#view-more-button");
const optionalImage = document.querySelectorAll("#optional");

makeupButton.addEventListener("click", () => {
  hairStyleButton.classList.remove("toggle-selected");
  makeupButton.classList.add("toggle-selected");
  boxMakeup.classList.add("box-selected");
  boxHairStyle.classList.remove("box-selected");
  optionalImage.forEach((element) => {
    element.classList.add("responsive-hidden");
  });
  viewMoreButton.textContent = "View More";
});

hairStyleButton.addEventListener("click", () => {
  makeupButton.classList.remove("toggle-selected");
  hairStyleButton.classList.add("toggle-selected");
  boxHairStyle.classList.add("box-selected");
  boxMakeup.classList.remove("box-selected");
  optionalImage.forEach((element) => {
    element.classList.add("responsive-hidden");
  });
  viewMoreButton.textContent = "View More";
});

viewMoreButton.addEventListener("click", () => {
  if (viewMoreButton.textContent === "View More") {
    optionalImage.forEach((element) => {
      element.classList.remove("responsive-hidden");
    });
    viewMoreButton.classList.add("action");
    viewMoreButton.textContent = "View Less";
  } else if (viewMoreButton.textContent === "View Less") {
    optionalImage.forEach((element) => {
      element.classList.add("responsive-hidden");
    });
    viewMoreButton.textContent = "View More";
    viewMoreButton.classList.remove("action");
  }
});
