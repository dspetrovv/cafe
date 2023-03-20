import React from "react";
import withModalWrapper from "../../../_hocs/withModalWrapper";
import Button from "../../Buttons/Button";
import CheckboxButton from "../../Buttons/CheckboxButton";
import styles from './filter-panel.module.scss';

const FilterPanel = () => {
  return (
    <div className={styles['filter-panel']}>
      <div className={styles['filter-panel__head']}>
        <h1>Фильтр</h1>
      </div>
      <div className={styles['filter-panel__body']}>
        <section>
          <label>Label</label>
          <div className={styles['filter-panel__section']}>
            <CheckboxButton text='Hit' />
          </div>
        </section>
      </div>
      <div className={styles['filter-panel__footer']}>
        <Button outline>Сбросить</Button>
        <Button>Применить</Button>
      </div>
    </div>
  );
};

export default withModalWrapper(FilterPanel);