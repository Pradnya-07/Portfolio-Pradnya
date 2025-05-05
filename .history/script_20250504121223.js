function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let counter = 1;
showTestimonials(counter);

document.querySelector(".prev").addEventListener("click", () => {
    computeTestimonials(-1)
})

document.querySelector(".next").addEventListener("click", () => {
    computeTestimonials(1)
})

function computeTestimonials(t) {
    showTestimonials((counter += t))
}

function showTestimonials(n) {
  let i;
  let testimonials = document.getElementsByClassName("testimonial");

  if (n > testimonials.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = testimonials.length;
  }

  for( i = 0; i < testimonials.length; i++){
      testimonials[i].style.display = "none"
  }

  testimonials[counter - 1].style.display = "flex"
}




let count = 1;
showcorporate(count);

document.querySelector(".prev").addEventListener("click", () => {
    computeTestimonials(-1)
})

document.querySelector(".next").addEventListener("click", () => {
    computeTestimonials(1)
})

function computeTestimonials(t) {
  showcorporate((count += t))
}

function showcorporate(n) {
  let i;
  let testimonials = document.getElementsByClassName("corporate");

  if (n > testimonials.length) {
    count = 1;
  }
  if (n < 1) {
    count = testimonials.length;
  }

  for( i = 0; i < testimonials.length; i++){
      testimonials[i].style.display = "none"
  }

  testimonials[count - 1].style.display = "flex"
}
