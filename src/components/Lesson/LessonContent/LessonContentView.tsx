import React from 'react';
import { Lesson } from 'types';
import { Divider, Paper, Typography } from '@material-ui/core';
import { useStyles } from './LessonContentStyle';

interface Props {
  lesson: Lesson;
}

const LessonContent: React.FC<Props> = (props: Props) => {
  const { lesson } = props;
  const classes = useStyles();

  return (
    <Paper>
      <Typography
        className={classes.title}
        variant="h4"
      >
        {lesson.title}
      </Typography>
      <Typography
        className={classes.description}
        variant="body1"
        component="div"
      >
        {lesson.description}
      </Typography>
    </Paper>
  )
};

export default LessonContent;
