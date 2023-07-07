import React, { useMemo, useState } from "react";
import Radio from "@/_components/Radio";
import Input from "@/_components/Input";
import styles from './change.module.scss';

const Icon = <span className={styles.change__currency}>₽</span>

const Change = () => {
  const [change, setChange] = useState('no');
  const onChange = (choice) => {
    setChange(choice);
  };
  const [changeSum, setChangeSum] = useState(0);
  const onSetChange = (sum) => {
    setChangeSum(sum);
  };

  const withoutChange = useMemo(() => change==='no', [change]);
  const withChange = useMemo(() => change==='yes', [change]);

  return (
    <div className={styles.change}>
      <Radio id="yes" title="Без сдачи" checked={withoutChange} name="change" value="no" onChange={onChange} />
      <Radio id="no" title="Сдача с" checked={withChange} name="change" value="yes" onChange={onChange} />
      {withChange && <Input type="number" Icon={Icon} placeholder="0" onChange={onSetChange} />}
    </div>
  );
};

export default Change;
