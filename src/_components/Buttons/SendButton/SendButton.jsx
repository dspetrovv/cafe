import React from 'react';
import { ReactComponent as SendIcon } from '@/images/send.svg';
import Button from '../Button';
import styles from './send-button.module.scss';
import { getClassName } from '@/functions/classNameFunctions';

const SendButton = ({ className: propsClassName, ...otherProps }) => {
  let className = getClassName(styles['button-send'], propsClassName);

  return (
    <Button className={className} {...otherProps}>
      <SendIcon />
    </Button>
  );
};

export default SendButton;
