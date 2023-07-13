import React from "react";
import Radio from "@/_components/Radio";
import styles from './payment.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { paymentSelector, updatePaymentData } from "../../basketSlice";

const Payment = () => {
  const dispatch = useDispatch();
  const { method } = useSelector(paymentSelector);

  const onChange = (value) => {
    dispatch(updatePaymentData({ value, key: 'method' }));
  };

  const isCash = method === 'cash';
  const isCard = method === 'card';

  return (
    <div className={styles.payment}>
      <Radio id="cash" title="Наличными" checked={isCash} name="payment" value="cash" onChange={onChange} />
      <Radio id="card" title="Картой" checked={isCard} name="payment" value="card" onChange={onChange} />
    </div>
  );
};

export default Payment;
