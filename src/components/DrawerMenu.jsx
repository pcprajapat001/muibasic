import {
  Button,
  Drawer,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
} from "@mui/material";
import React, { useState } from "react";

const DrawerMenu = () => {
  const [open, Setopen] = useState(false);
  const course = ["react", "modejs", "mern", "nextjs", "UI"];
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button variant="contained" onClick={() => Setopen(true)}>
          Open
        </Button>
        <Drawer open={open} onClose={() => Setopen(false)}>
          <List>
            {course.map((course) => {
              return (
                <ListItemButton onClick={() => Setopen(false)}>
                  <ListItemText primary={course} />
                </ListItemButton>
              );
            })}
          </List>
        </Drawer>
      </Grid>
    </Grid>
  );
};

export default DrawerMenu;
