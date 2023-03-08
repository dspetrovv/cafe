import React from 'react';
import FilterButton from './_components/Buttons/FilterButton';
import Checkbox from './_components/Checkbox';
import Radio from './_components/Radio';

function App() {
  return (
    <div className="App">
      <FilterButton />
      <Checkbox name={'name'} checked={false} />
      <Radio id={'1'} name={'name1'} />
      <Radio id={'2'} name={'name1'} />
    </div>
  );
}

export default App;
