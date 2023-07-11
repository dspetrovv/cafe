import React, { lazy, Suspense, useEffect, useState } from "react";
import styles from './catalog.module.scss';
import CatalogSection from "./CatalogSection";
import { useDispatch } from "react-redux";
import { getPizza, getPizzaFilter, getSauce, getSnack } from "./catalogSlice";
import { PIZZA_SECTION, SAUCES_SECTION, SNACKS_SECTION } from "@/app/Header/Header";
import { usePizzaData } from "./usePizzaData";
import { useSimpleProductData } from "./useSimpleProductData";
import { useCatalogFilter } from "./useCatalogFilter";

const FilterPanel = lazy(() => import("@/_components/Panels/FilterPanel"));
const PizzaModal = lazy(() => import("@/_components/Modals/PizzaModal"));
const SimpleProductModal = lazy(() => import("@/_components/Modals/SimpleProductModal"));

const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPizza());
    dispatch(getPizzaFilter());
    dispatch(getSnack());
    dispatch(getSauce());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    pizza,
    selectedPizzaIdx,
    isOpenedPizza,
    updateIngredients,
    onSelectPizza,
    togglePizzaModal,
    updateDough,
    updateDiameter
  } = usePizzaData({ dispatch });

  const {
    snacks,
    sauces,
    selectedSimpleProduct,
    isOpenedSimpleProduct,
    onSelectSimpleProduct,
    toggleSimpleProductModal
  } = useSimpleProductData();

  const {
    pizzaFilter,
    isOpenedFilter,
    toggleIsOpenFilter,
    onToggleFilterItem,
    acceptFilterChanges,
    resetFilterChanges
  } = useCatalogFilter({ dispatch });

  const [isOpenedBottomInfo, setIsOpenedBottomInfo] = useState(false);
  const toggleBottomInfo = () => {
    setIsOpenedBottomInfo((prevState) => !prevState);
  };

  return (
    <>
      <CatalogSection
        sectionName={PIZZA_SECTION}
        list={pizza}
        withFilter
        onSelectProduct={onSelectPizza}
        onOpenFilter={toggleIsOpenFilter}
      />
      <CatalogSection
        sectionName={SNACKS_SECTION}
        list={snacks}
        onSelectProduct={onSelectSimpleProduct}
      />
      <CatalogSection
        sectionName={SAUCES_SECTION}
        list={sauces}
        onSelectProduct={onSelectSimpleProduct}
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
          filters={pizzaFilter}
          isOpen={isOpenedFilter}
          toggleIsOpen={toggleIsOpenFilter}
          onToggleItem={onToggleFilterItem}
          accept={acceptFilterChanges}
          reset={resetFilterChanges}
        />
        { !!pizza[0] &&
          <PizzaModal
            pizza={pizza[selectedPizzaIdx]}
            isOpen={isOpenedPizza}
            updateIngredients={updateIngredients}
            updateDough={updateDough}
            updateDiameter={updateDiameter}
            toggleIsOpen={togglePizzaModal}
          />
        }
        { !!selectedSimpleProduct &&
          <SimpleProductModal
            simpleProduct={selectedSimpleProduct}
            toggleIsOpen={toggleSimpleProductModal}
            isOpen={isOpenedSimpleProduct}
          />
        }
      </Suspense>
    </>
  );
};

export default CatalogPage;