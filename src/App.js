import "./App.css";

import { Navbar } from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import { Bikes } from "./components/Bikes";
import { CarsList } from "./components/CarsList";
import { AddYourvehicle } from "./components/AddYourvehicle";
import { Order } from "./components/Order";
import { Button } from "@mui/material";

function App() {
  const initialCars = [
    {
      vehicle_name: "BMW 3 Series GT",
      image:
        "https://gaadiwaadi.com/wp-content/uploads/2016/06/2017-BMW-3-Series-Gran-Turismo-Facelift-1-e1578319111387.jpg",
      price: "3590000",
      engine: "Automatic",
      fuel_type: "Diesel",
      driven_km: "5900km",
      year: "2019",
    },
    {
      vehicle_name: "Jaguar F-Pace",
      image:
        "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=http://cms.haymarketindia.net/model/uploads/modelimages/F-PaceModelImage.jpg",
      price: "6300000",
      engine: "Automatic",
      fuel_type: "Petrol",
      driven_km: "22000km",
      year: "2020",
    },
    {
      vehicle_name: "Audi A6",
      image:
        "https://imgd.aeplcdn.com/642x336/cw/ec/19796/Audi-A6-Right-Front-Three-Quarter-165485.jpg?wm=0&q=75",
      price: "4490000",
      engine: "Automatic",
      fuel_type: "Diesel",
      driven_km: "33430km",
      year: "2018",
    },
    {
      vehicle_name: "BMW 6 Series",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c5/2018_BMW_6er_Gran_Coupe_M_Sport%2C_F06.jpg",
      price: "6540000",
      engine: "Automatic",
      fuel_type: "Diesel",
      driven_km: "40000km",
      year: "2020",
    },
    {
      vehicle_name: "Bentley Flying Spur",
      image:
        "https://i.pinimg.com/originals/3e/3e/cd/3e3ecd62fec66ea1dc74f46eb83bbb0b.jpg",
      price: "1.3Cr",
      engine: "Fully Automatic",
      fuel_type: "Petrol",
      driven_km: "2000km",
      year: "2017",
    },
    {
      vehicle_name: "Mini Cooper",
      image:
        "https://cdn.motor1.com/images/mgl/B36GR/s1/2022-mini-cooper-hardtop-front.jpg",
      price: "3270000",
      engine: "Automatic",
      fuel_type: "Diesel",
      driven_km: "18932km",
      year: "2018",
    },
    {
      vehicle_name: "TATA Nexon EV",
      image:
        "https://cartechnewz.com/wp-content/uploads/2021/08/left-front-three-quarter1.jpeg",
      price: "1340000",
      engine: "Automatic",
      fuel_type: "Electric",
      driven_km: "3000km",
      year: "2021",
    },
    {
      vehicle_name: "Mahindra Thar",
      image:
        "https://www.drivespark.com/car-image/640x480x35/car/x8532489-mahindra_thar.jpg.pagespeed.ic.YIDAX4Fa9M.jpg",
      price: "1180000",
      engine: "Select",
      fuel_type: "Diesel",
      driven_km: "50003km",
      year: "2017",
    },
    {
      vehicle_name: "Range Rover",
      image:
        "https://www.cnet.com/a/img/resize/f23b310b7de717b4bf5659bed48d1d9c1aa52c93/hub/2021/10/22/6774b354-4042-457f-87cd-4e2fdfd393fc/2022-land-rover-range-rover-sv-23.jpg?auto=webp&width=1092",
      price: "3300000",
      engine: "Automatic",
      fuel_type: "Diesel",
      driven_km: "33288km",
      year: "2018",
    },
  ];

  const initialBikes = [
    {
      name: "KTM Rc 200",
      image:
        "https://media.zigcdn.com/media/model/2020/Mar/ktm-rc-200-right-side-view_600x400.jpg",
      price: "1.79 Lakh",
      transmission: "6 Speed Manual",
      engine_cc: "199.5cc",
      mileage: "31kmpl",
      type: "Sport",
    },
    {
      name: "TVS Jupiter",
      image:
        "https://media.zigcdn.com/media/model/2020/Apr/right-side-view-18050550_930x620.jpg",
      price: "71,296",
      transmission: "Automatic",
      engine_cc: "109.7cc",
      mileage: "64kmpl",
      type: "Scooter",
    },
    {
      name: "TVS Apache RTR 160 4v",
      image:
        "https://media.zigcdn.com/media/model/2021/Oct/tvs-apachertr-1604v-right-side-view_600x400.jpg",
      price: "1.45 Lakh",
      transmission: "5 Speed Manual",
      engine_cc: "164.9cc",
      mileage: "38kmpl",
      type: "Sport",
    },
    {
      name: "Royal Enfield Himalayan",
      image:
        "https://media.zigcdn.com/media/model/2021/Feb/right-side-view-1498061791_930x620.jpg",
      price: "2.22 Lakh",
      transmission: "5 Speed Manual",
      engine_cc: "411cc",
      mileage: "32.04kmpl",
      type: "Adventure",
    },
    {
      name: "Royal Enfield Classic 350",
      image:
        "https://media.zigcdn.com/media/model/2021/Sep/2021-classic-350_360x240.jpg",
      price: "1.87 Lakh",
      transmission: "5 Speed Manual",
      engine_cc: "349cc",
      mileage: "41.55kmpl",
      type: "Cruiser",
    },
    {
      name: "Jawa Perak",
      image:
        "https://imgd.aeplcdn.com/393x221/bw/models/jawa-perak-standard20191116153507.jpg?q=75",
      price: "2.08 Lakh",
      transmission: "6 Speed Manual",
      engine_cc: "334cc",
      mileage: "30kmpl",
      type: "Cruiser",
    },
    {
      name: "Harley-Devidson Sportstar S",
      image:
        "https://imgd.aeplcdn.com/393x221/n/cw/ec/108425/sportster-s-right-side-view.jpeg?isig=0&q=75",
      price: "15.51 Lakh",
      transmission: "6 Speed Manual",
      engine_cc: "1252cc",
      mileage: "20kmpl",
      type: "Cruiser",
    },
    {
      name: "Suzuki Intruder 150",
      image:
        "https://imgd.aeplcdn.com/393x221/bw/models/suzuki-intruder-150-standard--bs-vi20200320182536.jpg?q=75",
      price: "1.28 Lakh",
      transmission: "5 Speed Manual",
      engine_cc: "155cc",
      mileage: "42.5kmpl",
      type: "Cruiser",
    },
    {
      name: "Yamaha YZF R15 V4",
      image:
        "https://imgd.aeplcdn.com/393x221/n/cw/ec/103795/yzf-r15-right-side-view.jpeg?isig=0&q=75",
      price: "1.73 Lakh",
      transmission: "6 Speed Manual",
      engine_cc: "155cc",
      mileage: "45kmpl",
      type: "Sport",
    },
    {
      name: "Kawasaki Ninja 650",
      image:
        "https://imgd.aeplcdn.com/393x221/n/cw/ec/100211/right-front-three-quarter.png?isig=0&q=75",
      price: "6.68 Lakh",
      transmission: "6 Speed Manual",
      engine_cc: "649cc",
      mileage: "30kmpl",
      type: "Sport",
    },
    {
      name: "Suzuki Gixxer SF 250",
      image:
        "https://imgd.aeplcdn.com/1280x720/bw/models/suzuki-gixxer-sf-250-motogp-edition--bs-vi20200528161432.jpg?q=80",
      price: "1.83 Lakh",
      transmission: "6 Speed Manual",
      engine_cc: "249cc",
      mileage: "35kmpl",
      type: "Sport",
    },
    {
      name: "BMW G 310 R",
      image:
        "https://media.zigcdn.com/media/model/2021/Apr/right-side-view-238060477_930x620.jpg",
      price: "2.60 Lakh",
      transmission: "6 Speed Manual",
      engine_cc: "313cc",
      mileage: "32.46kmpl",
      type: "Sport",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path={"/cars_your_root"}>
          <CarsList initialCars={initialCars} />
        </Route>
        <Route path={"/"} exact>
          <Home />
        </Route>
        <Route path={"/bikes_your_root"}>
          <Bikes initialBikes={initialBikes} />
        </Route>
        <Route path={"/add_vehicle"}>
          <AddYourvehicle />
        </Route>
        <Route path={"/order"}>
          <Order />
        </Route>
        <Route path={"/card"}></Route>
      </Switch>
    </div>
  );
}

export default App;

const Home = () => {
  return (
    <div>
      <section className="home-section">
        <div class="home-container">
          <h2 className="home-title">BEST USED CARS IN CHENNAI</h2>
          <h1 className="home1-title">Luxury Cars At Best Price</h1>
          <p>For All Your Luxury & Exotic Automotive Needs</p>
        </div>
        <div className="home-more-button">
          <Button className="more-button">See More</Button>
        </div>
      </section>
      <section className="home-bike-section">
        <div class="home-container">
          <h2 className="home-title">BEST USED AND NEW BIKES IN CHENNAI</h2>
          <h1 className="home2-title">Luxury & Used Bikes At Best Price</h1>
          <p>For All Your Luxury & Exotic Automotive Needs</p>
        </div>
        <div className="home-more-button">
          <Button className="more-button">See More</Button>
        </div>
      </section>
    </div>
  );
};
