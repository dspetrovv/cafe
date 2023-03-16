import React from "react";
import { Route, Switch } from 'react-router-dom';
import UIPage from "../UIPage";
import styles from './main-page.module.scss';

const MainPage = () => {
return (
  <div className={styles['main-section']}>
    <main>
      <Switch>
        <Route path="/ui">
          <UIPage />
        </Route>
        {/* <Route path="/error"></Route>  */}
      </Switch>
    </main>
    <footer></footer>
  </div>
);
};

export default MainPage;