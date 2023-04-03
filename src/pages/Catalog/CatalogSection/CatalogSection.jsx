import React from "react";
import FilterButton from "../../../_components/Buttons/FilterButton";
import ProductCard from "../../../_components/Cards/ProductCard";
import styles from '../catalog.module.scss';

const CatalogSection = ({ list, onOpenFilter, onSelectProduct }) => {

  return (
    <section className={styles.catalog}>
      <div className={styles['catalog__name']}>
        <h1>Section name</h1>
        <FilterButton onClick={onOpenFilter} />
      </div>
      <div className={styles['catalog__cards']}>
        { list.map((element) =>
          <ProductCard
            key={element.id}
            id={element.id}
            title={element.title}
            info={element.info}
            price={element.prices}
            photo={element.photo}
            onSelect={onSelectProduct}
          />
        ) }
      </div>
    </section>
  );
};

export default CatalogSection;