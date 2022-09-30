import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./style.css";

const Planet = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/planets");
      setData(response.data.results);
      console.log(response.data.results);
      setLoading(true);
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
              <p className="text-gray-700 text-base">
                Rotation Period: {data.rotation_period}
              </p>
              <p className="text-gray-700 text-base">
                Orbital Period: {data.orbital_period}
              </p>
              <p className="text-gray-700 text-base">
                Diameter: {data.diameter}
              </p>
              <p className="text-gray-700 text-base">Climate: {data.climate}</p>
              <p className="text-gray-700 text-base">Gravity: {data.gravity}</p>
              <p className="text-gray-700 text-base">Terrain: {data.terrain}</p>
              <p className="text-gray-700 text-base">
                Surface Water: {data.surface_water}
              </p>
              <p className="text-gray-700 text-base">
                Population: {data.population}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Planet;
