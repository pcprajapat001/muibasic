import {
  Alert,
  Button,
  Grid,
  Snackbar,
  Slide,
  Box,
  LinearProgress,
} from "@mui/material";
import React from "react";

const SnakeBarMenu = () => {
  function TransitionRight(props) {
    return <Slide {...props} direction="right" />;
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Snackbar message="Thisi " open={true} autoHideDuration={2000} />
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      </Grid>
    </Grid>
  );
};

export default SnakeBarMenu;
