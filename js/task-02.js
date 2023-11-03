const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients') 

ingredients.forEach(element => {
    const adition = document.createElement("li") 
    adition.classList.add('item') /*añadir una clase a la lista*/
    adition.textContent = element 
    list.append(adition) /*donde pongo el ingrediente, en este caso al final*/
});

console.log(ingredients)

