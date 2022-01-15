
const categoriesItemsRef = document.querySelectorAll('#categories>li');


const logAmountCategories = function (categoriesRef) {
  console.log(`Number of categories: ${categoriesRef.length}`);
  console.log('');
}

const logItemsInfo = function (items) {
  items.forEach(element => {
    console.log(element.querySelector('h2').textContent);
    console.log(element.querySelectorAll('li').length);
    console.log('');
  });
}

logAmountCategories(categoriesItemsRef);
logItemsInfo([...categoriesItemsRef]);