import {
  Grid,
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

const DialogBox = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Dialog open={true}>
          <DialogTitle>Are you sure!!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure to delete this item?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button>cancle</Button>
            <Button>Delete</Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  );
};

export default DialogBox;
