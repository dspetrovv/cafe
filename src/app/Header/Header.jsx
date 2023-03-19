import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PriceButton from "../../_components/Buttons/PriceButton/PriceButton";
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
    navigate('/bracket')
  };

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          { routes.map((route) =>
          <li key={route.link}>
            <Link to={route.link}>{ route.name }</Link>
          </li>
          )}
          <li>
            Ещё
          </li>
        </ul>
        <PriceButton price={0} currency='rub' onClick={goToBracket} />
      </nav>
    </header>
  );
};

export default Header;