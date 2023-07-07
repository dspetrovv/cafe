import React, { useState } from "react";
import Input from "@/_components/Input";
import styles from './delivery.module.scss';

const Delivery = () => {
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [entrance, setEntrance] = useState('');
  const [floor, setFloor] = useState('');
  const [flat, setFlat] = useState('');
  const [intercomCode, setIntercomCode] = useState('');

  const onChangeStreet = (name) => {
    setStreet(name);
  };
  const onChangeHouseNumber = (number) => {
    setHouseNumber(number);
  };
  const onChangeEntrance = (number) => {
    setEntrance(number);
  };
  const onChangeFloor = (number) => {
    setFloor(number);
  };
  const onChangeFlat = (number) => {
    setFlat(number);
  };
  const onChangeIntercomCode = (code) => {
    setIntercomCode(code);
  };

  return (
    <>
      <div className={styles['delivery-address']}>
        <Input wrapperClassName={styles['delivery-address__input-wrapper']} label="Улица" placeholder="Пушкина" required onChange={onChangeStreet} />
        <Input className={styles['delivery-address__short']} wrapperClassName={styles['delivery-address__input-wrapper']} label="Дом" placeholder="1" onChange={onChangeHouseNumber} />
        <Input className={styles['delivery-address__short']} wrapperClassName={styles['delivery-address__input-wrapper']} type="number" min="1" label="Подъезд" placeholder="1" onChange={onChangeEntrance} />
        <Input className={styles['delivery-address__short']} wrapperClassName={styles['delivery-address__input-wrapper']} type="number" min="1" label="Этаж" placeholder="2" onChange={onChangeFloor} />
        <Input className={styles['delivery-address__short']} wrapperClassName={styles['delivery-address__input-wrapper']} type="number" min="1" label="Квартира" placeholder="3" onChange={onChangeFlat} />
        <Input className={styles['delivery-address__short']} wrapperClassName={styles['delivery-address__input-wrapper']} label="Домофон" placeholder="0000" onChange={onChangeIntercomCode} />
      </div>
    </>
  );
};

export default Delivery;
