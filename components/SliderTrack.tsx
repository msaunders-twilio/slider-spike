import React from 'react';

import styles from './Slider.module.css';

export interface SliderTrackProps {
  children?: any;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  fillPercent?: string | number;
}

const parseNumberValue = (input: string | number): number => {
  // If value is already a number return
  if(!isNaN) {
    return input as number;
  }

  const strInput = input as string;
  const value = parseInt(strInput.replace('%', ''));

  return value;
}

export const SliderTrack: React.FC<SliderTrackProps> = ({ fillPercent = '0%', children }) => {
  const numVariants = 3;
  const fillPercentNumber = parseNumberValue(fillPercent);
  const variantFillWidth = fillPercentNumber / numVariants;
  const variantFillPercantage = `${variantFillWidth}%`;

  return (
    <div
      className={styles.Track}
    >
      <div
        className={styles.TrackBackground}
      ></div>

      <div
        className={`${styles.TrackFill} ${styles.TrackFillA}`}
        style={{
          width: `${variantFillPercantage}`,
          left: 0,
        }}
      ></div>
      <div
        className={`${styles.TrackFill} ${styles.TrackFillB}`}
        style={{
          width: `${variantFillPercantage}`,
          left: `${1 * variantFillWidth}%`,
        }}
      ></div>
      <div
        className={`${styles.TrackFill} ${styles.TrackFillC}`}
        style={{
          width: `${variantFillPercantage}`,
          left: `${2 * variantFillWidth}%`,
        }}
      ></div>

      { children }
    </div>
  )
}
