import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./style.css";

const People = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/people");
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
        {loading ? loading : "Loading..."}
        {data.map((data) => (
          <div class="max-w-sm rounded overflow-hidden shadow-lg" id="card">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2"></div>
              <p class="text-gray-700 text-base">
                <b>Nama :</b> {data.name}
              </p>
              <p className="text-gray-700 text-base">
                <b>Height :</b> {data.height}
              </p>
              <p className="text-gray-700 text-base">
                <b>Mass :</b> {data.mass}
              </p>
              <p className="text-gray-700 text-base">
                <b>Hair Color :</b> {data.hair_color}
              </p>
              <p className="text-gray-700 text-base">
                <b>Skin Color :</b> {data.skin_color}
              </p>
              <p className="text-gray-700 text-base">
                <b>Eye Color :</b> {data.eye_color}
              </p>
              <p className="text-gray-700 text-base">
                <b>Birth Year :</b> {data.birth_year}
              </p>
              <p className="text-gray-700 text-base">
                <b>Gender :</b> {data.gender}
              </p>
              <p className="text-gray-700 text-base">
                <b>Homeworld :</b> {data.homeworld}
              </p>
            </div>
            <div class="px-6 pt-4 pb-2"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default People;
