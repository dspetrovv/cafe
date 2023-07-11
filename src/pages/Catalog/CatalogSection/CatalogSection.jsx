import React from "react";
import FilterButton from "@/_components/Buttons/FilterButton";
import ProductCard from "@/_components/Cards/ProductCard";
import styles from '../catalog.module.scss';

const CatalogSection = ({
  sectionName,
  list,
  withFilter,
  onOpenFilter,
  onSelectProduct
}) => {
  const onSelectProductHandler = (id) => {
    onSelectProduct({ id, sectionName: sectionName.id })
  };

  return (
    <section className={styles.catalog}>
      <div className={styles['catalog__name']}>
        <h1 id={sectionName.id}>{ sectionName.name }</h1>
        { withFilter && <FilterButton onClick={onOpenFilter} />}
      </div>
      <div className={styles['catalog__cards']}>
        { list.map((element) =>
          <ProductCard
            key={element.id}
            id={element.id}
            name={element.name}
            info={element?.info}
            price={element.price}
            photo={element?.photo}
            onSelect={onSelectProductHandler}
          />
        ) }
      </div>
    </section>
  );
};

export default CatalogSection;