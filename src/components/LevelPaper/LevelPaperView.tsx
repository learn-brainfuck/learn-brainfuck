import React from 'react';
import * as R from 'ramda';
import {
  Grid,
  Paper,
  Typography,
  Divider
} from '@material-ui/core';

import { Level, Lesson } from 'types';
import { Card } from 'components/Lesson';
import { useStyles } from './LevelPaperStyle';

interface Props {
  level: Level;
}

const LevelPaper: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const { level } = props;

  const toLessonElement = (lesson: Lesson) => (
    <Grid item xs>
      <Card lesson={lesson}/>
    </Grid>
  );
  const levelLessons = R.map(toLessonElement, level.lessons);

  return (
    <Paper>
      <Typography
        className={classes.title}
        variant="h5"
        component="h2"
      >
        {level.title}
      </Typography>
      <Divider/>
      <Grid
        className={classes.lessons}
        container
        spacing={3}
      >
        {levelLessons}
      </Grid>
    </Paper>
  )
};

export default LevelPaper;
