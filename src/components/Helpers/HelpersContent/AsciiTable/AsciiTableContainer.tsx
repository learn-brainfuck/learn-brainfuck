import React from 'react';
import * as R from 'ramda';
import {
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core';

import { AsciiTableElement, AsciiTables } from './AsciiTableTypes';
import { getTablesData } from './AsciiTableUtils';
import View from './AsciiTableView';

const AsciiTable: React.FC = () => {
  const [tablesData, setTablesData] = React.useState<AsciiTables>([]);
  const [extended, setExtended] = React.useState<boolean>(false);

  const getAndSetTablesData = (maxIndex: number) => (
    setTablesData(getTablesData(maxIndex))
  );

  React.useEffect(() => getAndSetTablesData(128), []);

  const handleExtendedChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setExtended(event.target.checked);
    R.ifElse(
      (v: boolean) => R.equals(v, R.T()),
      () => getAndSetTablesData(256),
      () => getAndSetTablesData(128),
    )(event.target.checked)
  };

  const toTableRow = (element: AsciiTableElement) => (
    <TableRow key={element.dec}>
      <TableCell>{element.dec}</TableCell>
      <TableCell>{element.char}</TableCell>
    </TableRow>
  );
  const tableRows = (tableData: AsciiTableElement[]) => R.map(toTableRow, tableData);

  const tablesHead = (
    <TableHead>
      <TableRow>
        <TableCell>DEC</TableCell>
        <TableCell>Char</TableCell>
      </TableRow>
    </TableHead>
  );

  const toTable = (tableData: AsciiTableElement[]) => (
    <Grid item xs={6} key={tableData[0].dec}>
      <TableContainer component={Paper} variant="outlined">
        <Table>
          {tablesHead}
          <TableBody>
            {tableRows(tableData)}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
  const tables = R.map(toTable, tablesData);

  return (
    <View
      tables={tables}
      extended={extended}
      onExtendedChange={handleExtendedChange}
    />
  )
};

export default AsciiTable;
