var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


let totalNumber = document.querySelectorAll('.counter-text');
let getNumber = Array.from(totalNumber)

getNumber.map((viewNumber) => {
    console.log(viewNumber.dataset.number)
    let startCount = 0
    let counterUP = () => {
        startCount++
       viewNumber.innerHTML = `${startCount}`
       if(startCount == viewNumber.dataset.number){
           clearInterval(countStop)
       }
    }
    let countStop = setInterval(() => {
        counterUP()
    },13)
})


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})