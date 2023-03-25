import styles from './modal.module.scss';

const withModalWrapper = (Component) => {
  return ({ ...props }) => <div className={styles.modal}>
    <Component {...props} />
  </div>
};

export default withModalWrapper;