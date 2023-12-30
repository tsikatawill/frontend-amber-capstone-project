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
const searchForm = document.querySelector(".search-city");
const weatherDetails = document.querySelector(".weather-details");
const city = document.querySelector(".city");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const errorMsg = document.querySelector(".error-msg");

const weather = async (cityName) => {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" +
      cityName +
      `&appid=${apiKey}`
  );

  if (response.ok) {
    var data = await response.json();

    weatherDetails.style.display = "block";
    city.innerHTML = data.name;
    temperature.innerHTML = Math.round(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/hr";
    errorMsg.style.display = "none";
  } else {
    weatherDetails.style.display = "none";
    errorMsg.style.display = "block";
    errorMsg.innerHTML = "City not found";
  }
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (searchInput.value.trim() === "") {
    weatherDetails.style.display = "none";
    errorMsg.style.display = "block";
    errorMsg.innerHTML = "Enter a city";
  } else {
    errorMsg.style.display = "none";
    weatherDetails.style.display = "block";
    weather(searchInput.value);
  }
});

// Form reset
const form = document.getElementsByClassName(".contact-form");

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
