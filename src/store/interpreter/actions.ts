import { action } from 'typesafe-actions';
import { Constants, InterpreterStatus } from './types';

export const setInput = (input: number[]) => (
  action(Constants.SET_INPUT, { input })
);

export const shiftInput = () => (
  action(Constants.SHIFT_INPUT)
);

export const addToOutput = (value: string) => (
  action(Constants.ADD_TO_OUTPUT, { value })
);

export const setTape = (value: number[]) => (
  action(Constants.SET_TAPE, { value })
);

export const setCurrentCell = (value: number) => (
  action(Constants.SET_CURRENT_CELL, { value })
);

export const increaseCurrentCell = () => (
  action(Constants.INCREASE_CURRENT_CELL)
);

export const decreaseCurrentCell = () => (
  action(Constants.DECREASE_CURRENT_CELL)
);

export const increaseTapePointer = () => (
  action(Constants.INCREASE_TAPE_POINTER)
);

export const decreaseTapePointer = () => (
  action(Constants.DECREASE_TAPE_POINTER)
);

export const setCodePointer = (value: number) => (
  action(Constants.SET_CODE_POINTER, { value })
);

export const increaseCodePointer = () => (
  action(Constants.INCREASE_CODE_POINTER)
);

export const decreaseCodePointer = () => (
  action(Constants.DECREASE_CODE_POINTER)
);

export const setCode = (code: string) => (
  action(Constants.SET_CODE, { code })
);

export const setStatus = (status: InterpreterStatus) => (
  action(Constants.SET_STATUS, { status })
);

export const setFinished = (value: boolean) => (
  action(Constants.SET_FINISHED, { value })
);

export const reset = () => (
  action(Constants.RESET)
);
