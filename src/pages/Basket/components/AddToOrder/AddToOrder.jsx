import React from "react";
import withSlider from "@/_hocs/Slider/withSlider";
import SnackCard from "@/_components/Cards/SnackCard";
import styles from '../../basket.module.scss';

const AddToOrder = () => {
  const elements = [{ id: 1 },{ id: 2 },{ id: 3 },{ id: 4 },{ id: 5 },{ id: 6 },{ id: 7 }];
  return (
    <>
      {withSlider(
    SnackCard,
      {
        count: 3,
        elementClassName: styles['basket__additions-element'],
        elements,
      }
    )
  ({ styles })}
    </>
  );
};

export default AddToOrder;
