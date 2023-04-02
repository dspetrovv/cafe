import React from 'react';
import styles from './modal.module.scss';

const withModalWrapper = (Component) => {
  return ({ ...props }) => {
    const { isOpen, toggleIsOpen } = props;
    const wrapperClassName = `${styles.modal}${!isOpen ? ` ${styles.modal_hidden}` : ` ${styles.modal_opened}`}`;

    return (
      <div className={wrapperClassName} onClick={() => toggleIsOpen(false)}>
        <Component {...props} />
      </div>
    );
  }
};

export default withModalWrapper;