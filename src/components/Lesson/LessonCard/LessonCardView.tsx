import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@material-ui/core';

import { Lesson } from 'types';
import { useStyles } from './LessonCardStyle';

interface Props {
  lesson: Lesson;
}

const LessonCard: React.FC<Props> = (props: Props) => {
  const { lesson } = props;
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      variant="outlined"
      elevation={0}
    >
      <CardContent>
        <Typography className={classes.status} color="textSecondary">
          Uncompleted
        </Typography>
        <Typography variant="h5" component="h3">
          {lesson.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">start</Button>
      </CardActions>
    </Card>
  );
};

export default LessonCard;
