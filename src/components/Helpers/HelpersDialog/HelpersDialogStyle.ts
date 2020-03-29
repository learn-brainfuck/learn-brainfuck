import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme ) =>
  createStyles({
    content: {
      minWidth: theme.breakpoints.values.sm,
      minHeight: theme.breakpoints.values.sm / 1.618,
    },
  })
);
