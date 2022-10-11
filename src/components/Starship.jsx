import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import Navbar from "./Navbar";
import "./style.css";
import Create from "./Create";

const Starship = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(undefined);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/starships");
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
      <div>
        <Create />
      </div>
      {!loading ? <ReactLoading className="loading" type={"bars"} color={"#03fc4e"} height={100} width={100} /> : loading}
      <div className="grid grid-cols-4 gap-4">
        {data.map((data) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg" id="card">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2"></div>
              <p className="text-gray-700 text-base">
                <b>Name :</b> {data.name}
              </p>
              <p className="text-gray-700 text-base">
                <b>Model :</b> {data.model}
              </p>
              <p className="text-gray-700 text-base">
                <b>Manufacturer :</b> {data.manufacturer}
              </p>
              <p className="text-gray-700 text-base">
                <b>Cost In Credits :</b> {data.cost_in_credits}
              </p>
              <p className="text-gray-700 text-base">
                <b>Length :</b> {data.length}
              </p>
              <p className="text-gray-700 text-base">
                <b>Passenger :</b> {data.passengers}
              </p>
              <p className="text-gray-700 text-base">
                <b>max atmosphering speed :</b> {data.max_atmosphering_speed}
              </p>
              <p className="text-gray-700 text-base">
                <b>Crew :</b> {data.crew}
              </p>
              <p className="text-gray-700 text-base">
                <b>Cargo Capacity :</b> {data.cargo_capacity}
              </p>
              <p className="text-gray-700 text-base">
                <b>Consumables :</b> {data.consumables}
              </p>
              <p className="text-gray-700 text-base">
                <b>Hyperdrive Rating :</b> {data.hyperdrive_rating}
              </p>
              <p className="text-gray-700 text-base">
                <b>MGLT :</b> {data.MGLT}
              </p>
              <p className="text-gray-700 text-base">
                <b> Starship Class : </b> {data.starship_class}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button class="bg-green-500 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300" id="open-btn">
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Starship;
