const max = 122;
const min = 1;
const random = () => Math.floor(Math.random() * (max - min)) + min;

const createImageNode = () => {
  const container = document.createElement("figure");
  container.className = "p-4";

  const imagen = document.createElement("img");
  imagen.className = "mx-auto";
  imagen.width = "320";
  imagen.src = `https://randomfox.ca/images/${random()}.jpg`;

  container.appendChild(imagen);

  return container;
};

const mountNode = document.getElementById("images");
const addBoton = document.querySelector("button");

const addImage = () => {
  const newImage = createImageNode();
  mountNode.appendChild(newImage);
};

addBoton.addEventListener("click", addImage);
