import React from 'react';
import * as R from 'ramda';
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { useInterval } from 'utils';
import { InterpreterActions as StoreInterpreterActions, InterpreterStatus } from 'store/interpreter';
import { tick } from './InterpreterUtils';
import { mapStateToProps } from './InterpreterSelectors';
import { mapDispatchToProps } from './InterpreterActions';

interface InterpreterProps {
  children: JSX.Element;
}

type Props = InterpreterProps;

const Interpreter: React.FC<Props> = (props: Props) => {
  const { children } = props;
  const dispatch = useDispatch<Dispatch<StoreInterpreterActions>>();

  const actions = mapDispatchToProps(dispatch).actions;
  const state = useSelector(mapStateToProps).state;

  const isActive = R.equals(state.status, InterpreterStatus.ACTIVE);
  const delay = isActive ? 1 : null;

  const handleTick = () => tick(state, actions);

  React.useEffect(() => {
    if (isActive) {
      handleTick();
    }
  }, [isActive, state.codePointer, handleTick]);

  return children;
};

export default Interpreter;
