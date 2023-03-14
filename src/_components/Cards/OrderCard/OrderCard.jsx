import React from "react";
import Photo from '../../../images/product.png';
import styles from '../../../css/card.module.scss';

const OrderCard = () => {
  return (
    <div className={`${styles.card} ${styles['card-order']}`}>
      <div className={styles['card-order__info']}>
        <div className={styles['card-order__info-status']}></div>
          <table>
            <tr>
              <td>
                <label>Заказ</label>
                <span>№752259</span>
              </td>
              <td>
                <label>Сумма заказа</label>
                <span>399 рублей</span>
              </td>
            </tr>
            <tr>
              <td>
                <label>Статус</label>
                <span>Обрабатываются</span>
              </td>
              <td>
                <label>Оплачено</label>
                <span>Картой</span>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <label>Адрес</label>
                <span>Ну тут какой-то адрес, замокано, чё ещё сказать</span>
              </td>
            </tr>
          </table>
      </div>
      <hr />
      <div className={styles['card-order__photos']}>
        <img src={Photo} alt="product_photo" className={styles['card-product__photo']} />
        <img src={Photo} alt="product_photo" className={styles['card-product__photo']} />
        <img src={Photo} alt="product_photo" className={styles['card-product__photo']} />
      </div>
      <hr />
      <div className={styles['card-order__repeat']}>Оплатить заказ</div>
    </div>
  );
};

export default OrderCard;