import React, { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './catalog.module.scss';
import CatalogSection from "./CatalogSection";
import { getDessert, getDrinks, getPizza, getPizzaFilter, getSauce, getSnack, scrollingCatalogSelector, scrollPage } from "./catalogSlice";
import {
  PIZZA_SECTION,
  SAUCES_SECTION,
  SNACKS_SECTION,
  DESSERTS_SECTION,
  DRINKS_SECTION
} from "@/app/constants";
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
    dispatch(getDessert());
    dispatch(getDrinks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    pizza,
    selectedPizzaIdx,
    isOpenedPizza,
    updateIngredients,
    onOpenPizza,
    onSelectPizza,
    togglePizzaModal,
    updateDough,
    updateDiameter
  } = usePizzaData({ dispatch });

  const {
    snacks,
    sauces,
    desserts,
    drinks,
    selectedSimpleProduct,
    isOpenedSimpleProduct,
    onOpenSimpleProduct,
    onSelectSimpleProduct,
    toggleSimpleProductModal
  } = useSimpleProductData({ dispatch });

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

  const scrolling = useSelector(scrollingCatalogSelector);

  useEffect(() => {
    const scrollingElement = document.getElementById(scrolling);
    scrollingElement?.scrollIntoView({ behavior: "smooth" });
    return () => dispatch(scrollPage());
  }, [scrolling, dispatch]);

  return (
    <>
      <CatalogSection
        sectionName={PIZZA_SECTION}
        list={pizza}
        withFilter
        onSelectProduct={onOpenPizza}
        onOpenFilter={toggleIsOpenFilter}
      />
      <CatalogSection
        sectionName={SNACKS_SECTION}
        list={snacks}
        onSelectProduct={onOpenSimpleProduct}
      />
      <CatalogSection
        sectionName={SAUCES_SECTION}
        list={sauces}
        onSelectProduct={onOpenSimpleProduct}
      />
      <CatalogSection
        sectionName={DESSERTS_SECTION}
        list={desserts}
        onSelectProduct={onOpenSimpleProduct}
      />
      <CatalogSection
        sectionName={DRINKS_SECTION}
        list={drinks}
        onSelectProduct={onOpenSimpleProduct}
      />
      <section className={`${styles.info} ${isOpenedBottomInfo ? '' : styles.info_hidden}`}>
        <h1>Доставка питсы</h1>
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
            onSelectPizza={onSelectPizza}
            toggleIsOpen={togglePizzaModal}
          />
        }
        { !!selectedSimpleProduct &&
          <SimpleProductModal
            simpleProduct={selectedSimpleProduct}
            toggleIsOpen={toggleSimpleProductModal}
            onSelectProduct={onSelectSimpleProduct}
            isOpen={isOpenedSimpleProduct}
          />
        }
      </Suspense>
    </>
  );
};

export default CatalogPage;