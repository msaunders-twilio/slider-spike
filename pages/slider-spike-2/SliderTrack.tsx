import * as React from 'react';
import {Box, type BoxProps} from '@twilio-paste/box';
import type {BackgroundColor} from '@twilio-paste/style-props';

import {getColorToken, parseNumberValue, generateArray, getVariantFillColor} from './helpers';
import type {UIStates} from './types';

export interface SliderTrackProps extends UIStates {
  children?: React.ReactNode;
  fillPercent?: string | number;
  element: BoxProps['element'];
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  numVariants: number;
}

export const SliderTrack: React.FC<SliderTrackProps> = ({
  element = 'SLIDER_TRACK',
  fillPercent = '0%',
  children,
  numVariants,
  ...props
}) => {
  const fillPercentNumber = parseNumberValue(fillPercent);
  const variantFillWidth = fillPercentNumber / numVariants;
  const variantsArray = generateArray(numVariants);

  const variants = variantsArray.map((index) => {
    const leftOffset = index * variantFillWidth;

    return (
      <Box
        key={index}
        element={`${element}_FILL_${index}`}
        borderRadius="borderRadius20"
        position="absolute"
        top={0}
        left={`${leftOffset}%`}
        backgroundColor={getVariantFillColor(Math.abs(index - numVariants))}
        height="100%"
        width={`${variantFillWidth}%`}
        transition="background-color 150ms ease"
      />
    )
  });

  return (
    <Box {...props} position="relative" height="4px" width="100%" element={element}>
      <Box
        element={`${element}_BACKGROUND`}
        borderRadius="borderRadius20"
        position="absolute"
        top={0}
        left={0}
        backgroundColor="colorBackgroundStrong"
        height="100%"
        width="100%"
      />
      { variants }
      {children}
    </Box>
  );
};
SliderTrack.displayName = 'SliderTrack';
