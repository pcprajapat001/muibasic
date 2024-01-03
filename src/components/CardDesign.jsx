import React, { useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";

const CardDesign = () => {
  const [open, Setopen] = useState(false);
  return (
    <Grid container spacing={2} align="center">
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            component={"img"}
            height="140"
            image="https://plus.unsplash.com/premium_photo-1701094772162-7f30f1d1aebd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="test_image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Web Design
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              incidunt?
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button onClick={() => Setopen(true)} size="small">
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            component={"img"}
            height="140"
            image="https://plus.unsplash.com/premium_photo-1701094772162-7f30f1d1aebd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="test_image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Web Design
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              incidunt?
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button onClick={() => Setopen(true)} size="small">
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            component={"img"}
            height="140"
            image="https://plus.unsplash.com/premium_photo-1701094772162-7f30f1d1aebd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="test_image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Web Design
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              incidunt?
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button onClick={() => Setopen(true)} size="small">
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={4}>
        <Dialog open={open} onClose={() => Setopen(false)}>
          <DialogTitle>Are you sure!!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure to delete this item?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => Setopen(false)}>cancel</Button>
            <Button>Delete</Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  );
};

export default CardDesign;
