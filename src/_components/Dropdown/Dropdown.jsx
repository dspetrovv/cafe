import React from 'react';
import Input from '../Input';
import { ReactComponent as ArrowIcon } from '@/images/arrow.svg';
import styles from './dropdown.module.scss';
import useDropdown from './useDropdown';

const mockList = [
  { id: 1, value: 'Text-1' },
  { id: 2, value: 'Text-2' },
  { id: 3, value: 'Text-3' },
  { id: 4, value: 'Text-4' },
];

const Dropdown = ({
  isText,
  text = 'text',
  list = mockList,
  className,
  wrapperClassName,
  onSelect,
}) => {
  const isInput = !isText;
  const {
    isOpen,
    dropdownClassName,
    selected,
    wrapperRef,
    toggleOpen,
    changeValue,
  } = useDropdown({ list, styles });

  const onSelectHandler = (id) => {
    if (typeof onSelect === 'function') {
      onSelect(id);
      toggleOpen();
      return;
    }
    changeValue(id);
  };

  const Block = (
    <ul className={`${dropdownClassName}${className ? ` ${className}` : ''}`}>
      {list.map((element) => (
        <li key={element.id} onClick={() => onSelectHandler(element.id)}>
          {element.value}
        </li>
      ))}
    </ul>
  );

  const Arrow = (
    <ArrowIcon
      className={`${styles.dropdown__arrow}${
        isOpen ? ` ${styles.dropdown__arrow_down}` : ''
      }`}
      onClick={toggleOpen}
    />
  );

  if (isInput) {
    return (
      <Input
        label="Dropdown"
        Dropdown={Block}
        Icon={Arrow}
        initialValue={selected.value}
        className={wrapperClassName}
        readOnly
        onClick={toggleOpen}
      />
    );
  }
  return (
    <div className={wrapperClassName ?? styles.dropdown__text} ref={wrapperRef}>
      <span onClick={toggleOpen}>{text}</span>
      {Arrow}
      {Block}
    </div>
  );
};

export default Dropdown;
