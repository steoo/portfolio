const roundValueToDec = (value: number, dec = 4): number => {
  return parseFloat(value.toFixed(dec));
};

export const generateClampSizes = (
  minSize: number,
  maxSize: number,
  minRes = 370,
  maxRes = 1240,
  convertToRem = true
): string => {
  const v = (100 * (maxSize - minSize)) / (maxRes - minRes);
  const r = (minRes * maxSize - maxRes * minSize) / (minRes - maxRes);

  let minSizeRem, maxSizeRem;

  if (convertToRem) {
    minSizeRem = roundValueToDec(minSize / 16);
    maxSizeRem = roundValueToDec(maxSize / 16);
  }

  const rInRem = roundValueToDec(r / 16);
  const roundedV = roundValueToDec(v);

  return `clamp(${minSizeRem}rem, ${roundedV}vw + ${rInRem}rem, ${maxSizeRem}rem)`;
};
