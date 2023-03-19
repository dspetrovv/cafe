import React from "react";
import FilterButton from "../../_components/Buttons/FilterButton";
import ProductCard from "../../_components/Cards/ProductCard";
import styles from './catalog.module.scss';

const CatalogPage = () => {
  const pizzasList = [
    { id: 1, title: 'Pizza-1', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate blanditiis nihil aspernatur quisquam dolore rerum exercitationem consequuntur ut culpa neque, corporis voluptatem eum iste veniam! Quod molestiae nobis voluptas?' },
    { id: 2, title: 'Pizza-2', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptate blanditiis nihil aspernatur quisquam dolore rerum exercitationem consequuntur' }
  ];
  return (
    <>
      <section className={styles.catalog}>
        <div className={styles['catalog__name']}>
          <h1>Section name</h1>
          <FilterButton />
        </div>
        <div className={styles['catalog__cards']}>
          { pizzasList.map((element) =>
            <ProductCard key={element.id} title={element.title} info={element.info} price={300} />
          ) }
        </div>
      </section>
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
    </>
  );
};

export default CatalogPage;