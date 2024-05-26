import useColor from "@/context/color";
import useMood from "@/context/mood";
import { Vibrate } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const moods: string[] = [
  "Happy 😁",
  "Sad 😢",
  "Excited 😃",
  "Angry 😠",
  "Surprised 😲",
  "Confused 😕",
  "Bored 😐",
  "Nervous 😰",
  "Relaxed 😌",
  "Frustrated 😤",
  "Anxious 😟",
  "Hopeful 😊",
  "Grateful 🙏",
  "Curious 🤔",
  "Embarrassed 😳",
  "Proud 😏",
  "Disappointed 😞",
  "Scared 😨",
  "Lonely 😔",
  "Content 😌",
];

const MoodPicker: React.FC = () => {
  const [showMoods, setShowMoods] = useState(false);
  const moodPickerRef = useRef<HTMLDivElement>(null);
  const { color } = useColor();
  const { mood, setMood } = useMood();

  const handleMoodClick = (selectedMood: string) => {
    setMood(selectedMood);
    setShowMoods(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        moodPickerRef.current &&
        !moodPickerRef.current.contains(event.target as Node)
      ) {
        setShowMoods(false);
      }
    };

    if (showMoods) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMoods]);

  return (
    <div className={` ${showMoods ? "w-64" : ""}`} ref={moodPickerRef}>
      <div className="border-[1px] rounded-md border-white my-2">
        {mood ? (
          <button
            onClick={() => {
              setShowMoods(!showMoods);
            }}
            className="flex justify-start py-2 items-center text-center w-56"
            style={{ cursor: "pointer" }}
          >
            <p className="text-white text-sm pl-5">Mood |</p>
            <div className="flex items-center">
              <span className=" text-white text-sm ml-2">{mood}</span>
            </div>
          </button>
        ) : (
          <button
            onClick={() => {
              setShowMoods(true);
            }}
            className="text-white text-sm px-2 py-2 flex justify-between items-center w-56"
          >
            Select your mood
          </button>
        )}
      </div>
      {showMoods && (
        <div
          className="overflow-y-scroll hide_scroll_bar flex-wrap mt-2"
          style={{
            display: "flex",
            gap: "2px",
            marginBottom: "2px",
          }}
        >
          {moods.map((moodOption) => (
            <div
              key={moodOption}
              onClick={() => handleMoodClick(moodOption)}
              className={`w-max bg-${color} ${
                moodOption === mood ? "bg-white" : ""
              } rounded-lg text-sm`}
              style={{
                cursor: "pointer",
                padding: "3px",
              }}
            >
              {moodOption}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoodPicker;
