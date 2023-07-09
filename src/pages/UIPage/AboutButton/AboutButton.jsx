import React, { createContext } from "react";
import styles from "../ui.module.scss";
import Buttons from "./Buttons";

export const AboutContext = createContext(null);

const AboutButton = () => {

  return (
    <AboutContext.Provider value={{ styles }}>
      <div className={styles.ui__about}>
        <Buttons />
        {/* <article>
          <span>
            <strong>children:</strong>
            дефолтный реактовский children. Может быть JSX-элементом, может быть текстом.
            <strong>default:</strong> пусто
          </span>
        </article> */}
        <article>
          <strong></strong>
          <span></span>
        </article>
        <article>
          <strong></strong>
          <span></span>
        </article>
        <article>
          <strong></strong>
          <span></span>
        </article>
        <article>
          <strong></strong>
          <span></span>
        </article>
      </div>
    </AboutContext.Provider>
  );
};

export default AboutButton;
