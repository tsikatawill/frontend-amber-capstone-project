function changeNavBg() {
  const navbar = document.querySelector(".navbar");
  const scrollValue = window.scrollY;
  if (scrollValue < 100) {
    navbar.classList.remove("bgColor");
  } else {
    navbar.classList.add("bgColor");
  }
}

window.addEventListener("scroll", changeNavBg);

const grid = document.querySelector(".grid");

const fetchWeather = async () => {
  const results = await fetch(
    "https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=38.5&lat=-78.5"
  );
  const response = await results.json();
  const { data } = response;

  console.log(data);

  if (data) {
    return data;
  } else {
    return [];
  }
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
