import React from 'react';
import withSlider from '@/_hocs/Slider/withSlider';
import SnackCard from '@/_components/Cards/SnackCard';
import styles from '../../basket.module.scss';

const AddToOrder = ({ elements, onClick }) => {
  return (
    <>
      {elements.length &&
        withSlider(SnackCard, {
          count: elements.length > 3 ? 3 : elements.length,
          elementClassName: styles['basket__additions-element'],
          elements,
          mainClassName:
            elements.length >= 3 ? styles['basket__slider_max'] : undefined,
        })({ styles, onClick })}
    </>
  );
};

export default AddToOrder;
