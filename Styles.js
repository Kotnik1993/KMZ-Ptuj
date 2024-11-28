function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("opensidebar").style.marginLeft = "250px";
  }

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("opensidebar").style.marginLeft = "0";
  }

let slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n) {
  showSlides(slideIndex += n)
}

function currentSlide(n) {
  showSlides(slideIndex = n)
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slikegalerija");
  let dots = document.getElementsByClassName("pika");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}