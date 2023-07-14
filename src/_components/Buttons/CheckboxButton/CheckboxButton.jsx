import React, { useMemo, useState } from 'react';
import Button from '../Button';
import styles from './checkbox-button.module.scss';

const CheckboxButton = ({
  initialChecked = true,
  id,
  onChange,
  children,
  outline = false,
}) => {
  const [checked, setChecked] = useState(initialChecked);
  const [isOutline, setIsOutline] = useState(outline && initialChecked);

  const className = outline
    ? [styles['checkbox-button'], styles['checkbox-button_outline']]
    : styles['checkbox-button'];

  const white = useMemo(() => {
    if (outline) {
      return true;
    }
    return !checked;
  }, [checked, outline]);

  const onChangeHandler = () => {
    if (outline) {
      setIsOutline((prevState) => !prevState);
    }
    setChecked((prevState) => !prevState);
    onChange(id);
  };

  return (
    <Button
      white={white}
      className={className}
      onClick={onChangeHandler}
      outline={isOutline}
    >
      {children}
    </Button>
  );
};

export default CheckboxButton;
