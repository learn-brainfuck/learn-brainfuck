import React from 'react';
import {
  Container,
  Typography,
  Link
} from '@material-ui/core';

const Sources: React.FC = () => (
  <Container>
    <Typography>
      Below are the sources used to create this app. <br/>
      They can help you to fully understand the Brainfuck language.
    </Typography>
    <br/>
    <Typography>
      <Link href="https://esolangs.org/wiki/Brainfuck" target="_blank">
        Article about Brainfuck at esolangs.org
      </Link>
    </Typography>
  </Container>
);

export default Sources;
