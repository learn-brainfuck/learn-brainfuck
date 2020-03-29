import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Lesson as LessonType } from 'types';

import { Content, Tape, Actions, Input, Output, Code } from 'components/Lesson';
import { useStyles } from './LessonStyle';

const Lesson: React.FC = () => {
  const classes = useStyles();

  const lessonData: LessonType = {
    id: 'hello-1-2-3',
    title: 'Hello 1, 2, 3',
    description: (
      <Grid container spacing={2}>
        <Grid item>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis urna sit amet orci sodales, et eleifend metus dignissim.
        </Grid>
        <Grid item>
          Proin condimentum mattis ligula, <b>ut facilisis erat scelerisque vel</b>. Morbi nulla odio, pellentesque vel neque quis,
        </Grid>
        <Grid item>
          blandit auctor erat. In nibh felis, ullamcorper id <b>accumsan id</b>, ultrices volutpat tortor. Etiam ullamcorper mi erat, efficitur lobortis quam porta id. Suspendisse ut justo enim. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </Grid>
      </Grid>
    ),
  };

  const itemsContainer = (
    <Grid
      container
      spacing={2}
    >
      <Grid item xs={12}>
        <Actions/>
      </Grid>
      <Grid item xs={12}>
        <Input/>
      </Grid>
      <Grid item xs={12}>
        {/*<Tape/>*/}
      </Grid>
      <Grid item xs={12}>
        <Output/>
      </Grid>
      <Grid item xs={12}>
        <Code/>
      </Grid>
    </Grid>
  );

  return (
    <Container
      className={classes.root}
      maxWidth="lg"
    >
      <Grid
        className={classes.inner}
        container
        spacing={3}
      >
        <Grid item xs={6}>
          <Content lesson={lessonData}/>
        </Grid>
        <Grid
          className={classes.inner}
          item
          xs={6}
        >
          {itemsContainer}
        </Grid>
      </Grid>
    </Container>
  )
};

export default Lesson;
