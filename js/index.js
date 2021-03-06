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

    const changePic = document.querySelector('img');

    changePic.addEventListener('dblclick', (event) => {
      changePic.src ="img/data-driven-new-market.jpg"
    });

    changePic.addEventListener ('click', (event) => {changePic.src = "img/fun-bus.jpg"}
    );

    const chooseText = document.querySelector('body');

    chooseText.addEventListener('copy', (event) => {
      const selection = document.getSelection();
      event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
      event.preventDefault();
      window.alert(`you copied ${selection} to the clipboard`);
    });


    const changeColor = document.querySelector('body');

    window.addEventListener('resize', () => {
      changeColor.style.background = 'teal'
    });
    
    window.addEventListener('wheel', () => {
      changeColor.style.background = 'white'
    });

    const noContext = document.querySelectorAll ('img');

   noContext.forEach(image => {
     image.addEventListener('contextmenu', (event) => {
      if(event){
        noContext.forEach((element)=>
        {event.preventDefault()});
      }
      });
    });
  const contentChange = document.querySelector('.content-pick');

  contentChange.addEventListener ('click', (event) => {contentChange.style.color = 'purple'}
  );

  const destinationChange = document.querySelectorAll('.destination');

  destinationChange.forEach (destinationBox => {destinationBox.addEventListener ('click', () => {destinationBox 
    .style.color = 'teal'
    event.stopPropagation();
  });
});

  const stopLink = document.querySelector(".nav-link");
stopLink.addEventListener('click', (event) => {
  event.preventDefault();
  
});