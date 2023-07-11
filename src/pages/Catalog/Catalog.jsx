import React, { lazy, Suspense, useEffect, useState } from "react";
import styles from './catalog.module.scss';
import CatalogSection from "./CatalogSection";
import { useDispatch, useSelector } from "react-redux";
import { getPizza, getSauce, getSnack, pizzaSelector, sauceSelector, snackSelector, updatePizzaDiameters, updatePizzaDough, updatePizzaIngredient } from "./catalogSlice";
import { PIZZA_SECTION, SAUCES_SECTION, SNACKS_SECTION } from "@/app/Header/Header";

const FilterPanel = lazy(() => import("@/_components/Panels/FilterPanel"));
const PizzaModal = lazy(() => import("@/_components/Modals/PizzaModal"));
const SimpleProductModal = lazy(() => import("@/_components/Modals/SimpleProductModal"));

const CatalogPage = () => {
  const dispatch = useDispatch();
  const pizza = useSelector(pizzaSelector);
  const snacks = useSelector(snackSelector);
  const sauces = useSelector(sauceSelector);
  useEffect(() => {
    dispatch(getPizza());
    dispatch(getSnack());
    dispatch(getSauce());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const [selectedPizzaIdx, setSelectedPizzaIdx] = useState(0);
  const [isOpenedFilter, setIsOpenedFilter] = useState(false);
  const [isOpenedProduct, setIsOpenedProduct] = useState(false);
  const [isOpenedBottomInfo, setIsOpenedBottomInfo] = useState(false);

  const updateIngredients = (ingredientId, isOptional) => {
    dispatch(updatePizzaIngredient({ pizzaIdx: selectedPizzaIdx, ingredientId, isOptional }));
  };

  const toggleIsOpenFilter = (val = true) => {
    setIsOpenedFilter(val);
  };
  const onSelectPizza = ({ id }) => {
    setSelectedPizzaIdx(() => pizza.findIndex((product) => product.id === id));
    setTimeout(() => {
      setIsOpenedProduct(true);
    });
  };

  const [selectedSimpleProduct, setSelectedSimpleProduct] = useState();
  const [isOpenedSimpleProduct, setIsOpenedSimpleProduct] = useState(false);

  const onSelectSimpleProduct = ({ id, sectionName }) => {
    switch (sectionName) {
      case SNACKS_SECTION.id:
        setSelectedSimpleProduct(snacks.find((snack) => snack.id === id));
        break;
      case SAUCES_SECTION.id:
        setSelectedSimpleProduct(sauces.find((sauce) => sauce.id === id))
        break;
      default:
        break;
    }
    setTimeout(() => {
      setIsOpenedSimpleProduct(true);
    });
  };
  const toggleSimpleProductModal = () => {
    setIsOpenedSimpleProduct((prevState) => !prevState);
  };

  const updateDough = (doughId) => {
    dispatch(updatePizzaDough({ pizzaIdx: selectedPizzaIdx, doughId }));
  };
  const updateDiameter = (diameterId) => {
    dispatch(updatePizzaDiameters({ pizzaIdx: selectedPizzaIdx, diameterId }));
  };

  const togglePizzaModal = () => {
    setIsOpenedProduct((prevState) => !prevState);
  };
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
          isOpen={isOpenedFilter}
          toggleIsOpen={toggleIsOpenFilter}
        />
        { !!pizza[0] &&
          <PizzaModal
            pizza={pizza[selectedPizzaIdx]}
            isOpen={isOpenedProduct}
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