import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PriceButton from "../../_components/Buttons/PriceButton/PriceButton";

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
    <header>
      <nav>
        <ul>
          { routes.map((route) =>
          <li key={route.link}>
            <Link to={route.link}></Link>
          </li>
          )}
          <li>
            Ещё
          </li>
        </ul>
      </nav>
      <PriceButton price={0} currency='rub' onClick={goToBracket} />
    </header>
  );
};

export default Header;