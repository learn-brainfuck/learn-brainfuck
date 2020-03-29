import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.common.white,
    }
  }),
);
