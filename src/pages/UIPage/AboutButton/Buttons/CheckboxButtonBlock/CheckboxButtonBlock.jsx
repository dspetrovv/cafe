import React, { useContext } from 'react';
import CheckboxButton from '@/_components/Buttons/CheckboxButton';
import { AboutContext } from '../../AboutButton';

const CheckboxButtonBlock = ({ showAlert }) => {
  const { styles } = useContext(AboutContext);

  return (
    <>
      <CheckboxButton>CheckboxBtn</CheckboxButton>
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
              Необходимо учитывать неизменяемый параметр кнопки
              <br />
              max-width: "178px".
            </td>
          </tr>
          {/* children */}
          <tr>
            <td>children</td>
            <td>
              Дефолтный реактовский children. Передаём только текст.
              <br />
              <strong>default:</strong> Пусто
            </td>
          </tr>
          {/* id */}
          <tr>
            <td>id</td>
            <td>
              id кнопки. Нужно для отправки вверх по onChange
              <br />
              <strong>default:</strong> true
            </td>
          </tr>
          {/* initialChecked */}
          <tr>
            <td>initialChecked</td>
            <td>
              Выбрана ли изначально. Принимает <strong>true/false</strong>:
              <p>
                <CheckboxButton className={styles['ui__about-component']}>
                  true
                </CheckboxButton>
                <CheckboxButton
                  initialChecked={false}
                  className={styles['ui__about-component']}
                >
                  false
                </CheckboxButton>
              </p>
              <br />
              <strong>default:</strong> true
            </td>
          </tr>
          {/* onChange */}
          <tr>
            <td>onChange</td>
            <td>
              Действие на нажатие кнопки:
              <br />
              <CheckboxButton
                className={styles['ui__about-info__button_small']}
                onChange={showAlert}
              >
                Нажми меня
              </CheckboxButton>
              <strong>default:</strong> Никаких действий не назначено
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CheckboxButtonBlock;
