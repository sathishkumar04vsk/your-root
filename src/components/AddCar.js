import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const AddCar = ({ cars, setCars }) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [engine, setEngine] = useState("");
  const [fuel_type, setFuelType] = useState("");
  const [drivekm, setDrivenkm] = useState("");
  const [year, setYear] = useState("");

  return (
    <div className="add-container">
      <div className="add-car-container">
        <div className="add-car">
          <h5>Please fill the form below to sell a car</h5>
          <TextField
            onChange={(event) => setName(event.target.value)}
            variant="outlined"
            label="Car Name"
          ></TextField>
          <TextField
            onChange={(event) => setImage(event.target.value)}
            variant="outlined"
            label="Image"
          ></TextField>
          <TextField
            onChange={(event) => setPrice(event.target.value)}
            variant="outlined"
            label="Price"
          ></TextField>
          <div className="Engine-type">
            <TextField
              onChange={(event) => setEngine(event.target.value)}
              variant="outlined"
              label="Engine Type "
              placeholder="Ex:Automatic"
            ></TextField>
            <TextField
              onChange={(event) => setFuelType(event.target.value)}
              variant="outlined"
              label="Fuel Type"
              placeholder="Ex:Petrol  "
            ></TextField>
          </div>
          <div className="driven">
            <TextField
              onChange={(event) => setDrivenkm(event.target.value)}
              variant="outlined"
              label="Driven_km"
            ></TextField>
            <TextField
              onChange={(event) => setYear(event.target.value)}
              variant="outlined"
              label="Build Year"
            ></TextField>
          </div>
          <div className="sell">
            <Button
              onClick={() => {
                const newCar = {
                  vehicle_name: name,
                  image: image,
                  price: price,
                  engine: engine,
                  fuel_type: fuel_type,
                  driven_km: drivekm,
                  year: year,
                };

                fetch("https://621dddd8849220b1fc879a8e.mockapi.io/cars", {
                  method: "POST",
                  body: JSON.stringify(newCar),
                  headers: { "Content-Type": "application/json" },
                }).then(() => history.push("/cars_your_root"));
              }}
              className="sell-button"
            >
              Sell
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
