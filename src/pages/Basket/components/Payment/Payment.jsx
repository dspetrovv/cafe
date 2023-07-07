import React, { useMemo, useState } from "react";
import Radio from "@/_components/Radio";
import styles from './payment.module.scss';

const Payment = () => {
  const [method, setMethod] = useState('cash');
  const onChange = (method) => {
    setMethod(method);
  };

  const isCash = useMemo(() => method==='cash', [method]);
  const isCard = useMemo(() => method==='card', [method]);

  return (
    <div className={styles.payment}>
      <Radio id="cash" title="Наличными" checked={isCash} name="payment" value="cash" onChange={onChange} />
      <Radio id="card" title="Картой" checked={isCard} name="payment" value="card" onChange={onChange} />
    </div>
  );
};

export default Payment;
