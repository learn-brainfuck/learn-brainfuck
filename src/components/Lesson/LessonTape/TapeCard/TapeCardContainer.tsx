import React from 'react';
import * as R from 'ramda';
import { useSelector } from 'react-redux';

import { RootState } from 'types';
import View from './TapeCardView';

interface Props {
  index: number;
}

const TapeCard: React.FC<Props> = (props: Props) => {
  const { index } = props;

  const value = useSelector(
    (state: RootState) => state.interpreter.tape[index]
  );

  const tapePointer = useSelector(
    (state: RootState) => state.interpreter.tapePointer
  );

  const selected = R.equals(index, tapePointer);

  return (
    <View
      value={value}
      selected={selected}
    />
  );
};

export default TapeCard;
