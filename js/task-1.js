const categoriesList = document.querySelectorAll('.item');

console.log(`Numbers of categories: ${categoriesList.length}`);

categoriesList.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`)
});

