import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Editor, EditorChange } from 'codemirror';

import { mapStateToProps, StateProps } from './LessonCodeSelectors';
import { mapDispatchToProps, DispatchProps } from './LessonCodeActions';
import View from './LessonCodeView';

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
);

type Props = StateProps & DispatchProps;

const LessonCode: React.FC<Props> = (props: Props) => {
  const { code, codePointer, status, setCode } = props;

  const handleChange = (editor: Editor, changeObj: EditorChange, value: string) => {
    setCode(value)
  };

  return (
    <View
      value={code}
      status={status}
      onChange={handleChange}
    />
  );
};

export default enhance(LessonCode);
