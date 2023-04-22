const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Варіант 1

// const list = document.querySelector("#ingredients");
// const markup = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);

// Варіант 2

// const listEl = document.querySelector("#ingredients");

// const elements = ingredients.map((ingredient) => {
//   const liEl = document.createElement("li");
//   liEl.classList.add("item");
//   liEl.textContent = ingredient;
//   return liEl;
// });

// listEl.append(...elements);

// Варіант 3

const listEl = document.querySelector("#ingredients");

const makeMarkupIngredients = (elements) => {
  return elements.map((element) => {
    const liEl = document.createElement("li");
    liEl.classList.add("item");
    liEl.textContent = element;

    return liEl;
  });
};

const markup = makeMarkupIngredients(ingredients);
listEl.append(...markup);
