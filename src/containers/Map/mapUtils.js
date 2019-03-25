import React from 'react';

export function getColor(d) {
  return d >= 0 && d < 10  ? [102, 189, 99] :
         d >= 10 && d < 15  ? [217, 239, 139] :
         d >= 15 && d < 20  ?  [254, 224, 139] :
         d >= 20 && d < 30  ? [244, 109, 67] :
         d >= 30 && d <= 40  ? [168, 100, 100]:[67,146,241];;
}

function pad(num) {
  return ("0"+num).slice(-2);
}

export function parseDiffernece(seconds) {
  let mins = Math.floor(seconds/60);
  seconds = seconds % 60;
  let hours = Math.floor(mins/60);
  mins = mins % 60;
  return `${pad(hours)}:${pad(mins)}:${pad(seconds)}`;
}
