const isIntersecting = (entry) => {
  return entry.isIntersecting;
};
const loadImage = (entry) => {
  const container = entry.target;
  const imagen = container.firstChild;
  const url = imagen.dataset.src;

  imagen.src = url;

  observador.unobserve(container);
};

const observador = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (imagen) => {
  observador.observe(imagen);
};
