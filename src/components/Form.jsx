import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
const Form = () => {
  const [inputs, SetInputs] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
    courses: "",
    gender: "",
  });

  //input change function
  const handleChange = (e) => {
    SetInputs((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };

  // form handling

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: 5 }}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
            <TextField
              name="name"
              onChange={handleChange}
              value={inputs.name}
              sx={{ marginBottom: 2 }}
              type="text"
              variant="outlined"
              placeholder="Enter Name"
            />
            <br />
            <TextField
              name="email"
              onChange={handleChange}
              value={inputs.email}
              sx={{ marginBottom: 2 }}
              type="email"
              variant="outlined"
              placeholder="Enter Email"
            />
            <br />
            <TextField
              name="password"
              onChange={handleChange}
              value={inputs.password}
              sx={{ marginBottom: 2 }}
              type="password"
              variant="outlined"
              placeholder="Enter Passoword"
            />

            <br />

            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={() =>
                      SetInputs((preState) => ({
                        ...preState,
                        terms: !inputs.terms,
                      }))
                    }
                  />
                }
                label="I agree to the terms and conditions"
              />
            </FormGroup>

            <br />
            <FormControl fullWidth>
              <InputLabel id="menu"></InputLabel>
              <Select
                name="courses"
                onChange={handleChange}
                label="courses"
                value={inputs.courses}
              >
                <MenuItem value={"mongodb"}> MongoDB</MenuItem>
                <MenuItem value={"React"}> React</MenuItem>
                <MenuItem value={"CSS"}> CSS</MenuItem>
                <MenuItem value={"HTML"}> HTML</MenuItem>
              </Select>
            </FormControl>

            <br />
            <FormControl fullWidth>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                name="gender"
                defaultValue={"male"}
                onChange={handleChange}
              >
                <FormControlLabel value={"male"} control={<Radio />} />
                <FormControlLabel value={"female"} control={<Radio />} />
                <FormControlLabel value={"others"} control={<Radio />} />
              </RadioGroup>
            </FormControl>
            <Button type="submit">Submit</Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Form;

// Notes---------------------

// how you can understand the concept of preState

// import React, { useState } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
// Using functional update to access the previous state
//     setCount((prevCount) => prevCount + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

// export default Counter;
