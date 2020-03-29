import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme ) =>
  createStyles({
    root: {
      minWidth: 275,
      padding: 0,
    },
    status: {
      fontSize: 14,
    },
  })
);
