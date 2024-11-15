// Main image
const dummyImage = document.getElementById("mainDummy");

// Body Part areas
const leftArmArea = document.getElementById("leftArm");
const rightArmArea = document.getElementById("rightArm");
const legArea = document.getElementById("legs");
const headArea = document.getElementById("head");

function changeImage(newImage) {
  dummyImage.src = newImage;
}

// Changing image when mouse hovers over dummy
leftArmArea.addEventListener("mouseover", () => changeImage("images/dummyLeftArm.jpg"));
leftArmArea.addEventListener("mouseout", () => changeImage("images/dummyBody.jpg"));

legArea.addEventListener("mouseover", () => changeImage("images/dummyLegs.jpg"));
legArea.addEventListener("mouseout", () => changeImage("images/dummyBody.jpg"));

rightArmArea.addEventListener("mouseover", () => changeImage("images/dummyRightArm.jpg"));
rightArmArea.addEventListener("mouseout", () => changeImage("images/dummyBody.jpg"));

headArea.addEventListener("mouseover", () => changeImage("images/dummyHead.jpg"));
headArea.addEventListener("mouseout", () => changeImage("images/dummyBody.jpg"));