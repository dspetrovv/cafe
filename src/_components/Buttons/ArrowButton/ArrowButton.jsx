import React from "react";
import { getClassName } from "@/functions/classNameFunctions";
import { ReactComponent as ArrowIcon } from '@/images/arrow.svg';
import Button from "../Button";
import styles from './arrow-button.module.scss';

const ArrowButton = ({ direction = 'right', onClick, disabled, className }) => {
  let btnClassName = getClassName(styles['button-arrow'], styles[`button-arrow_${direction}`], className);

  return (
    <Button className={btnClassName} disabled={disabled} onClick={onClick}>
      <ArrowIcon />
    </Button>
  );
};

export default ArrowButton;