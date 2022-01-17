// Zyabrev Vladislav JS

//Homework 11

//Задание 1

const products = [
  {
    name: "Iphone 12",
    brand: "Apple",
    price: 3200000,
    properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
  },
  {
    name: "Galaxy S20 Ultra",
    brand: "Samsung",
    price: 2900000,
    properties: ["120 hz screen", "Water resistance"],
  },
  {
    name: "MI 9",
    brand: "Xiaomi",
    price: 1300000,
    properties: ["Best price", "Pay less - get more!"],
  },
];

const renderList = (productsObj) => {
  const container = document.createElement("div");


  productsObj.forEach((prodObj) => {
    const prodObjContainer = document.createElement("div");
    const containerName = document.createElement("h1");
    const containerBrand = document.createElement("h2");
    const containerListProperties = document.createElement("ul");

    prodObj.properties.forEach((properties) => {
    const listItem = document.createElement('li');
    listItem.innerText = properties;
    containerListProperties.append(listItem);
  })

  containerName.innerText = prodObj.name;
  containerBrand.innerText = prodObj.brand;

  prodObjContainer.append(containerName,containerBrand,containerListProperties);
  container.append(prodObjContainer);
  })
  document.body.append(container)
}

renderList(products);



