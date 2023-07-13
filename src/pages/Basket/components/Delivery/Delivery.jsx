import React from "react";
import Input from "@/_components/Input";
import styles from './delivery.module.scss';
import { useDispatch } from "react-redux";
import { updateContactData } from "../../basketSlice";

const Delivery = () => {
  const dispatch = useDispatch();

  const onChangeStreet = (name) => {
    dispatch(updateContactData({ value: name, key: 'street' }));
  };
  const onChangeHouseNumber = (number) => {
    dispatch(updateContactData({ value: number, key: 'houseNumber' }));
  };
  const onChangeEntrance = (number) => {
    dispatch(updateContactData({ value: number, key: 'entrance' }));
  };
  const onChangeFloor = (number) => {
    dispatch(updateContactData({ value: number, key: 'floor' }));
  };
  const onChangeFlat = (number) => {
    dispatch(updateContactData({ value: number, key: 'flat' }));
  };
  const onChangeIntercomCode = (code) => {
    dispatch(updateContactData({ value: code, key: 'intercomCode' }));
  };

  return (
    <>
      <div className={styles['delivery-address']}>
        <Input wrapperClassName={styles['delivery-address__input-wrapper']} label="Улица" placeholder="Пушкина" required onChange={onChangeStreet} />
        <Input className={styles['delivery-address__short']} wrapperClassName={styles['delivery-address__input-wrapper']} label="Дом" required placeholder="1" onChange={onChangeHouseNumber} />
        <Input className={styles['delivery-address__short']} wrapperClassName={styles['delivery-address__input-wrapper']} type="number" min="1" label="Подъезд" placeholder="1" onChange={onChangeEntrance} />
        <Input className={styles['delivery-address__short']} wrapperClassName={styles['delivery-address__input-wrapper']} type="number" min="1" label="Этаж" placeholder="2" onChange={onChangeFloor} />
        <Input className={styles['delivery-address__short']} wrapperClassName={styles['delivery-address__input-wrapper']} type="number" min="1" label="Квартира" placeholder="3" onChange={onChangeFlat} />
        <Input className={styles['delivery-address__short']} wrapperClassName={styles['delivery-address__input-wrapper']} label="Домофон" placeholder="0000" onChange={onChangeIntercomCode} />
      </div>
    </>
  );
};

export default Delivery;
