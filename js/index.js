// Your code goes here
const boatImage = document.querySelector(".img-fluid");
console.log(boatImage);

boatImage.addEventListener("mouseenter", () => {
 boatImage.style.transform = "scale(1.2)";
 boatImage.style.transition = "all 0.3s";
});

boatImage.addEventListener('mouseleave', () => {
    boatImage.style.transform = "scale(1)";
  })


