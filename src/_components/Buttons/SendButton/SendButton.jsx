import React from "react";
import { ReactComponent as SendIcon } from '@/images/send.svg';
import Button from "../Button";
import styles from './send-button.module.scss';
import { getClassName } from "@/functions/classNameFunctions";

const SendButton = (props) => {
  let className = getClassName(styles['button-send'], props?.className);
  // if (props?.className) {
  //   if (Array.isArray(props.className)) {
  //     className = [styles['button-send'], ...props.className];
  //   } else if (typeof props.className === 'string') {
  //     className += ' ' + props.className;
  //   }
  // }

  return (
    <Button className={className} {...props}>
      <SendIcon />
    </Button>
  );
};

export default SendButton;