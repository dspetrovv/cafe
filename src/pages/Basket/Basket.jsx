import React, { useCallback, useEffect, useMemo } from 'react';
import MiniProductCard from '@/_components/Cards/MiniProductCard';
import PromocodeCard from './components/PromocodeCard';
import AddToOrder from './components/AddToOrder';
import Contacts from './components/Contacts';
import Delivery from './components/Delivery';
import Payment from './components/Payment';
import Change from './components/Change';
import Comment from './components/Comment';
import Button from '@/_components/Buttons/Button';
import styles from './basket.module.scss';
import orderStyle from '@/_components/Panels/OrderPanel/order-panel.module.scss';
import { getClassName } from '@/functions/classNameFunctions';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductToBasket,
  basketProductsSelector,
  changeCountOfProductInBasket,
  makeOrder,
  removeProductFromBasket,
  totalPriceSelector,
} from './basketSlice';
import {
  getSauce,
  getSnack,
  sauceSelector,
  snackSelector,
} from '../Catalog/catalogSlice';
import { getPizzaKey } from './functions';
import { PIZZA_SECTION } from '@/app/constants';
import { useNavigate } from 'react-router-dom';

const Basket = () => {
  const sliderClassName = getClassName(styles.basket, styles.basket__slider);
  const totalBlockClassName = getClassName(styles.basket, styles.basket__total);

  const totalPrice = useSelector(totalPriceSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSnack());
    dispatch(getSauce());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const products = useSelector(basketProductsSelector);
  const snack = useSelector(snackSelector);
  const sauce = useSelector(sauceSelector);

  const snackElements = useMemo(() => {
    return snack.filter(
      (sn) =>
        !products.find(
          (product) => product.type === 'snack' && product.id === sn.id,
        ),
    );
  }, [snack, products]);
  const sauceElements = useMemo(() => {
    return sauce.filter(
      (sc) =>
        !products.find(
          (product) => product.type === 'sauce' && product.id === sc.id,
        ),
    );
  }, [sauce, products]);

  const onSelect = (product, type) => {
    dispatch(addProductToBasket(product, type));
  };

  const onChangeProductCount = useCallback(
    ({ count, product }) => {
      if (count === 0) {
        dispatch(removeProductFromBasket({ product }));
        return;
      }
      dispatch(changeCountOfProductInBasket({ product, count }));
    },
    [dispatch],
  );

  const navigate = useNavigate();

  const submitOrder = (e) => {
    e.preventDefault();
    dispatch(makeOrder(() => navigate('/delivery')));
  };

  if (!products.length) {
    return (
      <h1 className={styles.basket__empty}>{'Ваша корзина пока пуста :('}</h1>
    );
  }
  return (
    <>
      <section className={styles.basket}>
        <h1>Ваш заказ</h1>
        {products.map((product) => {
          let key = `${product.type}${product.id}${product.count}`;
          if (product.type === PIZZA_SECTION.id) {
            key = getPizzaKey(product);
          }
          return (
            <MiniProductCard
              key={key}
              product={product}
              className={styles.basket__card}
              onChangeCount={onChangeProductCount}
            />
          );
        })}
        <PromocodeCard totalPrice={totalPrice} />
      </section>
      <section className={sliderClassName}>
        {!!snackElements.length && (
          <>
            <h3>Добавить к заказу?</h3>
            <AddToOrder elements={snackElements} onClick={onSelect} />
          </>
        )}
        {!!sauceElements.length && (
          <>
            <h3>Соусы</h3>
            <AddToOrder elements={sauceElements} onClick={onSelect} />
          </>
        )}
      </section>
      <form onSubmit={submitOrder}>
        <section className={styles.basket}>
          <h3 className={styles.basket__title_medium}>О вас</h3>
          <Contacts />
        </section>
        <section className={styles.basket}>
          <h3 className={styles.basket__title_medium}>Доставка</h3>
          <Delivery />
        </section>
        <section className={styles.basket}>
          <h3 className={styles.basket__title_medium}>
            Оплата (при получении)
          </h3>
          <Payment />
        </section>
        <section className={styles.basket}>
          <h3 className={styles.basket__title_short}>Сдача</h3>
          <Change totalPrice={totalPrice} />
        </section>
        <section className={styles.basket}>
          <h3 className={styles.basket__title_comment}>Комментарий</h3>
          <Comment />
        </section>
        <section className={totalBlockClassName}>
          <h3 className={orderStyle['order__footer-total']}>
            Итого: {totalPrice} ₽
          </h3>
          <Button type="submit">Оформить заказ</Button>
        </section>
      </form>
    </>
  );
};

export default Basket;
