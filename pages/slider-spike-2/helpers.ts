import type {BackgroundColor, TextColor} from '@twilio-paste/style-props';

import type {UIStates} from './types';

export const getColorToken = (states: UIStates): BackgroundColor => {
  if (states.disabled) {
    return 'colorBackgroundStrong';
  } else if (states.error) {
    if (states.hovered) {
      return 'colorBackgroundErrorStrong';
    }
    return 'colorBackgroundError';
  } else if (states.dragging) {
    return 'colorBackgroundPrimary';
  } else if (states.focused) {
    return 'colorBackgroundPrimaryStronger';
  } else if (states.hovered) {
    return 'colorBackgroundPrimary';
  }
  return 'colorBackgroundPrimaryStronger';
};

export const parseNumberValue = (input: string | number): number => {
  // If value is already a number, return it
  if(!isNaN) {
    return input as number;
  }

  const strInput = input as string;
  const value = parseInt(strInput.replace('%', ''));

  return value;
}

export function generateArray(numVariants: number) {
  let arr = [];

  for (let i = 0; i < numVariants; i++) {
    arr.push(i);
  }

  return arr;
}


export function getVariantFillColor(index: number): BackgroundColor {
  let color: BackgroundColor;
  
  switch (index) {
    case 1:
      color = 'colorBackgroundPrimaryStronger';
      break;
    case 2:
      color = 'colorBackgroundSuccess';
      break;
    case 3:
      color = 'colorBackgroundWarning';
      break;
    default:
      color = 'colorBackgroundPrimary';
  }

  return color;
}

export function getVariantColor(index: number): TextColor {
  let color: TextColor;
  
  switch (index) {
    case 1:
      color = 'colorTextPrimaryStronger';
      break;
    case 2:
      color = 'colorTextSuccess';
      break;
    case 3:
      color = 'colorTextWarning';
      break;
    default:
      color = 'colorTextPrimary';
  }

  return color;
}
