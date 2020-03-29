import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '90vh',
    },
    inner: {
      height: '100%'
    },
    header: {
      marginBottom: '2rem',
    },
    link: {
      textDecoration: 'none',
    }
  }),
);
