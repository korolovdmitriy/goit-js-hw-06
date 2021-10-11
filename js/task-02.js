const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const liElements = ingredients.map(el => {
  const element = document.createElement("li");
  element.textContent = el;
  element.classList.add("item");
  return element;
})
ingredientsList.append(...liElements);
