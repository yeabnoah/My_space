import React, { useState, useEffect, useRef } from "react";
import { Button } from "react-day-picker";

const moods: string[] = [
  "Happy :😁",
  "Sad :😢",
  "Excited :😃",
  "Angry :😠",
  "Surprised :😲",
  "Confused :😕",
  "Bored :😐",
  "Nervous :😰",
  "Relaxed :😌",
  "Frustrated :😤",
  "Anxious :😟",
  "Hopeful :😊",
  "Grateful :🙏",
  "Curious :🤔",
  "Embarrassed :😳",
  "Proud :😏",
  "Disappointed :😞",
  "Scared :😨",
  "Lonely :😔",
  "Content :😌",
];

const MoodPicker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [showMoods, setShowMoods] = useState(false);
  const moodPickerRef = useRef<HTMLDivElement>(null);

  const handleMoodClick = (mood: string) => {
    setSelectedMood(mood);
    setShowMoods(false); // Close the mood picker after selecting a mood
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
    <div className="py-2" ref={moodPickerRef}>
      <div
        className="border-[1px] rounded-md border-white p-2"
        style={{ marginTop: "20px" }}
      >
        {selectedMood ? (
          <button
            onClick={() => {
              setShowMoods(!showMoods);
            }}
            className="flex justify-between"
            style={{ cursor: "pointer" }} // Add cursor: pointer here
          >
            <p className="text-white text-sm">Choose mood:</p>
            <div className="flex items-center">
              <span className="ml-2">{selectedMood}</span>
            </div>
          </button>
        ) : (
          <p className="text-white text-base">Please select a mood</p>
        )}
      </div>
      {showMoods && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          {moods.map((mood) => (
            <Button
              key={mood}
              onClick={() => handleMoodClick(mood)}
              style={{
                cursor: "pointer",
                padding: "5px",
                border:
                  selectedMood === mood ? "2px solid black" : "1px solid grey",
                borderRadius: "5px",
                backgroundColor: selectedMood === mood ? "lightgrey" : "white",
              }}
            >
              {mood}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoodPicker;
