import React, {useState, } from 'react';
import { Slider } from './Slider';
import { useUID } from "@twilio-paste/core/uid-library";
import { Label } from '@twilio-paste/core/label';

const DEFAULT_VALUE = 20;
const MIN_ALLOWED_VALUE = 10;
const NUM_VARIANTS = 3;

export default function Home() {
  const [value, setValue] = useState(DEFAULT_VALUE);
  const sliderId = useUID();
  const helpTextId = useUID(); // optional

  const numberFormatter = React.useMemo(() => {
    return new Intl.NumberFormat('en-US');
  }, []);

  const handleOnChange = (newValue: number) => {
    if (newValue < MIN_ALLOWED_VALUE) {
      newValue = MIN_ALLOWED_VALUE;
    }

    setValue(newValue);
  }

  return (
    <>
      <main style={{ margin: '20px 50px'}}>
        <Label htmlFor={sliderId}>Slider</Label>

        <Slider
          id={sliderId}
          aria-describedby={helpTextId}
          value={value}
          minValue={0}
          maxValue={100}
          step={1}
          onChange={handleOnChange}
          numberFormatter={numberFormatter}
          numVariants={NUM_VARIANTS}
        />
      </main>
    </>
  )
}
