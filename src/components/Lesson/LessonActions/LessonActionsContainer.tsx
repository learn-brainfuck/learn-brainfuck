import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { InterpreterStatus } from 'store/interpreter/types';
import { mapStateToProps, StateProps } from './LessonActionsSelectors';
import { mapDispatchToProps, DispatchProps } from './LessonActionsActions';
import View from './LessonActionsView';

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
);

type Props = StateProps & DispatchProps;

const LessonActions: React.FC<Props> = (props: Props) => {
  const { setStatus, reset, status } = props;

  const handleChange = (value: InterpreterStatus) => (
    setStatus(value)
  );

  const handleReset = () => reset();

  return (
    <View
      onChange={handleChange}
      onReset={handleReset}
      status={status}
    />
  );
};

export default enhance(LessonActions);
