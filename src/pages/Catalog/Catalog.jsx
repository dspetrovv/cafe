import React, { lazy, Suspense, useEffect, useState } from "react";
import styles from './catalog.module.scss';
import CatalogSection from "./CatalogSection";
import { useDispatch, useSelector } from "react-redux";
import { getPizza, getSauce, getSnack, pizzaSelector, sauceSelector, snackSelector, updatePizzaIngredient } from "./catalogSlice";

const FilterPanel = lazy(() => import("@/_components/Panels/FilterPanel"));
const ProductModal = lazy(() => import("@/_components/Modals/ProductModal"));
const SimpleProductModal = lazy(() => import("@/_components/Modals/SimpleProductModal"));

const PIZZA_SECTION = "Пицца";
const SNACKS_SECTION = "Закуски";
const SAUCES_SECTION = "Соусы";

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
  const isSomeProductLoaded = snacks.length || sauces.length;

  const [selectedProductIdx, setSelectedProductIdx] = useState(0);
  const [isOpenedFilter, setIsOpenedFilter] = useState(false);
  const [isOpenedProduct, setIsOpenedProduct] = useState(false);
  const [isOpenedBottomInfo, setIsOpenedBottomInfo] = useState(false);

  const updateIngredients = (ingredientId, isOptional) => {
    dispatch(updatePizzaIngredient({ pizzaIdx: selectedProductIdx, ingredientId, isOptional }));
  };

  const toggleIsOpenFilter = (val = true) => {
    setIsOpenedFilter(val);
  };
  const onSelectProduct = ({ id }) => {
    setSelectedProductIdx(() => pizza.findIndex((product) => product.id === id));
    setTimeout(() => {
      setIsOpenedProduct(true);
    });
  };

  const [selectedSimpleProduct, setSelectedSimpleProduct] = useState();
  const [isOpenedSimpleProduct, setIsOpenedSimpleProduct] = useState(false);

  const onSelectSimpleProduct = ({ id, sectionName }) => {
    switch (sectionName) {
      case SNACKS_SECTION:
        setSelectedSimpleProduct(snacks.find((snack) => snack.id === id));
        break;
      case SAUCES_SECTION:
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

  const toggleProductModal = () => {
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
        onSelectProduct={onSelectProduct}
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
          <ProductModal
            ingredients={pizza[selectedProductIdx].ingredients}
            optionalIngredients={pizza[selectedProductIdx].optionalIngredients}
            isOpen={isOpenedProduct}
            updateIngredients={updateIngredients}
            toggleIsOpen={toggleProductModal}
            selectedProductIdx={selectedProductIdx}
            key={selectedProductIdx}
          />
        }
        { isSomeProductLoaded && selectedSimpleProduct &&
          <SimpleProductModal
            name={selectedSimpleProduct.name}
            portion={selectedSimpleProduct?.portion}
            description={selectedSimpleProduct?.description}
            ingredients={selectedSimpleProduct?.composition}
            price={selectedSimpleProduct.price}
            toggleIsOpen={toggleSimpleProductModal}
            isOpen={isOpenedSimpleProduct}
            key={selectedSimpleProduct}
          />
        }
      </Suspense>
    </>
  );
};

export default CatalogPage;