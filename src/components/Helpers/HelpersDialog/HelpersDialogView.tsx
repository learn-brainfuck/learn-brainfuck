import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@material-ui/core';

import { Content } from 'components/Helpers';
import { useStyles } from './HelpersDialogStyle';

interface Props {
  open: boolean;
  onClose(): void;
}

const HelpersDialog: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const { open, onClose } = props;

  const LABEL = 'helpers-dialog-title';

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby={LABEL}
      maxWidth="lg"
    >
      <DialogTitle id={LABEL}>Helpers</DialogTitle>
      <DialogContent className={classes.content}>
        <Content/>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default HelpersDialog;
