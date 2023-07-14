import React, { useContext } from 'react';
import SendButton from '@/_components/Buttons/SendButton';
import { AboutContext } from '../../AboutButton';
import btnStyle from './send-button-block.module.scss';

const SendButtonBlock = ({ showAlert }) => {
  const { styles } = useContext(AboutContext);

  return (
    <>
      <SendButton className={btnStyle['send-button']} />
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
              Кнопка изначально имеет postiton: "absolute". Необходимо либо
              обернуть в position: "relative", либо передать класс,
              перекрывающий position: "absolute".
            </td>
          </tr>
          {/* className */}
          <tr>
            <td>className</td>
            <td>
              Дополнительный класс для кнопки.
              <br />
              <strong>default:</strong> Пусто
            </td>
          </tr>
          {/* onClick */}
          <tr>
            <td>onClick</td>
            <td>
              Действие на нажатие кнопки:
              <br />
              <SendButton
                className={btnStyle['send-button']}
                onClick={showAlert}
              />
              <strong>default:</strong> Никаких действий не назначено
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default SendButtonBlock;
