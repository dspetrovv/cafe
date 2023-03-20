import React from "react";
import Photo from '../../../images/product.png';
import Tabs from "../../Tabs";

const ProductModal = () => {
  const tabs1 = [
    { id: 1, text: 'traditional' },
    { id: 2, text: 'thin' },
  ];
  const tabs2 = [
    { id: 1, text: '20cm' },
    { id: 2, text: '28cm' },
    { id: 3, text: '33cm' },
  ];
  return (
    <div className={['product-modal']}>
      <div className={['product-modal__photo']}>
        <img src={Photo} alt="product_photo" />
      </div>
      <div className={['product-modal__info']}>
        <h4>Title</h4>
        <Tabs tabs={tabs1} />
        <Tabs tabs={tabs2} />
      </div>
    </div>
  );
};

export default ProductModal;