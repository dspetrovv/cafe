import React, { useState } from "react";
import Input from "@/_components/Input";
import styles from './contacts.module.scss';

const Contacts = () => {
  const [name, setName] = useState(); // TODO: redux user data
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const changeName = (value) => {
    setName(value);
  };

  const changePhoneNumber = (value) => {
    setPhoneNumber(value);
  };

  const changeEmail = (value) => {
    setEmail(value);
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
