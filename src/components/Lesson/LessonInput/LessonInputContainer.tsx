import React from 'react';
import * as R from 'ramda';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { InterpreterStatus } from 'store/interpreter/types';
import { mapStateToProps, StateProps } from './LessonInputSelectors';
import { mapDispatchToProps, DispatchProps } from './LessonInputActions';
import View from './LessonInputView';

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
);

type Props = StateProps & DispatchProps;

const LessonInput: React.FC<Props> = (props: Props) => {
  const { setInput, status } = props;

  const handleChange = (value: string) => {
    setInput(Array.from(value, e => e.charCodeAt(0)))
  };

  const editable = R.equals(status, InterpreterStatus.IDLE);

  return (
    <View
      onChange={handleChange}
      editable={editable}
    />
  );
};

export default enhance(LessonInput);
