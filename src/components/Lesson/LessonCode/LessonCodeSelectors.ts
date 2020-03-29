import { RootState } from 'types';
import { InterpreterStatus } from 'store/interpreter';

const codeSelector = (state: RootState) => state.interpreter.code;
const codePointerSelector = (state: RootState) => state.interpreter.codePointer;
const statusSelector = (state: RootState) => state.interpreter.status;

export interface StateProps {
  code: string;
  codePointer: number;
  status: InterpreterStatus;
}

export const mapStateToProps = (state: RootState): StateProps => ({
  code: codeSelector(state),
  codePointer: codePointerSelector(state),
  status: statusSelector(state),
});
