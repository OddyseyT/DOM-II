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


const altText = document.querySelectorAll("h2");
console.log(altText);
document.addEventListener('keydown', (event) => {
    if(event){
      console.log(event);
      altText.forEach((element) => {element.style.color = 'yellow'
      element.style.background = 'black'})
    };
  });

  document.addEventListener ('keyup', (event) => {
    if(event){
      altText.forEach((element)=>
      {element.style.color = 'black'
      element.style.background = 'white'})
    }
    });