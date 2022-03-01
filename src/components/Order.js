import { TextField } from "@mui/material";
import { Button } from "@mui/material";

export const Order = () => {
  return (
    <div className="order-container">
      <TextField variant="outlined" label="First name"></TextField>
      <TextField variant="outlined" label="Last name"></TextField>
      <TextField variant="outlined" label="Email Id"></TextField>
      <TextField variant="outlined" label="Street"></TextField>
      <TextField variant="outlined" label="Address"></TextField>
      <TextField variant="outlined" label="Pincode"></TextField>
      <div className="order">
        <Button className="order-button">Order Now</Button>
      </div>
    </div>
  );
};
