import React from 'react';
import Logo from '@/images/logo-mini.png';
import styles from './footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__info}>
        <div className={styles['footer__copyrights-block']}>
          <div className={styles['footer__copyrights-logo']}>
            <img src={Logo} alt="logo" />
            <span>Моя питса</span>
          </div>
          <div>© Copyrigth 2023 - Моя питса</div>
        </div>
        <div className={styles['footer__list']}>
          <h3>Моя питса</h3>
          <ul>
            <li>
              <Link to="/about">О компании</Link>
            </li>
            <li>
              <Link to="/terms">Пользовательское соглашение</Link>
            </li>
            <li>
              <Link to="/guarantee">Условия гарантии</Link>
            </li>
          </ul>
        </div>
        <div className={styles['footer__list']}>
          <h3>Помощь</h3>
          <ul>
            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
            <li>
              <Link to="/support">Поддержка</Link>
            </li>
          </ul>
        </div>
        <div className={styles['footer__list']}>
          <h3>Контакты</h3>
          <ul>
            <li>+7(999)752-25-9</li>
            <li>г. Москва, ул. Ленина, д. -1</li>
          </ul>
          <div className={styles['footer__socials']}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
