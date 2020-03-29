import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type InterpreterActions = ActionType<typeof actions>;

export enum Constants {
  SET_INPUT = 'interpreter/SET_INPUT',
  SHIFT_INPUT = 'interpreter/SHIFT_INPUT',
  ADD_TO_OUTPUT = 'interpreter/ADD_TO_OUTPUT',
  SET_TAPE = 'interpreter/SET_TAPE',
  SET_CURRENT_CELL = 'interpreter/SET_CURRENT_CELL',
  INCREASE_CURRENT_CELL = 'interpreter/INCREASE_CURRENT_CELL',
  DECREASE_CURRENT_CELL = 'interpreter/DECREASE_CURRENT_CELL',
  INCREASE_TAPE_POINTER = 'interpreter/INCREASE_TAPE_POINTER',
  DECREASE_TAPE_POINTER = 'interpreter/DECREASE_TAPE_POINTER',
  SET_CODE_POINTER = 'interpreter/SET_CODE_POINTER',
  INCREASE_CODE_POINTER = 'interpreter/INCREASE_CODE_POINTER',
  DECREASE_CODE_POINTER = 'interpreter/DECREASE_CODE_POINTER',
  SET_CODE = 'interpreter/SET_CODE',
  SET_STATUS = 'interpreter/SET_STATUS',
  SET_FINISHED = 'interpreter/SET_FINISHED',
  RESET = 'interpreter/RESET',
}

export enum InterpreterStatus {
  IDLE,
  ACTIVE,
}

export interface InterpreterState {
  input: number[];
  output: string;
  tape: number[];
  tapePointer: number;
  code: string;
  codePointer: number;
  status: InterpreterStatus;
  finished: boolean;
}
