import React, { useCallback, useContext } from 'react';
import DefaultButton from './DefaultButtonBlock';
import ArrowButtonBlock from './ArrowButtonBlock';
import CheckboxButtonBlock from './CheckboxButtonBlock';
import { AboutContext } from '../AboutButton';
import CounterButtonBlock from './CounterButtonBlock';
import FilterButtonBlock from './FilterButtonBlock';
import PriceButtonBlock from './PriceButtonBlock';
import SendButtonBlock from './SendButtonBlock';
import CheckboxBlock from './CheckboxBlock/CheckboxBlock';
import RadioButtonBlock from './RadioButtonBlock/RadioButtonBlock';

const Buttons = () => {
  const { styles } = useContext(AboutContext);

  const showAlert = useCallback(() => {
    alert('Кнопка нажата');
  }, []);
  return (
    <>
      <h3 className={styles['ui__about-component-title']}>Кнопка (Button)</h3>
      <DefaultButton showAlert={showAlert} />
      <h3 className={styles['ui__about-component-title']}>
        Кнопка со стрелкой (ArrowButton)
      </h3>
      <ArrowButtonBlock showAlert={showAlert} />
      <h3 className={styles['ui__about-component-title']}>
        Чекбокс (CheckboxButton)
      </h3>
      <CheckboxButtonBlock showAlert={showAlert} />
      <h3 className={styles['ui__about-component-title']}>
        Счётчик (CounterButton)
      </h3>
      <CounterButtonBlock />
      <h3 className={styles['ui__about-component-title']}>
        Фильтр (FilterButton)
      </h3>
      <FilterButtonBlock />
      <h3 className={styles['ui__about-component-title']}>
        Кнопка цены (PriceButton)
      </h3>
      <PriceButtonBlock showAlert={showAlert} />
      <h3 className={styles['ui__about-component-title']}>
        Кнопка "отправить" (SendButton)
      </h3>
      <SendButtonBlock showAlert={showAlert} />
      <h3 className={styles['ui__about-component-title']}>
        Чекбокс (Checkbox)
      </h3>
      <CheckboxBlock showAlert={showAlert} />
      <h3 className={styles['ui__about-component-title']}>
        Радио-кнопка (Radio)
      </h3>
      <RadioButtonBlock />
    </>
  );
};

export default Buttons;
