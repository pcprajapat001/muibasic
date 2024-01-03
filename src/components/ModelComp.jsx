import { Button } from "@mui/material";
import { Box, Grid, Modal, Typography } from "@mui/material";
import React, { useState } from "react";

const ModalComp = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true); // Set open state to true to display the Modal
  };

  const handleClose = () => {
    setOpen(false); // Set open state to false to hide the Modal
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button onClick={handleOpen}>Open Modal</Button>
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "white",
              p: 4,
              outline: "none", // Ensure modal outline is removed
            }}
          >
            <Typography>This is Modal</Typography>
            <Button onClick={handleClose}>Cancel</Button>
          </Box>
        </Modal>
      </Grid>
    </Grid>
  );
};

export default ModalComp;
