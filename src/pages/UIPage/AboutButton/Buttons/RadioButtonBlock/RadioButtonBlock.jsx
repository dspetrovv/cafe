import React, { useContext, useState } from 'react';
import Radio from '@/_components/Radio/Radio';
import { AboutContext } from '../../AboutButton';

const RadioButtonBlock = () => {
  const { styles } = useContext(AboutContext);
  const [value, setValue] = useState('first');
  const switchRadioAction = (value) => {
    setValue(value);
  };

  const isFirst = value === 'first';
  const isSecond = value === 'second';

  return (
    <>
      <Radio id="main-radio-button" title="Radio button" />
      <table className={styles['ui__about-info']}>
        <thead>
          <tr>
            <th>Параметр</th>
            <th>Назначение</th>
          </tr>
        </thead>
        <tbody>
          {/* checked */}
          <tr>
            <td>
              checked
              <br />
              (обязательно)
            </td>
            <td>
              Параметр, который необходимо отправлять от родителя{' '}
              <strong>(true/false)</strong>. Переключение происходит там.
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
          {/* value */}
          <tr>
            <td>
              value
              <br />
              (обязательно)
            </td>
            <td>
              Параметр, который привязывает значение к кнопке. С помощью него
              делаем переключение <strong>checked</strong> через сравнение.
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
              <Radio checked id="checkbox-0" name="non-titled-checkbox" />
              <br />
              <strong>default:</strong> title
            </td>
          </tr>
          {/* onChange */}
          <tr>
            <td>onChange</td>
            <td>
              Действие при изменении:
              <br />
              <Radio
                checked={isFirst}
                id="radio-1"
                name="action-radio-buttons"
                title="Первый"
                value="first"
                onChange={switchRadioAction}
              />
              <br />
              <Radio
                checked={isSecond}
                id="radio-2"
                name="action-radio-buttons"
                title="Второй"
                value="second"
                onChange={switchRadioAction}
              />
              <br />
              <strong>default:</strong> Никаких действий не назначено
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default RadioButtonBlock;
