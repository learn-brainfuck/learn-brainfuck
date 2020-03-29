import { Dispatch } from 'redux';

import { InterpreterActions } from 'store/interpreter/types';
import * as actions from 'store/interpreter/actions';

export interface DispatchProps {
  setCode(value: string): void;
}

export const mapDispatchToProps = (dispatch: Dispatch<InterpreterActions>): DispatchProps => ({
  setCode: (value: string) => dispatch(actions.setCode(value)),
});
