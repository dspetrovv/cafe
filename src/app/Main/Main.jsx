import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Catalog from '@/pages/Catalog';
import UIPage from '@/pages/UIPage';
import styles from './main.module.scss';
import Basket from '@/pages/Basket';
import Delivery from '@/pages/Delivery';
import Error from '@/pages/Error';
import InProgress from '@/pages/InProgress';

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/ui" element={<UIPage />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/about" element={<InProgress />} />
          <Route path="/terms" element={<InProgress />} />
          <Route path="/guarantee" element={<InProgress />} />
          <Route path="/contacts" element={<InProgress />} />
          <Route path="/support" element={<InProgress />} />
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </div>
    </main>
  );
};

export default Main;
