import React from 'react';
import { compose } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import Interpreter from 'components/Interpreter';
import View from './LessonView';

const enhance = compose(
  withRouter,
);

type Props = RouteComponentProps;

const Lesson: React.FC<Props> = (props: Props) => {

  return (
    <Interpreter>
      <View/>
    </Interpreter>
  );
};

export default enhance(Lesson);
