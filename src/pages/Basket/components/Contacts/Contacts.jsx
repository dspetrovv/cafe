import React from "react";
import Input from "@/_components/Input";
import styles from './contacts.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { contactSelector, updateContactData } from "../../basketSlice";

const Contacts = () => {
  const dispatch = useDispatch();
  const {
    name,
    phoneNumber,
    email
  } = useSelector(contactSelector);

  const changeName = (value) => {
    dispatch(updateContactData({ value, key: 'name' }));
  };

  const changePhoneNumber = (value) => {
    dispatch(updateContactData({ value, key: 'phone' }));
  };

  const changeEmail = (value) => {
    dispatch(updateContactData({ value, key: 'email' }));
  };

  return (
    <div className={styles.contacts}>
      <Input initialValue={name} placeholder='Алексей' label="Имя" required onChange={changeName} />
      <Input initialValue={phoneNumber} phone label="Номер телефона" placeholder='+7(900)000-00-00' required onChange={changePhoneNumber} />
      <Input initialValue={email} type="email" label="Почта" placeholder='mail@mail.ru' onChange={changeEmail} />
    </div>
  );
};

export default Contacts;
