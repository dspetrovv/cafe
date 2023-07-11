import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "@/_components/Dropdown";
import { ReactComponent as BasketIcon } from '@/images/basket.svg';
import Logo from '@/images/logo-mini.png'
import Button from "@/_components/Buttons/Button";
import { totalPriceSelector } from "@/pages/Basket/basketSlice";
import styles from './header.module.scss';

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
  const goToBracket = () => {
    navigate('/basket');
  };
  const totalPrice = useSelector(totalPriceSelector);

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
        <Button className={styles.header__basket} onClick={goToBracket}>
          <BasketIcon />{ totalPrice } ₽
        </Button>
      </nav>
    </header>
  );
};

export default Header;