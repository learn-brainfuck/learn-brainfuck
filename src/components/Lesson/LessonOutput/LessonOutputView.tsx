import React from 'react';
import { Paper, InputBase } from '@material-ui/core';
import { useStyles } from './LessonOutputStyle';

interface Props {
  value: string;
}

const LessonOutput: React.FC<Props> = (props: Props) => {
  const { value } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.field}
        value={value}
        id="lesson-output"
        placeholder="Output"
        fullWidth
        readOnly
      />
    </Paper>
  );
};

export default LessonOutput;
