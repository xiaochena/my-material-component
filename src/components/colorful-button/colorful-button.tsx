import React from 'react';

export interface ColorfulButtonProps {
  color?: string;
  text?: string;
}

const ColorfulButton: React.FC<ColorfulButtonProps> = function ColorfulButton({ color, text }) {
  return <button style={{ color }}>{text || 'button'}</button>;
};

ColorfulButton.displayName = 'ColorfulButton';
export default ColorfulButton;
