import React, { useContext } from "react";
import Checkbox from "@/_components/Checkbox/Checkbox";
import { AboutContext } from "../../AboutButton";

const CheckboxBlock = ({ showAlert }) => {
  const { styles } = useContext(AboutContext);

  return (
    <>
      <Checkbox id="main-checkbox" title="Checkbox" />
      <table className={styles['ui__about-info']}>
        <thead>
          <tr>
            <th>Параметр</th>
            <th>Назначение</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}>
              Привычный нам HTML-Checkbox
            </td>
          </tr>
          {/* initialChecked */}
          <tr>
            <td>initialChecked</td>
            <td>
              Выбрана ли изначально. Принимает <strong>true/false</strong>:
              <br />
              <strong>default:</strong> Пусто
            </td>
          </tr>
          {/* name */}
          <tr>
            <td>
              name
              <br />
              (обязательно)
            </td>
            <td>
              Обычный name атрибут.
              <br />
              <strong>default:</strong> Пусто
            </td>
          </tr>
          {/* id */}
          <tr>
            <td>
              id
              <br />
              (обязательно)
            </td>
            <td>
              Обычный id атрибут.
              <br />
              <strong>default:</strong> Пусто
            </td>
          </tr>
          {/* title */}
          <tr>
            <td>title</td>
            <td>
              Текст, который отображает чекбокс:
              <br />
              <Checkbox initialChecked id="checkbox-0" name="non-titled-checkbox" />
              <br />
              <strong>default:</strong> title
            </td>
          </tr>
          {/* onChange */}
          <tr>
            <td>
            onChange
            </td>
            <td>
              Действие при изменении:
              <br />
              <Checkbox initialChecked id="checkbox-1" name="secondary-checkboxes" title="Нажми меня" onChange={showAlert} />
              <br />
              <strong>default:</strong> Никаких действий не назначено
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CheckboxBlock;
