// const about = document.querySelector(".about-title");
// function setTransition() {
//   about.style.animation = "scroll-left 8s linear infinite";
//   about.style.animation();
// }

// about.addEventListener("scroll", setTransition);

const scrollElement = document.getElementById("scrollIndicator");

const maxHeight = window.document.body.scrollHeight - window.innerHeight;

function topScrollIndicator(e) {
  const percentage = (window.scrollY / maxHeight) * 100;

  scrollElement.style.width = percentage + "%";
}

window.addEventListener("scroll", topScrollIndicator);
