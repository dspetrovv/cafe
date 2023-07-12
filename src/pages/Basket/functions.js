import { compareArrays } from "@/functions/arrayFunctions";

export const areProductsEqual = (newProduct, products) => {
  const productIdx = products.findIndex((product) => product.id === newProduct.id && product.type === newProduct.type);
  if (productIdx === -1) {
    return { equal: false };
  }
  const { removed: removedList, added: addedList } = products[productIdx];
  const { removed: newRemovedList, added: newAddedList } = newProduct;
  return {
    equal: compareArrays(removedList, newRemovedList) && compareArrays(addedList, newAddedList),
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
