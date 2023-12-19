// Navbar bg change on scroll

function changeNavBg() {
  const navbar = document.querySelector(".navbar");
  const scrollValue = window.scrollY;
  if (scrollValue < 50) {
    navbar.classList.remove("bgColor");
  } else {
    navbar.classList.add("bgColor");
  }
}

window.addEventListener("scroll", changeNavBg);

// Weather app api request

const apiKey = "1015cc3ea9a0c367c05fc006c28af981";

const searchInput = document.querySelector(".search-city input");
const searchBtn = document.querySelector(".search-city button");

const weather = async (city) => {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" +
      city +
      `&appid=${apiKey}`
  );

  if (response.status == "") {
    document.querySelector(".weather").style.display = "Input City ";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    document.querySelector(".weather").style.display = "block";
  }
};

searchBtn.addEventListener("click", () => {
  weather(searchInput.value);
});

// Form reset
const form = document.getElementsByClassName(".form");

form.addEventListener("submit", function handleSubmit(event) {
  event.preventDefault();

  form.reset();
});

const navbar = document.querySelector(".side-nav");
const menuBtns = document.querySelectorAll(".menu-icon-container");

menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle(".open");
  });
});
