import { Dispatch } from 'redux';

import { InterpreterActions as StoreInterpreterActions, InterpreterStatus } from 'store/interpreter/types';
import * as actions from 'store/interpreter/actions';
import { InterpreterActions } from './InterpreterTypes';

export interface DispatchProps {
  actions: InterpreterActions;
}

export const mapDispatchToProps = (
  dispatch: Dispatch<StoreInterpreterActions>
): DispatchProps => ({
  actions: {
    input: {
      shift: () => dispatch(actions.shiftInput()),
    },
    output: {
      add: (value: string) => dispatch(actions.addToOutput(value)),
    },
    currentCell: {
      set: (value: number) => dispatch(actions.setCurrentCell(value)),
      increase: () => dispatch(actions.increaseCurrentCell()),
      decrease: () => dispatch(actions.decreaseCurrentCell()),
    },
    tapePointer: {
      increase: () => dispatch(actions.increaseTapePointer()),
      decrease: () => dispatch(actions.decreaseTapePointer()),
    },
    codePointer: {
      set: (value: number) => dispatch(actions.setCodePointer(value)),
      increase: () => dispatch(actions.increaseCodePointer()),
      decrease: () => dispatch(actions.decreaseCodePointer()),
    },
    status: {
      set: (value: InterpreterStatus) => dispatch(actions.setStatus(value)),
    },
    finished: {
      set: (value: boolean) => dispatch(actions.setFinished(value)),
    }
  }
});
