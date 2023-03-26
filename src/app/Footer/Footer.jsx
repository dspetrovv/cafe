import React from "react";
import Logo from '../../images/logo-mini.png';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer__copyrights-block']}>
        <div className={styles['footer__copyrights-logo']}>
          <img src={Logo} alt="logo" />
          <span>
            Моя питса
          </span>
        </div>
        <div>
          Copyrigth 2023 - Моя питса
        </div>
      </div>
      <div className={styles['footer__list']}>
        <h3>Моя питса</h3>
        <ul>
          <li>О компании</li>
          <li>Пользовательское соглашение</li>
          <li>Условия гарантии</li>
        </ul>
      </div>
      <div className={styles['footer__list']}>
        <h3>Помощь</h3>
        <ul>
          <li>Ресторан</li>
          <li>Контакты</li>
          <li>Поддержка</li>
          <li>Отследить заказ</li>
        </ul>
      </div>
      <div className={styles['footer__list']}>
        <h3>Контакты</h3>
        <ul>
          <li>Телефон</li>
          <li>Адрес</li>
        </ul>
        <div className={styles['footer__socials']}></div>
      </div>
    </footer>
  );
};

export default Footer;