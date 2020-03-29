import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { mapStateToProps, StateProps } from './LessonTapeSelectors';
import View from './LessonTapeView';

const enhance = compose(
  connect(mapStateToProps)
);

type Props = StateProps;

const LessonTape: React.FC<Props> = (props: Props) => {
  const { tape } = props;

  return (
    <View tape={tape}/>
  );
};

export default enhance(LessonTape);
