const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

const createList = (elements) => {
  const List = elements.map((element) => {
    const listItem = document.createElement('li');
    listItem.classList.add('item');
    listItem.textContent = element;
    return listItem;
  });
  return List;
}

const ingredientsList = createList(ingredients)
ingredientsRef.append(...ingredientsList);