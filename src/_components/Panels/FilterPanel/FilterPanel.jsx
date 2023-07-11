import React, { useCallback } from "react";
import Button from "@/_components/Buttons/Button";
import CheckboxButton from "@/_components/Buttons/CheckboxButton";
import Panel from "../Panel";
import styles from './filter-panel.module.scss';

const FilterPanel = ({
  filters = [],
  isOpen,
  toggleIsOpen,
  onToggleItem,
  accept,
  reset
}) => {
  const onToggleItemHandler = useCallback((id, filterIndex) => {
    onToggleItem(id, filterIndex);
  }, [onToggleItem]);

  const PanelBody = filters.map((filter, filterIndex) => 
    <section className={styles['filter-panel']} key={filterIndex}>
      <label>{ filter.name }</label>
      <div className={styles['filter-panel__section']}>
        { filter.items.map((item) => 
          <CheckboxButton
            id={item.id}
            initialChecked={!item.selected}
            key={`${item.id}${item.selected}`}
            onChange={(id) => onToggleItemHandler(id, filterIndex)}
          >{ item.name }</CheckboxButton>
        ) }
      </div>
    </section>
  )

  const PanelFooter = 
    <>
      <Button outline onClick={reset}>Сбросить</Button>
      <Button onClick={accept}>Применить</Button>
    </>
  return (
    <Panel
      label='Фильтры'
      body={PanelBody}
      footer={PanelFooter}
      isOpen={isOpen}
      toggleIsOpen={toggleIsOpen}
    />
  );
};

export default FilterPanel;