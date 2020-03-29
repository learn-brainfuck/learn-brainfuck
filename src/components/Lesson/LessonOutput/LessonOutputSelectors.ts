import { RootState } from 'types';

const outputSelector = (state: RootState) => state.interpreter.output;

export interface StateProps {
  output: string;
}

export const mapStateToProps = (state: RootState): StateProps => ({
  output: outputSelector(state),
});
