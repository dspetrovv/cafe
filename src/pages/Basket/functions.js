import { compareArraysByField } from "@/functions/arrayFunctions";

export const areProductsEqual = (newProduct, products) => {
  const filteredProducts = products.filter((product) => product.id === newProduct.id && product.type === newProduct.type);
  if (!filteredProducts.length) {
    return { equal: false };
  }
  const { removed: newRemovedList, added: newAddedList, dough: newDough, diameters: newDiameters } = newProduct;
  let productIdx = undefined;
  let equal = false;
  for (let i = 0; i < filteredProducts.length; i++) {
    if (
      compareArraysByField(products[i].removed, newRemovedList, 'selected')
      && compareArraysByField(products[i].added, newAddedList, 'selected')
      && compareArraysByField(products[i].dough, newDough, 'selected')
      && compareArraysByField(products[i].diameters, newDiameters, 'selected')
      ) {
        equal = true;
        productIdx = i;
        break;
      }
  }
  return {
    equal,
    productIdx
  };
}

export const convertPizzaProduct = (pizza) => {
  const convertedPizza = { ...pizza };
  convertedPizza.info = `${pizza.dough.find((d) => d.selected).title} тесто,`;
  convertedPizza.info += ` ${pizza.diameters.find((diameter) => diameter.selected).title}`;
  convertedPizza.added = pizza.optionalIngredients.filter((ingredient) => ingredient.selected);
  convertedPizza.removed = pizza.ingredients.filter((ingredient) => !ingredient.selected);
  convertedPizza.price = pizza.totalPrice;
  return convertedPizza;
};

export const getPizzaKey = (pizza) => {
  const {
    id,
    count,
    type,
    removed = [],
    added = [],
    dough,
    diameters,
  } = pizza;
  const removedKey = removed.map((element) => `${element.id}${element.selected}`).join('');
  const addedKey = added.map((element) => `${element.id}${element.selected}`).join('');
  const doughKey = dough.map((element) => `${element.id}${element.selected}`).join('');
  const diametersKey = diameters.map((element) => `${element.id}${element.selected}`).join('');
  return `${id}${type}${count}${removedKey}${addedKey}${doughKey}${diametersKey}`;
};
