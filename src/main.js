import { createMarkup } from './js/render-functions';
import { searchImage } from './js/pixabay-api';

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const list = document.querySelector(".list");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const inputValue = input.value;

    searchImage(inputValue)
        .then(data => createMarkup(data.hits, list))
        .catch(error => console.log(error))
        .finally(() => form.reset());
}



