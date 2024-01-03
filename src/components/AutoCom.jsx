import { Autocomplete, Grid, TextField } from "@mui/material";
import React from "react";

const AutoCom = () => {
  const course = ["react", "modejs", "mern", "nextjs", "UI"];
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Autocomplete
          blurOnSelect={"true"}
          clearOnBlur={"true"}
          sx={{ width: 200 }}
          options={course}
          renderInput={(params) => (
            <TextField {...params} label="Select a course" />
          )}
        ></Autocomplete>
      </Grid>
    </Grid>
  );
};

export default AutoCom;
