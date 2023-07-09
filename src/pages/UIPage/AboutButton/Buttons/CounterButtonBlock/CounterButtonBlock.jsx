import React, { useContext } from "react";
import CounterButton from "@/_components/Buttons/CounterButton";
import { AboutContext } from "../../AboutButton";

const CounterButtonBlock = () => {
  const { styles } = useContext(AboutContext);
  const emptyFunction = () => {};

  return (
    <>
      <CounterButton onChange={emptyFunction} price={100} />
      <table className={styles['ui__about-info']}>
        <thead>
          <tr>
            <th>Параметр</th>
            <th>Назначение</th>
          </tr>
        </thead>
        <tbody>
          {/* initialCount */}
          <tr>
            <td>initialCount</td>
            <td>
              Изначально указанное количество.
              <br />
              <strong>default:</strong> 1
            </td>
          </tr>
          {/* disabled */}
          <tr>
            <td>disabled</td>
            <td>
              Задизейблить кнопку. Меняется стиль и отключаются любые действия: <CounterButton disabled price={100} />
              <br />
              <strong>default:</strong> false
            </td>
          </tr>
          {/* onChange */}
          <tr>
            <td>
              onChange
              <br />
              (обязательно)
            </td>
            <td>
              Действие на нажатие кнопкию Возвращает наверх:
              <br />
              <strong>price * count</strong>
              <br />
              <strong>default:</strong> Никаких действий не назначено
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CounterButtonBlock;
