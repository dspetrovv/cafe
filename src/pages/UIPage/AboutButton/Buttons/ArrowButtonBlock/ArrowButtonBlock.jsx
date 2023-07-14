import React, { useContext } from 'react';
import ArrowButton from '@/_components/Buttons/ArrowButton';
import { AboutContext } from '../../AboutButton';
import { getClassName } from '@/functions/classNameFunctions';

const ArrowButtonBlock = ({ showAlert }) => {
  const { styles } = useContext(AboutContext);
  const smallButtonClass = getClassName(
    styles['ui__about-info__button_small'],
    styles['ui__about-info__button-small-arrow'],
  );

  return (
    <>
      <ArrowButton>ArrowButton</ArrowButton>
      <table className={styles['ui__about-info']}>
        <thead>
          <tr>
            <th>Параметр</th>
            <th>Назначение</th>
          </tr>
        </thead>
        <tbody>
          {/* direction */}
          <tr>
            <td>direction</td>
            <td>
              Направление стрелки: <strong>up - </strong>вверх,{' '}
              <strong>down - </strong>вниз, <strong>left - </strong>влево. Без
              указания параметра стрелка направлена вправо.
              <br />
              <strong>Вверх: </strong>
              <ArrowButton
                direction="up"
                className={styles['ui__about-component']}
              />
              <strong>Вниз: </strong>
              <ArrowButton
                direction="down"
                className={styles['ui__about-component']}
              />
              <strong>Вправо: </strong>
              <ArrowButton
                direction="right"
                className={styles['ui__about-component']}
              />
              <strong>Влево: </strong>
              <ArrowButton
                direction="left"
                className={styles['ui__about-component']}
              />
              <strong>default:</strong> right
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
          {/* disabled */}
          <tr>
            <td>disabled</td>
            <td>
              Задизейблить кнопку. Меняется стиль и отключаются любые действия:{' '}
              <ArrowButton disabled className={smallButtonClass} />
              <br />
              <strong>default:</strong> false
            </td>
          </tr>
          {/* onClick */}
          <tr>
            <td>onClick</td>
            <td>
              Действие на нажатие кнопки:{' '}
              <ArrowButton className={smallButtonClass} onClick={showAlert} />
              <br />
              <strong>default:</strong> Никаких действий не назначено
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ArrowButtonBlock;
