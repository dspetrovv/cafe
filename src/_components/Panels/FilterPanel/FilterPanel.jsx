import React from "react";
import Button from "../../Buttons/Button";
import CheckboxButton from "../../Buttons/CheckboxButton";
import Panel from "../Panel";
import styles from './filter-panel.module.scss';

const filters = [
  { id: 1, label: 'Общее', items: [
    { id: 1, name: 'first' },
    { id: 2, name: 'second' },
    { id: 3, name: 'third' },
    { id: 4, name: 'fourth' },
    { id: 5, name: 'fifth' },
  ] },
  { id: 1, label: 'Сыр', items: [
    { id: 1, name: 'first' },
    { id: 2, name: 'second' },
    { id: 3, name: 'third' },
    { id: 4, name: 'fourth' },
    { id: 5, name: 'fifth' },
  ] }
];

const FilterPanel = ({ isOpen, toggleIsOpen }) => {
  const PanelBody = filters.map((filter) => 
    <section className={styles['filter-panel']} key={filter.id}>
      <label>{ filter.label }</label>
      <div className={styles['filter-panel__section']}>
        { filter.items.map((item) => 
          <CheckboxButton key={item.id}>{ item.name }</CheckboxButton>
        ) }
      </div>
    </section>
  )

  const PanelFooter = 
    <>
      <Button outline>Сбросить</Button>
      <Button>Применить</Button>
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