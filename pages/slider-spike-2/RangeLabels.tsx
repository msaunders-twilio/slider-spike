import * as React from 'react';
import {Box, type BoxProps} from '@twilio-paste/box';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {Text} from '@twilio-paste/text';

import {getColorToken, parseNumberValue, generateArray, getVariantColor} from './helpers';
import type {UIStates} from './types';


export interface RangeLabelsProps extends UIStates {
  element: BoxProps['element'];
  numVariants: number;
  fillPercent?: string | number;
}
export const RangeLabels: React.FC<RangeLabelsProps> = ({element, numVariants, fillPercent = '0%', ...props}) => {
  const fillPercentNumber = parseNumberValue(fillPercent);
  const variantFillWidth = fillPercentNumber / numVariants;
  const variantsArray = generateArray(numVariants);
  const winnerPercentNumber = 100 - fillPercentNumber;
  const variantNames = 'ABCDEFG'.split('');
  const displayVairantPercentage = variantFillWidth.toFixed(1).replace(/[.,]0$/, "");

  return (
    <Box
      element={`${element}_RANGE_LABELS`}
      display="flex"
      // justifyContent="space-between"
      fontSize="fontSize30"
      lineHeight="lineHeight30"
      fontWeight="fontWeightSemibold"
      color="colorTextWeak"
    >
      { 
        variantsArray.map((index) => {

          return (
            <Box 
              key={index} 
              element={`${element}_RANGE_LABELS_VARIANT_${index}`}
              width={`${variantFillWidth}%`}
              textAlign='center'
            >
              <ScreenReaderOnly>TBD</ScreenReaderOnly>
              <Text as="p" color={getVariantColor(Math.abs(index - numVariants))}>{variantNames[index]}</Text>
              <Text as="p" color={getVariantColor(Math.abs(index - numVariants))}>{displayVairantPercentage}%</Text>
            </Box>
          )
        })
      }

      {
        winnerPercentNumber > 0 &&
        <Box 
          element={`${element}_RANGE_LABELS_WINNER`}
          width={`${winnerPercentNumber}%`}
          textAlign='center'
        >
          <ScreenReaderOnly>TBD</ScreenReaderOnly>
          <Text as="p">Winner</Text>
          <Text as="p">{winnerPercentNumber}%</Text>
        </Box>
      }
    </Box>
  );
};
RangeLabels.displayName = 'RangeLabels';
