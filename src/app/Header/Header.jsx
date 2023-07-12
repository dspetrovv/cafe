import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "@/_components/Dropdown";
import { ReactComponent as BasketIcon } from '@/images/basket.svg';
import Logo from '@/images/logo-mini.png'
import Button from "@/_components/Buttons/Button";
import OrderPanel from "@/_components/Panels/OrderPanel/OrderPanel";
import styles from './header.module.scss';
import {
  totalPriceSelector,
  basketProductsSelector,
  changeCountOfProductInBasket,
  removeProductFromBasket
} from "@/pages/Basket/basketSlice";

export const PIZZA_SECTION = { id: "pizza", name: "Пицца" };
export const SNACKS_SECTION = { id: "snacks", name: "Закуски" };
export const SAUCES_SECTION = { id: "sauces", name: "Соусы" };

const routes = [
  { link: `/catalog#${PIZZA_SECTION.id}`, name: PIZZA_SECTION.name },
  { link: `/catalog#${SNACKS_SECTION.id}`, name: SNACKS_SECTION.name },
  { link: `/catalog#drinks`, name: SAUCES_SECTION.name },
  { link: `/catalog#${SAUCES_SECTION.id}`, name: 'Комбо' },
  { link: `/catalog#desserts`, name: 'Десерты' },
];

const Header = () => {
  const navigate = useNavigate();
  const totalPrice = useSelector(totalPriceSelector);

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector(basketProductsSelector);

  const toggleIsOpen = (val = true) => {
    if (products.length || val === false) {
      setIsOpen(val);
    } else {
      navigate('/basket');
    }
  };

  const onChangeProductCount = useCallback(({ count, productId }) => {
    if (count === 0) {
      dispatch(removeProductFromBasket({ productId }));
      return;
    }
    dispatch(changeCountOfProductInBasket({ productId, count }));
  }, [dispatch]);

  return (
    <header className={styles.header}>
      <nav>
        <img src={Logo} alt="Logo" />
        <ul>
          { routes.map((route) =>
            <li key={route.link}>
              <Link to={route.link}>{ route.name }</Link>
            </li>
          )}
          <li>
            <Dropdown isText text="Ещё" wrapperClassName={styles.more} />
          </li>
        </ul>
        <Button className={styles.header__basket} onClick={toggleIsOpen}>
          <BasketIcon />{ totalPrice } ₽
        </Button>
        <OrderPanel
          products={products}
          totalPrice={totalPrice}
          isOpen={isOpen}
          toggleIsOpen={toggleIsOpen}
          onChangeProductCount={onChangeProductCount}
        />
      </nav>
    </header>
  );
};

export default Header;