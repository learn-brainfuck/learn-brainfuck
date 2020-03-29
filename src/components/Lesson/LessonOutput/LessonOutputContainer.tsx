import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { mapStateToProps, StateProps } from './LessonOutputSelectors';
import View from './LessonOutputView';

const enhance = compose(
  connect(mapStateToProps)
);

type Props = StateProps;

const LessonOutput: React.FC<Props> = (props: Props) => {
  const { output } = props;

  return (
    <View value={output}/>
  );
};

export default enhance(LessonOutput);
