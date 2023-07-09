import React from "react";
import Photo from '@/images/peperoni.png';
import Button from "@/_components/Buttons/Button";
import productStyles from '../ProductModal/product-modal.module.scss';
import { getClassName } from "@/functions/classNameFunctions";
import withModalWrapper from "@/_hocs/Modal/withModalWrapper";

const SimpleProductModal = ({
  name,
  portion,
  description = '',
  isOpen,
  ingredients = [],
  price
}) => {
  const className = `${productStyles['product-modal']}${!isOpen ? ` ${productStyles['product-modal_hidden']}` : ''}`;
  const containerClassName = getClassName(className, productStyles['product-modal_simple']);
  const photoClassName = getClassName(productStyles['product-modal__photo'], productStyles['product-modal__photo_simple']);
  const infoClassName = getClassName(productStyles['product-modal__info'], productStyles['product-modal__info_simple']);
  const totalClassName = getClassName(productStyles['product-modal__info-total'], productStyles['product-modal__info-total_simple']);

  return (
    <div className={containerClassName} onClick={(e) => e.stopPropagation()}>
      <div className={photoClassName}>
        <img src={Photo} alt="product_photo" />
      </div>
      <div className={infoClassName}>
        <h2>{ name }</h2>
        <span>
          { description }
          { !!ingredients.length && (
          <>
            <strong>Ингрединеты:&nbsp;</strong>
            {
              ingredients.map((ingredient, index) => (
                <>
                  <span>{ingredient}</span>{index + 1 !== ingredients.length ? ', ': '.'}
                </>
              ))
            }
          </>)
        }
        </span>
        <div className={totalClassName}>
          <h2>Цена: { price } ₽</h2>
          { portion && <span>{ portion }гр</span> }
          <Button>
            Добавить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withModalWrapper(SimpleProductModal);
