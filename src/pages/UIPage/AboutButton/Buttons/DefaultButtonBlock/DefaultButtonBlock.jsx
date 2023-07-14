import React, { useContext } from 'react';
import Button from '@/_components/Buttons/Button';
import { AboutContext } from '../../AboutButton';

const DefaultButtonBlock = ({ showAlert }) => {
  const { styles } = useContext(AboutContext);

  return (
    <>
      <Button className={styles['ui__about-component']}>Button</Button>
      <table className={styles['ui__about-info']}>
        <thead>
          <tr>
            <th>Параметр</th>
            <th>Назначение</th>
          </tr>
        </thead>
        <tbody>
          {/* children */}
          <tr>
            <td>children</td>
            <td>
              Дефолтный реактовский children. Может быть JSX-элементом, может
              быть текстом.
              <br />
              <strong>default:</strong> Пусто
            </td>
          </tr>
          {/* outline */}
          <tr>
            <td>outline</td>
            <td>
              Меняет стиль кнопки на{' '}
              <Button
                outline
                className={styles['ui__about-info__button_small']}
              >
                Outline
              </Button>
              <br />
              <strong>default:</strong> false
            </td>
          </tr>
          {/* white */}
          <tr>
            <td>white</td>
            <td>
              Меняет стиль кнопки на{' '}
              <Button white className={styles['ui__about-info__button_small']}>
                White
              </Button>
              <br />
              <strong>default:</strong> false
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
          {/* isLoading */}
          <tr>
            <td>isLoading</td>
            <td>
              <div className={styles['ui__about-info__button-loader-block']}>
                Значение для показа индикатора загрузки:{' '}
                <Button
                  isLoading
                  className={styles['ui__about-info__button_small']}
                />
              </div>
              <strong>default:</strong> false
            </td>
          </tr>
          {/* disabled */}
          <tr>
            <td>disabled</td>
            <td>
              Задизейблить кнопку. Меняется стиль и отключаются любые действия:{' '}
              <Button
                disabled
                className={styles['ui__about-info__button_small']}
              >
                Disabled
              </Button>
              <br />
              <strong>default:</strong> false
            </td>
          </tr>
          {/* onClick */}
          <tr>
            <td>onClick</td>
            <td>
              Действие на нажатие кнопки:{' '}
              <Button
                className={styles['ui__about-info__button_small']}
                onClick={showAlert}
              >
                Нажми меня
              </Button>
              <br />
              <strong>default:</strong> Никаких действий не назначено
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default DefaultButtonBlock;
