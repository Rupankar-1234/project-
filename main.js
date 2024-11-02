const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");

// Function to create a new "No" button
function createNoButton() {
  const newBtnNo = document.createElement("button");
  newBtnNo.className = "btn btn-no";
  newBtnNo.innerText = "No";
  container.appendChild(newBtnNo);

  // Randomize the position of the new button
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = newBtnNo.getBoundingClientRect().height;
  const btnWidth = newBtnNo.getBoundingClientRect().width;

  const randomTop = Math.random() * (containerHeight - btnHeight);
  const randomLeft = Math.random() * (containerWidth - btnWidth);

  newBtnNo.style.position = "absolute";
  newBtnNo.style.top = Math.floor(randomTop) + "px";
  newBtnNo.style.left = Math.floor(randomLeft) + "px";

  // Add event listener to the new button
  newBtnNo.addEventListener("click", () => {
    btnYes.classList.add("hide");
    imageOne.classList.add("hide");
    imageTwo.classList.remove("hide");
  });

  // Move the button on mouseover
  newBtnNo.addEventListener("mouseover", () => {
    createNoButton(); // Create a new button on mouseover
    newBtnNo.remove(); // Remove the current button
  });
}

// Initial setup for the first "No" button
createNoButton();

btnYes.addEventListener("click", (e) => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
});
