import { useRef, useState } from 'react';

const useDropdown = ({ list, styles }) => {
  const [dropdownClassName, setDropdownClassName] = useState(styles.dropdown);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({ id: -1, value: '' });
  const wrapperRef = useRef(null);

  const closeDropdown = (e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setIsOpen(false);
      setDropdownClassName(`${styles.dropdown}`);
    }
    window.removeEventListener('mousedown', closeDropdown);
  };

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
    setDropdownClassName(
      `${styles.dropdown}${!isOpen ? ` ${styles.dropdown_open}` : ''}`,
    );
    if (!isOpen) {
      window.addEventListener('mousedown', closeDropdown);
    }
  };

  const changeValue = (id) => {
    setSelected(list.find((element) => element.id === id));
    toggleOpen();
  };

  return {
    isOpen,
    dropdownClassName,
    selected,
    wrapperRef,
    toggleOpen,
    changeValue,
  };
};

export default useDropdown;
