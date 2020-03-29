import React from 'react';
import * as R from 'ramda';
import { Paper } from '@material-ui/core';
import { Editor, EditorChange } from 'codemirror';
import { Controlled as CodeMirror, EditorChangeEvent } from 'react-codemirror2';

import { InterpreterStatus } from 'store/interpreter/types';
import { useStyles } from './LessonCardStyle';

interface Props {
  value: string;
  onChange(editor: Editor, changeObj: EditorChange, value: string): void;
  status: InterpreterStatus;
}

const LessonCode: React.FC<Props> = (props: Props) => {
  const { value, onChange, status } = props;
  const classes = useStyles();

  const interpreterActive = R.equals(status, InterpreterStatus.ACTIVE);

  const options = {
    mode: 'brainfuck',
    theme: 'material-darker',
    readOnly: interpreterActive
  };

  return (
    <Paper className={classes.root}>
      <CodeMirror
        value={value}
        options={options}
        onBeforeChange={onChange}
      />
    </Paper>
  );
};


export default LessonCode;
