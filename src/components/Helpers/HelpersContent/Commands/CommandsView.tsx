import React from 'react';
import * as R from 'ramda';
import {
  Container,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core';

import { useStyles } from './CommandStyle';
import { commandsList } from './CommandsUtils';
import { Command } from './CommandsTypes';

const Commands: React.FC = () => {
  const classes = useStyles();

  const toTableRow = (command: Command) => (
    <TableRow key={command.symbol}>
      <TableCell
        component="th"
        scope="row"
      >
        <Typography className={classes.code}>
          {command.symbol}
        </Typography>
      </TableCell>
      <TableCell align="left">{command.description}</TableCell>
    </TableRow>
  );
  const tableRows = R.map(toTableRow, commandsList);

  return (
    <Container className={classes.root}>
      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.commandHeader}>Command</TableCell>
              <TableCell align="left">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Commands;
