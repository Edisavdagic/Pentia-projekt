const calculateRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default calculateRandom;

const calculateRandomFloat = (min, max) => {
    return Math.random() * (max - min) + min;
}

export default calculateRandomFloat;
const beskeder = [
  "Du fandt en hemmelig skat 🪙",
  "En kat stjæler din sandwich 🐈",
  "Du får +10 held i dag ✨",
  "En mystisk dør åbner sig 🚪",
  "Kaffen smager ekstra godt ☕"
];

const tilfældigBesked = beskeder[Math.floor(Math.random() * beskeder.length)];

console.log(tilfældigBesked);

let held = calculateRandom(1, 100);
console.log(`Dit held i dag er: ${held}`);  

function visTilfældigBesked() {
  const beskeder = [
    "Du fandt en hemmelig skat 🪙",
    "En kat stjæler din sandwich 🐈",
    "Du får +10 held i dag ✨",
    "En mystisk dør åbner sig 🚪" ,
  ];
  const tilfældigBesked = beskeder[Math.floor(Math.random() * beskeder.length)];
  console.log(tilfældigBesked);
}

