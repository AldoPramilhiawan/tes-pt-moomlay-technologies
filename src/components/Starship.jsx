import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./style.css";

const Starship = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/starships");
      setData(response.data.results);
      console.log(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {data.map((data) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg" id="card">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2"></div>
              <p className="text-gray-700 text-base">Name: {data.name}</p>
              <p className="text-gray-700 text-base">Model: {data.model}</p>
              <p className="text-gray-700 text-base">
                Manufacturer: {data.manufacturer}
              </p>
              <p className="text-gray-700 text-base">
                Cost In Credits: {data.cost_in_credits}
              </p>
              <p className="text-gray-700 text-base">Length: {data.length}</p>
              <p className="text-gray-700 text-base">
                Passenger: {data.passengers}
              </p>
              <p className="text-gray-700 text-base">
                max atmosphering speed: {data.max_atmosphering_speed}
              </p>
              <p className="text-gray-700 text-base">Crew: {data.crew}</p>
              <p className="text-gray-700 text-base">
                Cargo Capacity: {data.cargo_capacity}
              </p>
              <p className="text-gray-700 text-base">
                Consumables {data.consumables}
              </p>
              <p className="text-gray-700 text-base">
                Hyperdrive Rating: {data.hyperdrive_rating}
              </p>
              <p className="text-gray-700 text-base">MGLT: {data.MGLT}</p>
              <p className="text-gray-700 text-base">
                Starship Class: {data.starship_class}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Starship;
