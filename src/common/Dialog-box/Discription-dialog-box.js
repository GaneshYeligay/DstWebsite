import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function CustomizedDialogs({ open, handleClickOpen, handleClose }) {
    // const [open, setOpen] = React.useState(false);

    /* const handleClickOpen = () => {
      setOpen(true);
    }; */

    return (
        <div>
            {/* <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
            Open dialog
          </Button> */}
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Modal title
            </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        The Jetson Nano module is a small AI computer that has the performance and power
                        efficiency needed to run modern AI workloads, multiple neural networks in parallel
                         and process data from several high-resolution sensors simultaneously. This makes it
                         the perfect entry-level option to add advanced AI to embedded products.
              </Typography>
                    <Typography gutterBottom>
                        Bringing the Power of Modern AI to Millions of Devices
                        NVIDIA Jetson Nano enables the development of millions of new small, low-power AI systems.
                        It opens new worlds of embedded IoT applications, including entry-level Network Video Recorders (NVRs),
                         home robots, and intelligent gateways with full analytics capabilities.

              </Typography>
                    <Typography gutterBottom>
                        At just 70 x 45 mm, the Jetson Nano module is the smallest Jetson device. This production-ready System on
                        Module (SOM) delivers big when it comes to deploying AI to devices at the edge across multiple industries—from smart cities to robotics.
                        It delivers 472 GFLOPs for running modern AI algorithms fast. It runs multiple neural networks in parallel and processes several high-resolution
                        sensors simultaneously, making it ideal for applications like entry-level Network Video Recorders (NVRs), home robots, and intelligent gateways with full analytics capabilities.

              </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        got it
              </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}