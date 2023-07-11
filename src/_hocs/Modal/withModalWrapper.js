import React from 'react';
import styles from './modal.module.scss';

const withModalWrapper = (Component) => {
  return ({ ...props }) => {
    const { isOpen, toggleIsOpen } = props;
    const wrapperClassName = `${styles.modal}${!isOpen ? ` ${styles.modal_hidden}` : ``}`;
    const closeModal = () => {
      toggleIsOpen(false);
    };

    return (
      <div className={wrapperClassName} onClick={closeModal}>
        <Component {...props} />
      </div>
    );
  }
};

export default withModalWrapper;