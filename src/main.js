const form = document.querySelector(".form");
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const list = document.querySelector(".list");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const inputValue = input.value;

    searchImage(inputValue)
        .then(data => createMarkup(data.hits))
        .catch(error => console.log(error))
        .finally(() => form.reset());
}

function searchImage(userValue) {

    const URL = "https://pixabay.com/api/";
    const key = 'key=43311395-53aae2d6cf7a92acb61eb4f46';

    const params = new URLSearchParams({
        q: userValue,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });

    return fetch(`${URL}?${key}&${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }
            return response.json()
        })
    // .then(response => console.log(response))

};

function createMarkup(arr) {
    const markup = arr
        .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="item">
        <a class="item-link" href="${largeImageURL}">
        <img class="item-img" src="${webformatURL}" alt="${tags}" />
        <div class="wrapper">
        <span class="span-name">Likes</span>
        <span class="span-value">${likes}</span>
        </div>
        <div class="wrapper">
        <span class="span-name">Views</span>
        <span class="span-value">${views}</span>
        </div>
        <div class="wrapper">
        <span class="span-name">Comments</span>
        <span class="span-value">${comments}</span>
        </div>
        <div class="wrapper">
        <span class="span-name">Downloads</span>
        <span class="span-value">${downloads}</span>
        </div>
        </a>
        <img>
        </li>
        `)
        .join("");
    list.innerHTML = markup;
}