import React from "react";
import Button from "../Button";
import { ReactComponent as FilterIcon } from '../../../images/filter.svg'
import styles from './filter-button.module.scss';

const FilterButton = () => {
  return (
    <Button white className={styles['button-filter']}>
      <FilterIcon /> Фильтры
    </Button>
  );
};

export default FilterButton;