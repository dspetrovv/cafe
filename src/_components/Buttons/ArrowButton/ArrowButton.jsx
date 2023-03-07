import React from "react";
import { ReactComponent as ArrowIcon } from '../../../images/arrow.svg';
import Button from "../Button";
import styles from './arrow-button.module.scss';

const ArrowButton = ({ direction = 'left', onClick, disabled }) => {
  let className = [styles['button-arrow'], styles[`button-arrow_${direction}`]];

  return (
    <Button className={className} disabled={disabled} onClick={onClick}>
      <ArrowIcon />
    </Button>
  );
};

export default ArrowButton;