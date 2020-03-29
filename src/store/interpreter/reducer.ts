import {
  Constants,
  InterpreterActions,
  InterpreterState,
  InterpreterStatus,
} from './types';

const TAPE_INITIAL = 64;

export const initialState: InterpreterState = {
  input: [],
  output: '',
  tape: Array.from(Array(TAPE_INITIAL), () => 0),
  tapePointer: 0,
  code: '',
  codePointer: 0,
  status: InterpreterStatus.IDLE,
  finished: false,
};

const toUint8 = (value: number): number => (value & 0xFF);

export function interpreterReducer(
  state: InterpreterState = initialState,
  action: InterpreterActions,
): InterpreterState {
  switch (action.type) {
    case Constants.SET_INPUT:
      return { ...state, input: action.payload.input };

    case Constants.SHIFT_INPUT:
      state.input.shift();
      return state;

    case Constants.ADD_TO_OUTPUT:
      const output = state.output + action.payload.value;
      return { ...state, output };

    case Constants.SET_CURRENT_CELL:
      state.tape[state.tapePointer] = action.payload.value;
      return state;

    case Constants.INCREASE_CURRENT_CELL:
      state.tape[state.tapePointer] = toUint8(state.tape[state.tapePointer] + 1);
      return state;

    case Constants.DECREASE_CURRENT_CELL:
      state.tape[state.tapePointer] = toUint8(state.tape[state.tapePointer] - 1);
      return state;

    case Constants.INCREASE_TAPE_POINTER:
      state.tapePointer++;
      return state;

    case Constants.DECREASE_TAPE_POINTER:
      state.tapePointer--;
      return state;

    case Constants.SET_CODE_POINTER:
      state.codePointer = action.payload.value;
      return state;

    case Constants.INCREASE_CODE_POINTER:
      state.codePointer++;
      return state;

    case Constants.DECREASE_CODE_POINTER:
      state.codePointer--;
      return state;

    case Constants.SET_CODE:
      return { ...state, code: action.payload.code };

    case Constants.SET_STATUS:
      return { ...state, status: action.payload.status };

    case Constants.SET_FINISHED:
      return { ...state, finished: action.payload.value };

    case Constants.RESET:
      const newState = initialState;
      newState.tape = Array.from(Array(TAPE_INITIAL), () => 0);
      newState.code = state.code;
      return newState;

    default:
      return state;
  }
}
