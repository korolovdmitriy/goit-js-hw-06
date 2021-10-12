const descrButtonEl = document.querySelector('[data-action="decrement"]');
const incrButtonEl = document.querySelector('[data-action="increment"]');
let counterValue = 0;
const counterValueEl = document.querySelector('#value');


descrButtonEl.addEventListener('click', onDescrButtonClick);

function onDescrButtonClick() {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
}

incrButtonEl.addEventListener('click', onIncrButtonClick);

function onIncrButtonClick() {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
}
