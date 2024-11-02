// JavaScript code
const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");

// Function to create a new "No" button
function createNewNoButton() {
  const newBtnNo = document.createElement("button");
  newBtnNo.classList.add("btn", "btn-no");
  newBtnNo.innerText = "No";
  newBtnNo.style.position = "absolute"; // Ensure it's positioned absolutely
  container.appendChild(newBtnNo);

  // Randomly position the new button
  positionButton(newBtnNo);

  // Add mouseover event listener for the new button
  newBtnNo.addEventListener("mouseover", () => {
    positionButton(newBtnNo);
  });

  // Add click event listener for the new button
  newBtnNo.addEventListener("click", (e) => {
    imageOne.classList.add("hide");
    imageTwo.classList.remove("hide");
    newBtnNo.classList.add("hide");
  });
}

function positionButton(button) {
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = button.getBoundingClientRect().height;
  const btnWidth = button.getBoundingClientRect().width;

  let newTop = getRandomNumber(0, containerHeight - btnHeight);
  let newLeft = getRandomNumber(0, containerWidth - btnWidth);

  button.style.top = Math.floor(newTop) + "px";
  button.style.left = Math.floor(newLeft) + "px";
}

// Get random number function
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initial "No" button mouseover event
btnNo.addEventListener("mouseover", () => {
  positionButton(btnNo);
});

// "Yes" button click event
btnYes.addEventListener("click", (e) => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide();
});

// Initial positioning for the original "No" button
positionButton(btnNo);

// Create the initial "No" button
createNewNoButton();
