function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let numbersOfEl = 0;
let boxesString = '';

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');

btnCreate.addEventListener('click', onBtnCreateClick);
inputEl.addEventListener('input', onInputChange);
btnDestroy.addEventListener('click', onBtnDestroyClick)

function onInputChange(event) {
  numbersOfEl = event.currentTarget.value;
}

function onBtnCreateClick() {
  let width = 30;
  let height = 30;
  let divElArray = [];

  for (let i = 1; i <= numbersOfEl; i++) {
    const color = getRandomHexColor();
    const element = document.createElement("div");
    element.style.backgroundColor = color;
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
    divElArray.push(element);
    width += 10;
    height += 10;
  }
  
boxesEl.append(...divElArray);
}

function onBtnDestroyClick() {
  boxesEl.innerHTML = '';
}