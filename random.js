const calculateRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default calculateRandom;

const calculateRandomFloat = (min, max) => {
    return Math.random() * (max - min) + min;
}

export default calculateRandomFloat;