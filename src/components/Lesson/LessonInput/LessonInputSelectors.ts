import { RootState } from 'types';
import { InterpreterStatus } from 'store/interpreter';

const statusSelector = (state: RootState) => state.interpreter.status;

export interface StateProps {
  status: InterpreterStatus;
}

export const mapStateToProps = (state: RootState): StateProps => ({
  status: statusSelector(state),
});
