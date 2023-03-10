import React, { createElement, useState } from "react";
import Input from "../Input";
import { ReactComponent as ArrowIcon } from '../../images/arrow.svg';
import styles from './dropdown.module.scss';

const Dropdown = () => {
  const [dropdownClassName, setDropdownClassName] = useState(styles.dropdown);
  const [isOpened, setIsOpened] = useState(false);
  const [selected, setSelected] = useState({ id: -1, value: '' });
  const toggleOpen = () => {
    setIsOpened((prevState) => !prevState);
    setDropdownClassName(`${styles.dropdown}${isOpened ? ` ${styles.dropdown_open}` : ''}`)
  }
  const list = [
    { id: 1, value: 'Text-1'},
    { id: 2, value: 'Text-2'},
    { id: 3, value: 'Text-3'},
    { id: 4, value: 'Text-4'},
  ];
  const changeValue = (id) => {
    setSelected(list.find((element) => element.id === id));
    toggleOpen();
  };

  const Block =
    <ul className={dropdownClassName}>
      { list.map((element) => <li key={element.id} onClick={() => changeValue(element.id)}>{ element.value }</li>) }
    </ul>;
  const Arrow = createElement(ArrowIcon, {
    className: `${styles.dropdown__arrow}${isOpened ? ` ${styles.dropdown__arrow_down}` : ''}`,
    onClick: toggleOpen
  });
  return (
    <Input label="Dropdown" Dropdown={Block} Icon={Arrow} defaultValue={selected.value} />
  );
};

export default Dropdown;