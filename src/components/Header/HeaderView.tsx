import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
} from '@material-ui/core';
import { Book } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { Dialog as HelpersDialog } from 'components/Helpers';
import { useStyles } from './HeaderStyle';

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            <Link className={classes.link} to="/">
              Learn Brainfuck!
            </Link>
          </Typography>
          <HeaderHelpersButton/>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const HeaderHelpersButton: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        endIcon={<Book>Helpers</Book>}
      >
        Helpers
      </Button>
      <HelpersDialog
        open={open}
        onClose={handleClose}
      />
    </>
  )
};

export default Header;
