import React from 'react';
import {
  Container,
  Grid,
  Paper,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';

interface Props {
  tables: JSX.Element[];
  extended: boolean;
  onExtendedChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const AsciiTable: React.FC<Props> = (props: Props) => {
  const { tables, extended, onExtendedChange } = props;

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper variant="outlined">
            <Grid container justify="center">
              <FormControlLabel
                value="extended"
                control={
                  <Checkbox
                    checked={extended}
                    onChange={onExtendedChange}
                    color="primary"
                  />
                }
                label="Extended"
                labelPlacement="end"
              />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {tables}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AsciiTable;
