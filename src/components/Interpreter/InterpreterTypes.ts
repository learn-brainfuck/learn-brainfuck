import { InterpreterStatus } from 'store/interpreter';

interface InputActions {
  shift(): void;
}

interface OutputActions {
  add(value: string): void;
}

interface CurrentCellActions {
  set(value: number): void;
  increase(): void;
  decrease(): void;
}

interface TapePointerActions {
  increase(): void;
  decrease(): void;
}

interface CodePointerActions {
  set(value: number): void;
  increase(): void;
  decrease(): void;
}

interface StatusActions {
  set(value: InterpreterStatus): void;
}

interface FinishedActions {
  set(value: boolean): void;
}

export interface InterpreterActions {
  input: InputActions;
  output: OutputActions;
  currentCell: CurrentCellActions;
  tapePointer: TapePointerActions;
  codePointer: CodePointerActions;
  status: StatusActions;
  finished: FinishedActions;
}

export interface InterpreterState {
  status: InterpreterStatus;
  input: number[];
  currentInput: number;
  currentCell: number;
  currentChar: string;
  code: string;
  codePointer: number;
}
