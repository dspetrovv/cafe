import React, { useState } from "react";
import Button from '../../_components/Buttons/Button';
import FilterButton from '../../_components/Buttons/FilterButton';
import Checkbox from '../../_components/Checkbox';
import Input from '../../_components/Input';
import Radio from '../../_components/Radio';
import Tabs from '../../_components/Tabs';
import Dropdown from '../../_components/Dropdown';
import Textarea from '../../_components/Textarea';
import SendButton from '../../_components/Buttons/SendButton/SendButton';
import ProductCard from '../../_components/Cards/ProductCard';
import OrderCard from '../../_components/Cards/OrderCard';
import SnackCard from '../../_components/Cards/SnackCard';
import FilterPanel from "../../_components/Panels/FilterPanel";
import PizzaModal from "../../_components/Modals/PizzaModal/PizzaModal";
import OrderPanel from "../../_components/Panels/OrderPanel";
import MiniProductCard from "../../_components/Cards/MiniProductCard";
import AboutButton from "./AboutButton";

const UIPage = () => {
  const tabs = [{
    id: 1, text: 'text', selected: true,
  },
  {
    id: 2, text: 'text2', selected: false,
  },
  {
    id: 3, text: 'text3', selected: false,
  }];
  const SendButton1 = <SendButton />;
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = (val = true) => {
    console.log(val);
    setIsOpen(val);
  };

  return (
    <div>
      <h1>UI-kit</h1>
      <AboutButton />
      <Button onClick={toggleIsOpen}>Text</Button>
      <FilterButton />
      <Checkbox name={'name'} checked={false} />
      <Radio id={'1'} name={'name1'} />
      <Radio id={'2'} name={'name1'} />
      <Tabs tabs={tabs} />
      <Input />
      <Input Icon={SendButton1} />
      <Dropdown />
      <Dropdown isText />
      <Textarea rows={4} />
      <ProductCard />
      <OrderCard />
      <SnackCard />
      <MiniProductCard />
      {/* <FilterPanel isOpen={isOpen} toggleIsOpen={toggleIsOpen} /> */}
      {/* <PizzaModal isOpen={isOpen} toggleIsOpen={toggleIsOpen} /> */}
      <OrderPanel isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
    </div>
  );
};

export default UIPage;