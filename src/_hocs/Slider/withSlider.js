import React, { useEffect, useMemo, useRef, useState } from 'react';
import { getClassName } from '@/functions/classNameFunctions';
import ArrowButton from '@/_components/Buttons/ArrowButton/ArrowButton';
import styles from './slider.module.scss';

const withSlider = (Component, { elements, count = 0, listClassName, elementClassName, padding = 0 }) => {
  return ({ ...props }) => {
    const ref = useRef(null);
    const [leftCounter, setLeftCounter] = useState(0);
    const [elementWidth, setElementWidth] = useState(ref.current?.offsetWidth || 0);

    const moveLeft = () => {
      if (leftCounter === -(elements.length - count)) {
        return;
      }
      setLeftCounter((prevState) => prevState -= 1);
    };
    const moveRight = () => {
      if (leftCounter === 0) {
        return;
      }
      setLeftCounter((prevState) => prevState += 1);
    };

    const rightDisabled = useMemo(() => leftCounter === -(elements.length - count), [leftCounter]);
    const leftDisabled = useMemo(() => leftCounter === 0, [leftCounter]);

    useEffect(() => {
      console.log(ref.current?.offsetWidth);
      setElementWidth(ref.current?.offsetWidth);
    }, [ref.current?.offsetWidth]);

    const wrapperSliderWidth = (count + 1) * elementWidth;
    const sliderWidth = count * elementWidth;
    const sliderHeight = (ref.current?.offsetHeight || 0);

    const wrapperClassName = getClassName(styles.slider, listClassName);
    const elClassName = getClassName(styles.slider__element, elementClassName);

    return (
      <div className={wrapperClassName} style={{ width: `${wrapperSliderWidth}px`, height: `${sliderHeight}px` }}>
        { elements.length > count && <ArrowButton direction='left' onClick={moveRight} className={[styles.slider__button, styles.slider__button_left]} disabled={leftDisabled} />}
        <div className={wrapperClassName} style={{ width: `${sliderWidth}px`, height: `${sliderHeight}px` }}>
          { elements.map((element, idx) => 
            <div key={element.id} ref={ref} className={elClassName} style={{ left: `${(idx + leftCounter) * elementWidth}px` }}>
              <Component element={element} {...props} />
            </div>
          ) }
        </div>
        { elements.length > count && <ArrowButton direction='right' onClick={moveLeft} className={[styles.slider__button, styles.slider__button_right]} disabled={rightDisabled} />}
      </div>
    );
  };
};

export default withSlider;