import { areProductsEqual, convertPizzaProduct, getPizzaKey } from "./functions";

const mock_product = {
  id: 1,
  type: "pizza",
  info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate blanditiis nihil aspernatur quisquam dolore rerum exercitationem consequuntur",
  ingredients: [
    { id: 12, name: "Моцарелла", selected: true },
    { id: 21, name: "Сырокопчёная колбаса", selected: true },
    { id: 315, name: "Перец чили", selected: true },
    { id: 38, name: "Томаты", selected: true },
    { id: 36, name: "Орегано", selected: true },
    { id: 31, name: "Сушёный базелик", selected: true },
    { id: 39, name: "Чеснок", selected: true }
  ],
  optionalIngredients: [
    { id: 12, name: "Моцарелла", price: 30, selected: true },
    { id: 21, name: "Сырокопчёная колбаса", price: 30, selected: true },
    { id: 315, name: "Перец чили", price: 30, selected: true },
    { id: 38, name: "Томаты", price: 30, selected: true },
    { id: 36, name: "Орегано", price: 30, selected: true },
    { id: 31, name: "Сушёный базелик", price: 30, selected: true },
    { id: 39, name: "Чеснок", price: 30, selected: true }
  ],
  added: [
    { id: 12, name: "Моцарелла", selected: true },
    { id: 21, name: "Сырокопчёная колбаса", selected: true },
    { id: 31, name: "Сушёный базелик", selected: true },
    { id: 39, name: "Чеснок", selected: true }
  ],
  removed: [
    { id: 12, name: "Моцарелла", price: 30, selected: true },
    { id: 21, name: "Сырокопчёная колбаса", price: 30, selected: true },
  ],
  dough: [
    { id: 1, title: "Традиционное", selected: true },
    { id: 2, title: "Тонкое", selected: false }
  ],
  diameters: [
    { id: 1, title: "20см", selected: true },
    { id: 2, title: "28см", selected: false },
    { id: 3, title: "33см", selected: false }
  ],
  price: [200, 400, 500],
  weight: [300, 400, 500]
};

const mock_product_2 = {
  id: 2,
  type: "pizza",
  info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate blanditiis nihil aspernatur quisquam dolore rerum exercitationem consequuntur",
  ingredients: [
    { id: 12, name: "Моцарелла", selected: true },
    { id: 21, name: "Сырокопчёная колбаса", selected: true },
    { id: 315, name: "Перец чили", selected: true },
    { id: 38, name: "Томаты", selected: true },
    { id: 36, name: "Орегано", selected: true },
    { id: 31, name: "Сушёный базелик", selected: true },
    { id: 39, name: "Чеснок", selected: false }
  ],
  optionalIngredients: [
    { id: 12, name: "Моцарелла", price: 30, selected: false },
    { id: 21, name: "Сырокопчёная колбаса", price: 30, selected: false },
    { id: 315, name: "Перец чили", price: 30, selected: false },
    { id: 38, name: "Томаты", price: 30, selected: false },
    { id: 36, name: "Орегано", price: 30, selected: false },
    { id: 31, name: "Сушёный базелик", price: 30, selected: true },
    { id: 39, name: "Чеснок", price: 30, selected: false }
  ],
  dough: [
    { id: 1, title: "Традиционное", selected: true },
    { id: 2, title: "Тонкое", selected: false }
  ],
  diameters: [
    { id: 1, title: "20см", selected: true },
    { id: 2, title: "28см", selected: false },
    { id: 3, title: "33см", selected: false }
  ],
  count: 2,
  totalPrice: 100
};

describe('Тестирование корзины товаров', () => {
  test('Одинаковые ли товары', () => {
    expect(areProductsEqual(mock_product, [mock_product]))
      .toEqual({ equal: true, productIdx: 0});
  });
  test('Преобразование пиццы к нужному формату', () => {
    expect(convertPizzaProduct(mock_product_2))
      .toEqual({
        ...mock_product_2,
        info: 'Традиционное тесто, 20см',
        added: [
          { id: 31, name: "Сушёный базелик", price: 30, selected: true }
        ],
        removed: [
          { id: 39, name: "Чеснок", selected: false }
        ],
        price: mock_product_2.totalPrice
      })
  });
  test('Создание ключа пиццы', () => {
    expect(getPizzaKey(mock_product_2))
      .toBe('2pizza21true2false1true2false3false');
  });
});
