import * as R from 'ramda';

export enum BracketType {
  Closing,
  Opening,
}

const findMatchingBracketIndex = (
  str: string,
  currentPosition: number,
  bracketType: BracketType
): number => {
  const isClosing = bracketType === BracketType.Closing;
  let deep = 1;

  if (isClosing) {
    for (let index = currentPosition+1; index < str.length; index++) {
      if (str[index] === '[') {
        deep++;
      } else if (str[index] === ']') {
        deep--;
      }

      if (deep === 0) {
        return index;
      }
    }
  } else {
    for (let index = currentPosition-1; index > 0; index--) {
      if (str[index] === ']') {
        deep++;
      } else if (str[index] === '[') {
        deep--;
      }

      if (deep === 0) {
        return index;
      }
    }
  }

  return -1;
};

export default findMatchingBracketIndex;
