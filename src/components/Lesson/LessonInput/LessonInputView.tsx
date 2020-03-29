import React from 'react';
import * as R from 'ramda';
import { Paper, TextField } from '@material-ui/core';
import { useStyles } from './LessonInputStyle';

interface Props {
  onChange(value: string): void;
  editable: boolean;
}

const LessonInput: React.FC<Props> = (props: Props) => {
  const { onChange, editable } = props;
  const classes = useStyles();

  const handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => (
    onChange(event.target.value)
  );

  const disabled = R.not(editable);

  return (
    <Paper className={classes.root}>
      <TextField
        className={classes.field}
        disabled={disabled}
        onChange={handleChangeEvent}
        id="lesson-input"
        placeholder="Input"
        fullWidth
      />
    </Paper>
  );
};

export default LessonInput;
