import { Dispatch } from 'redux';

import { InterpreterActions, InterpreterStatus } from 'store/interpreter/types';
import * as actions from 'store/interpreter/actions';

export interface DispatchProps {
  setStatus(status: InterpreterStatus): void;
  reset(): void;
}

export const mapDispatchToProps = (dispatch: Dispatch<InterpreterActions>): DispatchProps => ({
  setStatus: (status: InterpreterStatus) => dispatch(actions.setStatus(status)),
  reset: () => dispatch(actions.reset()),
});
