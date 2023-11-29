//     ********  NAV MENU  *******

const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');
const menuDisplay = document.querySelector('nav');


menuBtn.addEventListener('click', () => {
      menuDisplay.style.display = 'block';
      closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
      menuDisplay.style.display = 'none';
      closeBtn.style.display = 'none';

});

















//      *******    RANDOM JOKE GENERATOR       ********



const jokeContainer = document.getElementById('joke');
const btn = document.getElementById('btn');

const getJoke = async () => {
     jokeContainer.classList.remove('fade')

     const response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,sexist,explicit&type=single&idRange=0-300');
     const data = await response.json();
      
     jokeContainer.classList.add('fade');
     
      return jokeContainer.innerHTML = `${data.joke}`;

};

btn.addEventListener('click', getJoke);
