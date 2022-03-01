import { Cars } from "./Cars";

export const CarsList = ({ initialCars }) => {
  return (
    <div className="cars-container">
      {initialCars.map(
        (
          { vehicle_name, image, price, engine, fuel_type, driven_km, year },
          index
        ) => (
          <Cars
            key={index}
            vehicle_name={vehicle_name}
            image={image}
            price={price}
            engine={engine}
            fuel_type={fuel_type}
            driven_km={driven_km}
            year={year}
          />
        )
      )}
    </div>
  );
};
