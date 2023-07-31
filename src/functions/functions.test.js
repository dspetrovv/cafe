import { compareArraysByField } from "./arrayFunctions.js";
import { getClassName } from "./classNameFunctions.js";

describe('Тестирование общих функций', () => {
  test('Сравниеваем одинаковые', () => {
    expect(compareArraysByField(
      [{selected: true},{selected: true},{selected: true}],
      [{selected: true},{selected: true},{selected: true}],
      'selected')
    ).toBe(true);
  });
  test('Сравниеваем разные', () => {
    expect(compareArraysByField(
      [{selected: true},{selected: false},{selected: true}],
      [{selected: true},{selected: true},{selected: true}],
      'selected')
    ).toBe(false);
  });
  test('Получаем новое имя класса из дополнительной строки',
    () => {
      expect(getClassName('class1', 'class2')).toBe('class1 class2');
    }
  );
  test('Получаем новое имя класса из массива',
    () => {
      expect(getClassName('class1', ['class2', 'class3']))
        .toBe('class1 class2 class3');
    }
  );
  test('Получаем новое имя класса с пустым вторым параметром',
    () => {
      expect(getClassName('class1'))
        .toBe('class1');
    }
  );
});
