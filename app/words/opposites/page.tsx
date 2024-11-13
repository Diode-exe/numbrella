'use client'

import React, { useEffect, useState } from "react";
import { PrettyChar } from '../../prettyChar'

type OppositeWordsType = { [key: string]: string };

const oppositeWords: OppositeWordsType = {
{
    "After": "Before",
    "Arrive": "Leave",
    "Awake": "Asleep",
    "Begin": "End",
    "Best": "Worst",
    "Big": "Small",
    "Bottom": "Top",
    "Brave": "Scared",
    "Bright": "Dim",
    "Buy": "Sell",
    "Clean": "Dirty",
    "Cool": "Warm",
    "Day": "Night",
    "Deep": "Shallow",
    "East": "West",
    "Easy": "Hard",
    "Early": "Late",
    "Enter": "Exit",
    "Far": "Near",
    "Fast": "Slow",
    "First": "Last",
    "Float": "Sink",
    "Friend": "Enemy",
    "Front": "Back",
    "Full": "Empty",
    "Give": "Take",
    "Happy": "Sad",
    "Hard": "Soft",
    "Healthy": "Sick",
    "Heavy": "Light",
    "High": "Low",
    "Hot": "Cold",
    "Huge": "Tiny",
    "In": "Out",
    "Inside": "Outside",
    "Joy": "Sorrow",
    "Laugh": "Frown",
    "Left": "Right",
    "Light": "Dark",
    "Locked": "Unlocked",
    "Long": "Short",
    "Loud": "Quiet",
    "Lower": "Raise",
    "New": "Old",
    "North": "South",
    "Open": "Closed",
    "Peace": "Conflict",
    "Plenty": "Few",
    "Push": "Pull",
    "Right": "Wrong",
    "Safe": "Dangerous",
    "Sad": "Happy",
    "Sharp": "Dull",
    "Simple": "Difficult",
    "Smooth": "Rough",
    "Soft": "Firm",
    "Start": "Finish",
    "Stop": "Go",
    "Strong": "Weak",
    "Success": "Failure",
    "Sweet": "Sour",
    "Tall": "Short",
    "Thick": "Thin",
    "Top": "Bottom",
    "True": "False",
    "Under": "Over",
    "Up": "Down",
    "Victory": "Defeat",
    "Wet": "Dry",
    "Wide": "Narrow",
    "Win": "Lose",
    "Work": "Rest",
    "Yes": "No",
    "Young": "Old"
}

};

export default function Page() {
   const [currentPair, setCurrentPair] = useState(['', '']);
   const [currentClasses, setCurrentClasses] = useState(['', '']);

  // Function to generate a new random pair
  const generateNewPair = () => {
    const keys = Object.keys(oppositeWords);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    setCurrentPair([randomKey, oppositeWords[randomKey]]);

    let randomClass1, randomClass2;
    do {
      randomClass1 = classes[Math.floor(Math.random() * classes.length)];
      randomClass2 = classes[Math.floor(Math.random() * classes.length)];
    } while (randomClass1 === randomClass2);
    setCurrentClasses([randomClass1, randomClass2]);
  };

  // Generate a new pair when the component mounts
  useEffect(() => {
    generateNewPair();
  }, []);

  const classes = [
    "text-green-300",
  "text-green-400",
  "text-pink-500",
  "text-amber-500",
  "text-lime-500",
  "text-emerald-500",
  "text-blue-400",
  "text-indigo-600",
  "text-fuchsia-500",
  "text-rose-500",
  "text-cyan-400",
  "text-yellow-200"
  ];

  return (
    <div>
      <h2 className="text-center tracking-wide font-mono text-3xl lg:text-3xl font-black">Opposites</h2>
      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', margin: '10px' }}
        className="text-center tracking-wide font-mono text-2xl lg:text-2xl font-black"
      >
      </div>
      <br></br>
      <div
          style={{
            display: 'flex', 
            justifyContent: 'space-around', 
            alignItems: 'center',
            margin: '50px 50px'
          }}
          className="text-center tracking-wide font-mono text-3xl md:text-4xl lg:text-5xl font-black"
        >
          <p className={currentClasses[0]} onClick={generateNewPair} style={{ padding: '50px' }}>{currentPair[0]}</p>
          <p className={currentClasses[1]} onClick={generateNewPair} style={{ padding: '50px' }}>{currentPair[1]}</p>
        </div>
    </div>
  );
}
