import useColor from "@/context/color";
import React, { useState, useEffect, useRef } from "react";

const ColorPicker: React.FC = () => {
  const { color, setColor } = useColor();
  const colors = [
    "primary",
    "secondary",
    "success",
    "pink",
    "color1",
    "color2",
    "color3",
    "color4",
    "color5",
    "color7",
    "color8",
    "color9",
    "color10",
    "color11",
    "color12",
    "color13",
    "color14",
    "color15",
    "color17",
    "color18",
  ];

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
    <div className="pb-2 " ref={colorPickerRef}>
      <div
        className="border-[1px] rounded-md border-white p-2  mt-2 md:mt-4 "
        // style={{ marginTop: "20px" }}
      >
        {color ? (
          <button
            onClick={() => {
              setShowColors(!showColors);
            }}
            className="flex justify-between items-center w-[100%]"
          >
            <p className="text-white text-sm block">canvas color:</p>
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
          <p className="text-white text-base block">Please select a color</p>
        )}
      </div>

      {showColors && (
        <div className=" md:gap-2 flex mb-4 flex-wrap w-full md:w-56">
          {colors.map((color) => {
            let bgcolorClass = "";

            switch (color) {
              case "primary":
                bgcolorClass = "bg-primary";
                break;
              case "secondary":
                bgcolorClass = "bg-secondary";
                break;
              case "success":
                bgcolorClass = "bg-success";
                break;
              case "pink":
                bgcolorClass = "bg-pink";
                break;
              case "color1":
                bgcolorClass = "bg-color1";
                break;
              case "color2":
                bgcolorClass = "bg-color2";
                break;
              case "color3":
                bgcolorClass = "bg-color3";
                break;
              case "color4":
                bgcolorClass = "bg-color4";
                break;
              case "color5":
                bgcolorClass = "bg-color5";
                break;
              case "color7":
                bgcolorClass = "bg-color7";
                break;
              case "color8":
                bgcolorClass = "bg-color8";
                break;
              case "color9":
                bgcolorClass = "bg-color9";
                break;
              case "color10":
                bgcolorClass = "bg-color10";
                break;
              case "color11":
                bgcolorClass = "bg-color11";
                break;
              case "color12":
                bgcolorClass = "bg-color12";
                break;
              case "color13":
                bgcolorClass = "bg-color13";
                break;
              case "color14":
                bgcolorClass = "bg-color14";
                break;
              case "color15":
                bgcolorClass = "bg-color15";
                break;
              case "color17":
                bgcolorClass = "bg-color17";
                break;
              case "color18":
                bgcolorClass = "bg-color18";
                break;
              default:
                bgcolorClass = "bg-primary";
            }

            return (
              <div
                key={color}
                className={`${bgcolorClass}  mt-2`}
                onClick={() => handleColorClick(color)}
                style={{
                  width: "35px",
                  height: "35px",
                  cursor: "pointer",
                  borderRadius: 20,
                  border: color === color ? "2px solid black" : "none",
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
