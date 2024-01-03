import React, { useState } from "react";
import {
  AppBar,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";

const Nav = () => {
  const [value, SetValue] = useState(0);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AppBar>
          <Toolbar>
            <Typography variant="h5">logo</Typography>
            <Tabs
              sx={{ marginLeft: "auto" }}
              textColor="inherit"
              indicatorColor="secondary"
              value={value}
              onChange={(e, val) => SetValue(val)}
            >
              <Tab label="Home" />
              <Tab label="About" />
              <Tab label="Contact" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  );
};

export default Nav;
