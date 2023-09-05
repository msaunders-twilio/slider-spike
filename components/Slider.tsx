import React, { useState, useRef, useCallback } from 'react';
import { SliderStateOptions, useSliderState } from 'react-stately';
import { useSlider, useSliderThumb } from 'react-aria';

import styles from './Slider.module.css';
import { SliderThumb } from './SliderThumb';
import { SliderTrack } from './SliderTrack';

export interface SliderProps {
  numVariants?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
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

const MIN = 0;
const MAX = 100;
const STEP = 1;
const DEFAULT_VALUE = 20;
const DefaultNumberFormatter = new Intl.NumberFormat('en-US');

export const Slider: React.FC<SliderProps> = (props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = React.useState(false);
  const [focused, setFocused] = React.useState(false);

  // TODO: Figure these values out
  const isDisabled = false;
  const hasError = false;

  const remappedProps = {
    ...props,
    numberFormatter: DefaultNumberFormatter,
  }

  const state = useSliderState(remappedProps);
  const {trackProps} = useSlider(remappedProps, state, trackRef);
  const {thumbProps, inputProps, isDragging} = useSliderThumb(
    {
      index: 0,
      trackRef,
      inputRef,
    },
    state
  );

  const uiStateProps = React.useMemo(() => {
    return {
      disabled: isDisabled,
      error: hasError,
      hovered,
      focused,
      dragging: isDragging,
    };
  }, [isDisabled, hasError, hovered, focused, isDragging]);

  const onClickHandler = useCallback(() => {
    inputRef?.current?.focus();
  }, [inputRef]);

  const numVariants = 3;
  const leftCasted = thumbProps?.style?.left as number | string;
  const fillPercentage = parseNumberValue(leftCasted) || 0.0;
  const variantFillPercentage = 100.0 / numVariants;
  const variantPercentage = fillPercentage / numVariants;
 
  const displayVairantPercentage = variantPercentage.toFixed(1).replace(/[.,]0$/, "");
  const displayWinnerPercentage = (100.0 - fillPercentage);

  return (
    <div className={styles.Slider}>
      <div className={styles.Labels}>
        <div
          className={styles.VariantLabels}
          style={{
            width: `${fillPercentage}%`,
          }}
        >
          <div 
            className={`${styles.Label} ${styles.LabelA}`}
            style={{
              width: `${variantFillPercentage}%`,
            }}
          >
            <span className={styles.LabelName}>A</span>
            <span className={styles.LabelPercentage}>{ displayVairantPercentage }%</span>
          </div>
          <div 
            className={`${styles.Label} ${styles.LabelB}`}
            style={{
              width: `${variantFillPercentage}%`,
            }}
          >
            <span className={styles.LabelName}>B</span>
            <span className={styles.LabelPercentage}>{ displayVairantPercentage }%</span>
          </div>
          <div 
            className={`${styles.Label} ${styles.LabelC}`}
            style={{
              width: `${variantFillPercentage}%`,
            }}
          >
            <span className={styles.LabelName}>C</span>
            <span className={styles.LabelPercentage}>{ displayVairantPercentage }%</span>
          </div>
        </div>

        <div
          className={styles.WinnerLabels}
        >
          <div 
            className={styles.Label}
          >
            <span className={styles.LabelName}>Winner</span>
            <span className={styles.LabelPercentage}>{ displayWinnerPercentage }%</span>
          </div>
        </div>
      </div>

      <div
        {...trackProps}
        className={styles.TrackContainer}
        ref={trackRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClickHandler}
      >
        <SliderTrack
          {...uiStateProps}
          onClick={onClickHandler}
          fillPercent={thumbProps?.style?.left}
        >
          <SliderThumb
            {...thumbProps}
            {...uiStateProps}
            onClick={onClickHandler}
            left={thumbProps?.style?.left}
          >
            {/* <input /> */}
          </SliderThumb>
        </SliderTrack>
      </div>
    </div>
  )
}