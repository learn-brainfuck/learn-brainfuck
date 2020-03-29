import * as R from 'ramda';
import { BracketType, findMatchingBracketIndex } from 'utils';
import { InterpreterStatus } from 'store/interpreter';
import { InterpreterActions, InterpreterState } from './InterpreterTypes';

export const tick = (
  state: InterpreterState,
  actions: InterpreterActions,
) => {
  const { currentChar, codePointer } = state;

  if (currentChar === undefined || codePointer < 0) {
    actions.status.set(InterpreterStatus.IDLE);
    actions.finished.set(true);
  }

  switch (currentChar) {
    case '>':
      actions.tapePointer.increase();
      break;
    case '<':
      actions.tapePointer.decrease();
      break;
    case '+':
      actions.currentCell.increase();
      break;
    case '-':
      actions.currentCell.decrease();
      break;
    case '.':
      actions.output.add(
        String.fromCharCode(state.currentCell)
      );
      break;
    case ',':
      actions.currentCell.set(state.currentInput);
      actions.input.shift();
      break;
    case '[':
      if (state.currentCell === 0) {
        actions.codePointer.set(
          findMatchingBracketIndex(
            state.code,
            state.codePointer,
            BracketType.Closing
          )
        )
      }
      break;
    case ']':
      if (state.currentCell !== 0) {
        actions.codePointer.set(
          findMatchingBracketIndex(
            state.code,
            state.codePointer,
            BracketType.Opening
          )
        )
      }
      break;
    default:
      break;
  }
 
  actions.codePointer.increase();
};
