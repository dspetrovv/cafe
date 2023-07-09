import React, { useContext } from "react";
import FilterButton from "@/_components/Buttons/FilterButton";
import { AboutContext } from "../../AboutButton";

const FilterButtonBlock = ({ showAlert }) => {
  const { styles } = useContext(AboutContext);

  return (
    <>
      <FilterButton />
      <table className={styles['ui__about-info']}>
        <thead>
          <tr>
            <th>Параметр</th>
            <th>Назначение</th>
          </tr>
        </thead>
        <tbody>
          {/* disabled */}
          <tr>
            <td>disabled</td>
            <td>
              Задизейблить кнопку. Отключаются любые действия:
              <br />
              <FilterButton disabled />
              <strong>default:</strong> false
            </td>
          </tr>
          {/* onClick */}
          <tr>
            <td>onClick</td>
            <td>
              Действие на нажатие кнопки. Использовать только для открытия панели фильтров.
              <br />
              <FilterButton onClick={showAlert} />
              <strong>default:</strong> Никаких действий не назначено
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default FilterButtonBlock;
