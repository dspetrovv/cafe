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
import {
  PIZZA_SECTION,
  SAUCES_SECTION,
  SNACKS_SECTION,
  DESSERTS_SECTION,
  DRINKS_SECTION
} from "../constants";

const routes = [
  { link: `/catalog#${PIZZA_SECTION.id}`, name: PIZZA_SECTION.name },
  { link: `/catalog#${SNACKS_SECTION.id}`, name: SNACKS_SECTION.name },
  { link: `/catalog#${SAUCES_SECTION.id}`, name: SAUCES_SECTION.name },
  { link: `/catalog#${DESSERTS_SECTION.id}`, name: DESSERTS_SECTION.name },
  { link: `/catalog#${DRINKS_SECTION.id}`, name: DRINKS_SECTION.name },
];

const additionalRoutes = [
  { id: 1, value: 'О компании', route: '/about' },
  { id: 2, value: 'Соглашение', route: '/terms' },
  { id: 3, value: 'Гарантия', route: '/guarantee' },
  { id: 4, value: 'Контакты', route: '/contacts' },
  { id: 5, value: 'Поддержка', route: '/support' },
];

const Header = () => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate('/');
  };

  const goToAdditionalPage = (id) => {
    navigate(additionalRoutes.find((route) => route.id === id).route);
  };

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

  const onChangeProductCount = useCallback(({ count, product, type }) => {
    if (count === 0) {
      dispatch(removeProductFromBasket({ product, type }));
      return;
    }
    dispatch(changeCountOfProductInBasket({ product, count, type }));
  }, [dispatch]);

  return (
    <header className={styles.header}>
      <nav>
        <img src={Logo} alt="Logo" onClick={goToMainPage} />
        <ul>
          { routes.map((route) =>
            <li key={route.link}>
              <Link to={route.link}>{ route.name }</Link>
            </li>
          )}
          <li>
            <Dropdown
              isText
              text="Ещё"
              list={additionalRoutes}
              wrapperClassName={styles.more}
              onSelect={goToAdditionalPage}
            />
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