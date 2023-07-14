import React from 'react';
import Pizza from '@/images/peperoni.png';
import Snack from '@/images/snack.png';
import NoPhoto from '@/images/no photo.png';
import Drink from '@/images/drink.png';
import Button from '@/_components/Buttons/Button';
import { getClassName } from '@/functions/classNameFunctions';
import withModalWrapper from '@/_hocs/Modal/withModalWrapper';
import productStyles from '../PizzaModal/pizza-modal.module.scss';
import { PIZZA_SECTION, SNACKS_SECTION, DRINKS_SECTION } from '@/app/constants';

const SimpleProductModal = ({ simpleProduct, isOpen, onSelectProduct }) => {
  const {
    name,
    portion,
    photo,
    description = '',
    ingredients = [],
    type,
    price,
  } = simpleProduct;

  let image = photo;

  if (!image) {
    if (type === PIZZA_SECTION.id) {
      image = Pizza;
    } else if (type === SNACKS_SECTION.id) {
      image = Snack;
    } else if (type === DRINKS_SECTION.id) {
      image = Drink;
    } else {
      image = NoPhoto;
    }
  }

  const className = `${productStyles['product-modal']}${
    !isOpen ? ` ${productStyles['product-modal_hidden']}` : ''
  }`;
  const containerClassName = getClassName(
    className,
    productStyles['product-modal_simple'],
  );
  const photoClassName = getClassName(
    productStyles['product-modal__photo'],
    productStyles['product-modal__photo_simple'],
  );
  const infoClassName = getClassName(
    productStyles['product-modal__info'],
    productStyles['product-modal__info_simple'],
  );
  const totalClassName = getClassName(
    productStyles['product-modal__info-total'],
    productStyles['product-modal__info-total_simple'],
  );

  return (
    <div className={containerClassName} onClick={(e) => e.stopPropagation()}>
      <div className={photoClassName}>
        <img src={image} alt="product_photo" />
      </div>
      <div className={infoClassName}>
        <h2>{name}</h2>
        <span>
          {description}
          {!!ingredients.length && (
            <>
              <strong>Ингредиенты:&nbsp;</strong>
              {ingredients.map((ingredient, index) => (
                <>
                  <span>{ingredient}</span>
                  {index + 1 !== ingredients.length ? ', ' : '.'}
                </>
              ))}
            </>
          )}
        </span>
        <div className={totalClassName}>
          <h2>Цена: {price} ₽</h2>
          {portion && <span>{portion}гр</span>}
          <Button onClick={onSelectProduct}>Добавить</Button>
        </div>
      </div>
    </div>
  );
};

export default withModalWrapper(SimpleProductModal);
