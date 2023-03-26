import React, { lazy, Suspense, useState } from "react";
import ProductModal from "../../_components/Modals/ProductModal";
import styles from './catalog.module.scss';
import CatalogSection from "./CatalogSection";

const FilterPanel = lazy(() => import("../../_components/Panels/FilterPanel"));

const CatalogPage = () => {
  const pizzasList = [
    { id: 1, title: 'Pizza-1', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate blanditiis nihil aspernatur quisquam dolore rerum exercitationem consequuntur ut culpa neque, corporis voluptatem eum iste veniam! Quod molestiae nobis voluptas?' },
    { id: 2, title: 'Pizza-2', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate blanditiis nihil aspernatur quisquam dolore rerum exercitationem consequuntur' }
  ];
  const [isOpenedFilter, setIsOpenedFilter] = useState(false);
  const [isOpenedProduct, setIsOpenedProduct] = useState(false);

  const toggleIsOpenFilter = (val = true) => {
    setIsOpenedFilter(val);
  };
  const toggleIsOpenProduct = (val = true) => {
    setIsOpenedProduct(val);
  };
  return (
    <>
      <CatalogSection
        list={pizzasList}
        onOpenFilter={toggleIsOpenFilter}
        onOpenProduct={toggleIsOpenProduct}
      />
      <section className={`${styles.info} ${styles['info_hidden']}`}>
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
      </section>
      <Suspense>
        <FilterPanel
          isOpen={isOpenedFilter}
          toggleIsOpen={toggleIsOpenFilter}
        />
        <ProductModal
          isOpen={isOpenedProduct}
          toggleIsOpen={toggleIsOpenProduct}
        />
      </Suspense>
    </>
  );
};

export default CatalogPage;