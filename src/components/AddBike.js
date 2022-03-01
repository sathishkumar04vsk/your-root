import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const AddBike = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [transmission, setTransmission] = useState("");
  const [engine_cc, setEngine_cc] = useState("");
  const [mileage, setMileage] = useState("");
  const [type, setType] = useState("");

  const addbikehandler = () => {
    const newBike = {
      name: name,
      image: image,
      price: price,
      transmission: transmission,
      engine_cc: engine_cc,
      mileage: mileage,
      type: type,
    };
    fetch("https://621dddd8849220b1fc879a8e.mockapi.io/bikes", {
      method: "POST",
      body: JSON.stringify(newBike),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/bikes_your_root"));
  };
  return (
    <div className="add-container">
      <div className="add-bike-container">
        <div className="add-bike">
          <h5>Please fill the form below to sell a bike</h5>

          <TextField
            onChange={(event) => setName(event.target.value)}
            variant="outlined"
            label="Bike Name"
          ></TextField>
          <TextField
            onChange={(event) => setImage(event.target.value)}
            variant="outlined"
            label="Image url"
          ></TextField>
          <div className="add-price">
            <TextField
              onChange={(event) => setPrice(event.target.value)}
              variant="outlined"
              label="Price"
            ></TextField>
            <TextField
              onChange={(event) => setTransmission(event.target.value)}
              variant="outlined"
              label="Transmission "
              placeholder="Ex:4 speed manual"
            ></TextField>
          </div>
          <TextField
            onChange={(event) => setEngine_cc(event.target.value)}
            variant="outlined"
            label="Engine_cc"
          ></TextField>
          <div className="add-mileage">
            <TextField
              onChange={(event) => setMileage(event.target.value)}
              variant="outlined"
              label="Mileage "
              placeholder="Ex:40kmpl"
            ></TextField>
            <TextField
              onChange={(event) => setType(event.target.value)}
              variant="outlined"
              label="Bike Type "
              placeholder="Ex:sport"
            ></TextField>
          </div>
          <div className="sell">
            <Button onClick={addbikehandler} className="sell-button">
              Sell
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
