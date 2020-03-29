import { RootState } from 'types';
import { InterpreterState } from './InterpreterTypes';

const statusSelector = (state: RootState) => state.interpreter.status;
const inputSelector = (state: RootState) => state.interpreter.input;
const currentInputSelector = (state: RootState) => (state.interpreter.input[0]);
const codePointerSelector = (state: RootState) => state.interpreter.codePointer;
const codeSelector = (state: RootState) => state.interpreter.code;
const currentCharSelector = (state: RootState) => (
  state.interpreter.code[state.interpreter.codePointer]
);
const currentCellSelector = (state: RootState) => (
  state.interpreter.tape[state.interpreter.tapePointer]
);

export interface StateProps {
  state: InterpreterState;
}

export const mapStateToProps = (state: RootState): StateProps => ({
  state: {
    status: statusSelector(state),
    input: inputSelector(state),
    currentChar: currentCharSelector(state),
    currentCell: currentCellSelector(state),
    currentInput: currentInputSelector(state),
    code: codeSelector(state),
    codePointer: codePointerSelector(state),
  }
});
