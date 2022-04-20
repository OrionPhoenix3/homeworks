// Zyabrev Vladislav JS4

//Homework 19

//Задание 1

// const container = document.getElementById("container");

// const urlCountry = "https://ipapi.co/json/";

// const getCountry = async () => {
//   const response = await fetch(urlCountry);
//   const nameCountry = await response.json();
//   const { country_name, country_capital, currency } = nameCountry;
  
//   const flagCountry = await getFlag(country_name);

//   // console.log(`country_name`, country_name);
//   // console.log(`country_capital`, country_capital);
//   // console.log(`currency`, currency);

//   return {
//     country_name, country_capital, currency, flagCountry,
//   };
// }

// const getFlag = async (country_name) => {
//   const response = await fetch(`https://restcountries.com/v2/name/${country_name}`);
//   const [{flag}] = await response.json();

//   return flag;
//   // console.log(`country_name`, country_name);
//   // console.log(`country_capital`, country_capital);
//   // console.log(`currency`, currency);

// }

// const renderCountry = async () => {
//   const { country_name, country_capital, currency, flagCountry } = await getCountry();

//   const post = document.createElement("div");
//   const countryNameElem = document.createElement("h1");
//   const countryCapitalElem = document.createElement("h2");
//   const currencyElem = document.createElement("h3");
//   const flagElem = document.createElement("img");

//   post.classList.add("post");
//   flagElem.classList.add("flagElem");

//   countryNameElem.innerText = country_name;
//   countryCapitalElem.innerText = country_capital;
//   currencyElem.innerText = currency;
//   flagElem.src = flagCountry;
  
//   console.log(`country_name`, countryNameElem);
//   console.log(`country_capital`, countryCapitalElem);
//   console.log(`currency`, currencyElem);

//   post.append(countryNameElem, countryCapitalElem, currencyElem, flagElem);
//   container.append(post);
// }

// renderCountry();

//Задание 2

const characterForm = document.getElementById("characterForm");
const characterId = document.getElementById("characterId");
const container = document.getElementById("container");

const getCharacter = async (id) => {
  const response = await fetch(`https://swapi.dev/api/people/${id}`);
  const character = await response.json();
  
  renderContainer(character);
  
}

const getFilms = async (urls) => {
  const requests = urls.map((url) => fetch(url));
  const response = await Promise.all(requests);
  return Promise.all(response.map((req) => req.json()));
}

const renderContainer = (character) => {
  const {name, films: urls} = character
  const post = document.createElement("div")
  const characterElem = document.createElement("h3");
  const buttonFilm= document.createElement("button");

  post.classList.add("post");
  characterElem.innerText = name;
  buttonFilm.innerText = "Фильмы";
  buttonFilm.addEventListener("click", async () =>{
      const films = await getFilms(urls)
      renderFilms(post, films);
  });

  post.append(characterElem, buttonFilm)
  container.append(post);
}

const renderFilms = (post, films) => {
  films.forEach((film) => {
    const nameFilm = document.createElement("h4");
    nameFilm.innerText = film.title;
    post.append(nameFilm);
  });
}

const handleSubmit = (event) =>{
  event.preventDefault();

  const id = characterId.value;
  getCharacter(id);
  container.innerHTML = "";
}

characterForm.addEventListener("submit", handleSubmit);

