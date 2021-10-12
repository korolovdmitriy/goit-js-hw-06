function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('button.change-color');
const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('span.color')

buttonEl.addEventListener('click', onButtonElClick);

function onButtonElClick() {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanEl.textContent = color;
}
