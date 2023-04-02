import React, { lazy, Suspense, useState } from "react";
import ProductModal from "../../_components/Modals/ProductModal";
import styles from './catalog.module.scss';
import CatalogSection from "./CatalogSection";
import Photo from '../../images/peperoni.png';

const FilterPanel = lazy(() => import("../../_components/Panels/FilterPanel"));

const CatalogPage = () => {
  const [products, setProducts] = useState(
    [
      {
        id: 1,
        title: 'Pizza-1',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate blanditiis nihil aspernatur quisquam dolore rerum exercitationem consequuntur ut culpa neque, corporis voluptatem eum iste veniam! Quod molestiae nobis voluptas?',
        ingredients: [
          { id: 1, name: 'Моцарелла', photo: Photo, price: '40 rub', checked: true },
          { id: 2, name: 'Моцарелла', photo: Photo, price: '40 rub', checked: true },
          { id: 3, name: 'Моцарелла', photo: Photo, price: '40 rub', checked: true },
          { id: 4, name: 'Моцарелла', photo: Photo, price: '40 rub', checked: true },
          { id: 5, name: 'Моцарелла', photo: Photo, price: '40 rub', checked: true },
          { id: 6, name: 'Моцарелла', photo: Photo, price: '41 rub', checked: true },
        ]
      },
      {
        id: 2,
        title: 'Pizza-2',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate blanditiis nihil aspernatur quisquam dolore rerum exercitationem consequuntur',
        ingredients: [
          { id: 11, name: 'Моцарелла', photo: Photo, price: '40 rub', checked: true },
          { id: 12, name: 'Моцарелла', photo: Photo, price: '40 rub', checked: true },
          { id: 13, name: 'Моцарелла', photo: Photo, price: '40 rub', checked: true },
          { id: 14, name: 'Моцарелла', photo: Photo, price: '40 rub', checked: true },
          { id: 15, name: 'Моцарелла', photo: Photo, price: '40 rub', checked: true },
          { id: 16, name: 'Моцарелла', photo: Photo, price: '42 rub', checked: true },
        ]
      }
    ]);
  const [selectedProductIdx, setSelectedProductIdx] = useState(0);
  const [isOpenedFilter, setIsOpenedFilter] = useState(false);
  const [isOpenedProduct, setIsOpenedProduct] = useState(false);
  const [isOpenedBottomInfo, setIsOpenedBottomInfo] = useState(false);

  const toggleIsOpenFilter = (val = true) => {
    setIsOpenedFilter(val);
  };
  const onSelectProduct = (id) => {
    setSelectedProductIdx(() => products.findIndex((product) => product.id === id));
    setIsOpenedProduct(true);
  };

  const toggleIsOpenProduct = (val = true) => {
    setIsOpenedProduct(val);
  };
  const toggleBottomInfo = () => {
    setIsOpenedBottomInfo((prevState) => !prevState);
  };

  return (
    <>
      <CatalogSection
        list={products}
        onSelectProduct={onSelectProduct}
        onOpenFilter={toggleIsOpenFilter}
      />
      <section className={`${styles.info} ${isOpenedBottomInfo ? '' : styles.info_hidden}`}>
        <h1>Доставка питсы в Изумрудном городе</h1>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At consequuntur illum id distinctio eum maiores quibusdam consectetur voluptatibus eligendi. Provident deleniti at asperiores? Dolores ipsa totam pariatur rerum incidunt quisquam!
        </span>
        <h4>Как сделать заказ</h4>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut perspiciatis a similique tenetur nostrum nobis eos assumenda repellendus adipisci quibusdam modi, illum voluptatum id sit eum pariatur repudiandae aperiam accusantium!
        </span>
        <h4>Зачем сделать заказ</h4>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut perspiciatis a similique tenetur nostrum nobis eos assumenda repellendus adipisci quibusdam modi, illum voluptatum id sit eum pariatur repudiandae aperiam accusantium!
        </span>
        <h4>Зачем сделать заказ</h4>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut perspiciatis a similique tenetur nostrum nobis eos assumenda repellendus adipisci quibusdam modi, illum voluptatum id sit eum pariatur repudiandae aperiam accusantium!
        </span>
        <span
          className={`${styles.info__btn} ${isOpenedBottomInfo ? styles.info__btn_close : styles.info__btn_open}`}
          onClick={toggleBottomInfo}
        >
        </span>
      </section>
      <Suspense>
        <FilterPanel
          isOpen={isOpenedFilter}
          toggleIsOpen={toggleIsOpenFilter}
        />
        <ProductModal
          ingredients={products[selectedProductIdx].ingredients}
          optionalIngredients={products[selectedProductIdx].ingredients}
          isOpen={isOpenedProduct}
          setIngredients={setProducts}
          toggleIsOpen={toggleIsOpenProduct}
          selectedProductIdx={selectedProductIdx}
        />
      </Suspense>
    </>
  );
};

export default CatalogPage;