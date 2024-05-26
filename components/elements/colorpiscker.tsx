import React from "react";

interface ColorPickerProps {
  colors: string[];
  selectedColor: string;
  onSelect: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  colors,
  selectedColor,
  onSelect,
}) => {
  return (
    <div className="flex items-center space-x-4">
      <span>Choose Theme:</span>
      <div className="flex items-center space-x-2">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-6 h-6 rounded-full cursor-pointer bg-${color} ${
              selectedColor === color ? "selected-color" : ""
            }`}
            onClick={() => onSelect(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
