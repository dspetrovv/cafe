import React, { Fragment, useCallback } from 'react';
import FilterButton from '@/_components/Buttons/FilterButton';
import ProductCard from '@/_components/Cards/ProductCard';
import styles from '../catalog.module.scss';

const CatalogSection = ({
  sectionName,
  list,
  withFilter,
  onOpenFilter,
  onSelectProduct,
}) => {
  const onSelectProductHandler = useCallback(
    (id) => {
      onSelectProduct({ id, sectionName: sectionName.id });
    },
    [onSelectProduct, sectionName.id],
  );

  return (
    <section className={styles.catalog}>
      <div className={styles['catalog__name']}>
        <h1 id={sectionName.id}>{sectionName.name}</h1>
        {withFilter && <FilterButton onClick={onOpenFilter} />}
      </div>
      <div className={styles['catalog__cards']}>
        {list.map((element) => (
          <Fragment key={element.id}>
            {element.show && (
              <ProductCard
                id={element.id}
                name={element.name}
                info={element?.info}
                price={element.price}
                photo={element?.photo}
                type={element.type}
                onSelect={onSelectProductHandler}
              />
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default CatalogSection;
