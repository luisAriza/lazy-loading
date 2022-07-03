import { registerImage } from "./lazy";

const createImageNode = (number) => {
  const container = document.createElement("figure");
  container.className = "p-4";

  const imagen = document.createElement("img");
  imagen.dataset.src = `https://randomfox.ca/images/${number}.jpg`;
  imagen.className = "mx-auto";
  /* Para lograr el mejor resultado del lazy loading
    es importante especificar el width y el height */
  imagen.width = "400";
  imagen.height = "400";

  container.appendChild(imagen);

  return container;
};

const mountNode = document.getElementById("images");

for (let i = 1; i <= 122; i++) {
  const createImage = createImageNode(i);
  const newImage = mountNode.appendChild(createImage);
  registerImage(newImage);
}
