import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const Accor = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Accordion>
          <AccordionSummary expandIcon={">"}>
            <Typography>What is mern stack?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
              eaque enim error atque alias quia id asperiores magnam ipsam!
              Laborum quis fuga natus eaque quos. Sunt obcaecati quae adipisci.
              Consequatur!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default Accor;
