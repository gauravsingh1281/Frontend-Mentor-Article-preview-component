const shareIcons = document.querySelectorAll(".share");
const iconDisplay = document.querySelector(".share-icons");

function handleClick() {
  iconDisplay.classList.toggle("hidden");
  document.getElementsByClassName("share-img")[0].classList.toggle("onhover");
  document.getElementsByClassName("share-img")[1].classList.toggle("onhover");
  document.getElementsByClassName("share")[0].classList.toggle("onhoverbg");
  document.getElementsByClassName("share")[1].classList.toggle("mobile-hover-bg");
  
}

shareIcons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
