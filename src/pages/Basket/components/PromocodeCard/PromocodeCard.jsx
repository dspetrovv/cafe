import React, { useState } from 'react';
import card from '@/css/card.module.scss';
import Input from '@/_components/Input/Input';
import SendButton from '@/_components/Buttons/SendButton';
import orderStyle from '@/_components/Panels/OrderPanel/order-panel.module.scss';
import styles from './promocode-card.module.scss';

const PromocodeCard = ({ totalPrice }) => {
  const [promocode, setPromocode] = useState('');
  const onChange = (value) => {
    setPromocode(value);
  };

  return (
    <div className={`${card.card} ${styles.promocode}`}>
      <div className={styles['promocode__input-block']}>
        <Input
          required={false}
          initialValue={promocode}
          placeholder="Промокод"
          onChange={onChange}
        />
        <SendButton />
      </div>
      <h3 className={orderStyle['order__footer-total']}>
        Итого: {totalPrice} ₽
      </h3>
    </div>
  );
};

export default PromocodeCard;
