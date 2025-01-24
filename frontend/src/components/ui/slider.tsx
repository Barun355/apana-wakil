import React, { useState } from 'react';

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  className?: string;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ min = 0, max = 100, step = 1, value, onChange, className}) => {
  const [currentValue, setCurrentValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setCurrentValue(newValue);
    onChange(newValue);
  };

  return (
    <div className={"flex items-center gap-4"+className}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={currentValue}
        onChange={handleChange}
        className="w-full cursor-pointer accent-yellow-400"
      />
      <span className="text-sm font-medium">{currentValue}</span>
    </div>
  );
};

export default Slider;