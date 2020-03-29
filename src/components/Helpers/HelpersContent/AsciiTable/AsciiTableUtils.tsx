import * as R from 'ramda';
import { AsciiTableElement, AsciiTables } from './AsciiTableTypes';

const predefinedAciiElements: AsciiTableElement[] = [
  {
    dec: 32,
    char: '[space]'
  }
];

const toAsciiTablelement = (dec: number): AsciiTableElement => ({
  dec,
  char: String.fromCharCode(dec),
});

export const getTablesData = (maxIndex: number): AsciiTables => {
  const minIndex: number = 33;
  const splitIndex = (maxIndex - minIndex) / 2 + 1;

  const decArray = R.times(R.identity, maxIndex);
  const decSubArray = R.remove(0, minIndex, decArray);
  const fullTable = R.map(toAsciiTablelement, decSubArray);

  const fullTableWithPredefined = R.concat(
    predefinedAciiElements,
    fullTable
  );

  return R.splitAt(splitIndex, fullTableWithPredefined);
};



