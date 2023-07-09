import React, { useContext } from "react";
import PriceButton from "@/_components/Buttons/PriceButton";
import { AboutContext } from "../../AboutButton";

const PriceButtonBlock = ({ showAlert }) => {
  const { styles } = useContext(AboutContext);

  return (
    <>
      <PriceButton price={'{цена}'} />
      <table className={styles['ui__about-info']}>
        <thead>
          <tr>
            <th>Параметр</th>
            <th>Назначение</th>
          </tr>
        </thead>
        <tbody>
          {/* price */}
          <tr>
            <td>
              price
              <br />
              (обязательно)
            </td>
            <td>
              Цена. Этот параметр показывается в кнопке
              <br />
              <strong>default:</strong> Пусто
            </td>
          </tr>
          {/* onClick */}
          <tr>
            <td>
              onClick
              <br />
              (обязательно)
            </td>
            <td>
              Действие на нажатие кнопки:
              <br />
              <PriceButton price={'N'} onClick={showAlert} />
              <strong>default:</strong> Никаких действий не назначено
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default PriceButtonBlock;
