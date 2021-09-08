const cat_result = document.querySelector('#cat_result');
const dog_result = document.querySelector('#dog_result');
const cat_btn = document.querySelector('#cat_btn');
const dog_btn = document.querySelector('#dog_btn');

cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);

const catURL = 'https://api.thecatapi.com/v1/images/search?mime_types=jpg,png';
const dogURL = 'https://dog.ceo/api/breeds/image/random';

function getRandomCat() {
    fetch(catURL)
    .then(res => res.json())
    .then(data => {
        cat_result.innerHTML = `<img src="${data[0].url}"/>`
    });
};

function getRandomDog() {
    fetch(dogURL)
    .then(res => res.json())
    .then(data => {
        dog_result.innerHTML = `<img src="${data.message}"/>`
    });
};