import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const Order = () => {
  const history = useHistory();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [building, setBuilding] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");

  const orderhandler = () => {
    const newOrder = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      building: building,
      address: address,
      pincode: pincode,
    };
    fetch("https://621dddd8849220b1fc879a8e.mockapi.io/booking", {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/card"));
  };

  return (
    <div className="order-container">
      <TextField
        onChange={(event) => setFirstname(event.target.value)}
        variant="outlined"
        label="First name"
      ></TextField>
      <TextField
        onChange={(event) => setLastname(event.target.value)}
        variant="outlined"
        label="Last name"
      ></TextField>
      <TextField
        onChange={(event) => setEmail(event.target.value)}
        variant="outlined"
        label="Email Id"
      ></TextField>
      <TextField
        onChange={(event) => setBuilding(event.target.value)}
        variant="outlined"
        label="Building"
        placeholder="EX:flat no:22,Opposite:HDFC bank"
      ></TextField>
      <TextField
        onChange={(event) => setAddress(event.target.value)}
        variant="outlined"
        label="Address"
      ></TextField>
      <TextField
        onChange={(event) => setPincode(event.target.value)}
        variant="outlined"
        label="Pincode"
      ></TextField>
      <div className="order">
        <Button onClick={orderhandler} className="order-button">
          Order Now
        </Button>
      </div>
    </div>
  );
};
