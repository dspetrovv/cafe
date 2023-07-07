import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "@/_components/Dropdown";
import { ReactComponent as BasketIcon } from '@/images/basket.svg';
import Logo from '@/images/logo-mini.png'
import Button from "@/_components/Buttons/Button";
import styles from './header.module.scss';

const routes = [
  { link: '/catalog#pizza', name: 'Пицца' },
  { link: '/catalog#snacks', name: 'Закуски' },
  { link: '/catalog#drinks', name: 'Напитки' },
  { link: '/catalog#combo', name: 'Комбо' },
  { link: '/catalog#desserts', name: 'Десерты' },
];

const Header = () => {
  const navigate = useNavigate();
  const goToBracket = () => {
    navigate('/basket')
  };
  const totalPrice = 300;

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