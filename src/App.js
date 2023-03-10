import React from 'react';
import Button from './_components/Buttons/Button';
import FilterButton from './_components/Buttons/FilterButton';
import Checkbox from './_components/Checkbox';
import Input from './_components/Input';
import Radio from './_components/Radio';
import Tabs from './_components/Tabs';
import Dropdown from './_components/Dropdown';
import Textarea from './_components/Textarea';
import SendButton from './_components/Buttons/SendButton/SendButton';
import ProductCard from './_components/Cards/ProductCard';
import OrderCard from './_components/Cards/OrderCard';

function App() {
  const tabs = [{
      id: 1, text: 'text', selected: true,
    },
    {
      id: 2, text: 'text2', selected: false,
    },
    {
      id: 3, text: 'text3', selected: false,
    }
  ];
  const SendButton1 = <SendButton />;
  return (
    <div className="App">
      <Button>Text</Button>
      <FilterButton />
      <Checkbox name={'name'} checked={false} />
      <Radio id={'1'} name={'name1'} />
      <Radio id={'2'} name={'name1'} />
      <Tabs tabs={tabs} />
      <Input />
      <Input Icon={SendButton1} />
      <Dropdown />
      <Textarea rows={4} />
      <ProductCard />
      <OrderCard />
    </div>
  );
}

export default App;
