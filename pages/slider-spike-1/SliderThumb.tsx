import React from 'react';

import styles from './Slider.module.css';

export interface SliderThumbProps {
  children?: any;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  left?: string | number;
}

export const getColorToken = (states: any): string => {
  if (states.dragging) {
    return 'pink';
  }

  return '#3366FF';
};

export const SliderThumb: React.FC<SliderThumbProps> = ({ left = '0%', ...props }) => {
  const showBoxShadow = props?.dragging || props?.focused;

  return (
    <div
      className={styles.Thumb}
      style={{
        ...props.style,
        left: left,
        backgroundColor: getColorToken(props),
        boxShadow: showBoxShadow ? 'shadowFocus' : 'none'
      }}
    ></div>
  )
}
