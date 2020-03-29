import { RootState } from 'types';

const tapeSelector = (state: RootState) => state.interpreter.tape;

export interface StateProps {
  tape: number[];
}

export const mapStateToProps = (state: RootState): StateProps => ({
  tape: tapeSelector(state),
});
