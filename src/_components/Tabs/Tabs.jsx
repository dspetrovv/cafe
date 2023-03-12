import React from "react";
import Button from "../Buttons/Button";
import styles from './tabs.module.scss';

const Tabs = ({ tabs = [], onChange }) => {
  const onClickHandler = (id) => {
    onChange(id);
  };

  return (
    <div className={styles.tab}>
      { tabs.map((tab) => {
        return <Button key={tab.id} white={!tab.selected} onClick={() => onClickHandler(tab.id)}>{tab.text}</Button>
      }) }
    </div>
  );
};

export default Tabs;