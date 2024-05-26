import useColor from "@/context/color";
import React, { useState, useEffect, useRef } from "react";

const ColorPicker: React.FC = () => {
  const { color, setColor } = useColor();
  const colors = ["primary", "secondary", "success", "pink"];
  const [showColors, setShowColors] = useState(false);
  const colorPickerRef = useRef<HTMLDivElement>(null);

  const handleColorClick = (color: string) => {
    setColor(color);
    setShowColors(false); // Close the color picker after selecting a color
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target as Node)
      ) {
        setShowColors(false);
      }
    };

    if (showColors) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showColors]);

  return (
    <div className="py-2" ref={colorPickerRef}>
      <div
        className="border-[1px] rounded-md border-white p-2"
        style={{ marginTop: "20px" }}
      >
        {color ? (
          <button
            onClick={() => {
              setShowColors(!showColors);
            }}
            className="flex justify-between"
          >
            <p className="text-white text-sm">Choose canvas color:</p>
            <div
              className={`bg-${color} rounded-md`}
              style={{
                width: "40px",
                height: "20px",
                border: "1px solid black",
              }}
            />
          </button>
        ) : (
          <p className="text-white text-base">Please select a color</p>
        )}
      </div>
      {showColors && (
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          {colors.map((color) => (
            <div
              key={color}
              className={`bg-${color} mt-2`}
              onClick={() => handleColorClick(color)}
              style={{
                width: "35px",
                height: "35px",
                cursor: "pointer",
                border: color === color ? "2px solid black" : "none",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
