import styles from './modal.module.scss';

const withModalWrapper = (Component) => {
  return ({ ...props }) => {
    const { isOpen, toggleIsOpen } = props;
    const wrapperClassName = `${styles.modal}${!isOpen ? ` ${styles.modal_hidden}` : ` ${styles.modal_opened}`}`;
    // if (isOpen) {
    //   document.body.style.overflow = 'hidden';
    // } else {
    //   document.body.style.overflow = 'auto';
    // }

    return (
      <div className={wrapperClassName} onClick={() => toggleIsOpen(false)}>
        <Component {...props} />
      </div>
    );
  }
};

export default withModalWrapper;