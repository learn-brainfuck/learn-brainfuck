import { Dispatch } from 'redux';

import { InterpreterActions } from 'store/interpreter/types';
import * as actions from 'store/interpreter/actions';

export interface DispatchProps {
  setInput(value: number[]): void;
}

export const mapDispatchToProps = (dispatch: Dispatch<InterpreterActions>): DispatchProps => ({
  setInput: (value: number[]) => dispatch(actions.setInput(value)),
});
