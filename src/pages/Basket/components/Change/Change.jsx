import React from 'react';
import Radio from '@/_components/Radio';
import Input from '@/_components/Input';
import styles from './change.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { paymentSelector, updatePaymentData } from '../../basketSlice';

const Icon = <span className={styles.change__currency}>₽</span>;

const Change = ({ totalPrice }) => {
  const dispatch = useDispatch();
  const { change } = useSelector(paymentSelector);

  const onChange = (value) => {
    dispatch(updatePaymentData({ value, key: 'change' }));
  };
  const onSetChange = (sum) => {
    dispatch(updatePaymentData({ value: sum, key: 'changeSum' }));
  };

  const withoutChange = change === 'no';
  const withChange = change === 'yes';

  return (
    <div className={styles.change}>
      <Radio
        id="yes"
        title="Без сдачи"
        checked={withoutChange}
        name="change"
        value="no"
        onChange={onChange}
      />
      <Radio
        id="no"
        title="Сдача с"
        checked={withChange}
        name="change"
        value="yes"
        onChange={onChange}
      />
      {withChange && (
        <Input
          type="number"
          Icon={Icon}
          placeholder={totalPrice}
          min={totalPrice}
          onChange={onSetChange}
        />
      )}
    </div>
  );
};

export default Change;
