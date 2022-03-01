import { TextField } from "@mui/material";
import { Button } from "@mui/material";

export const AddCar = () => {
  return (
    <div className="add-car-container">
      <div className="add-car">
        <h5>Please fill the form below to sell a car</h5>
        <TextField variant="outlined" label="Seller Name"></TextField>
        <TextField variant="outlined" label="Car Name"></TextField>
        <TextField variant="outlined" label="Image"></TextField>
        <TextField variant="outlined" label="Price"></TextField>
        <div className="Engine-type">
          <TextField
            variant="outlined"
            label="Engine Type "
            placeholder="Ex:Automatic"
          ></TextField>
          <TextField
            variant="outlined"
            label="Fuel Type"
            placeholder="Ex:Petrol  "
          ></TextField>
        </div>
        <div className="driven">
          <TextField variant="outlined" label="Driven_km"></TextField>
          <TextField variant="outlined" label="Build Year"></TextField>
        </div>
        <div className="sell">
          <Button className="sell-button">Sell</Button>
        </div>
      </div>
    </div>
  );
};
