import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

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
      <div>
        {data.map((data) => (
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            {/* <img class="w-full" src={data.url} alt="" /> */}
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2"></div>
              <p class="text-gray-700 text-base">{data.name}</p>
              <p class="text-gray-700 text-base">{data.passenger}</p>
              <p class="text-gray-700 text-base">
                {data.max_atmosphering_speed}
              </p>
              <p class="text-gray-700 text-base">{data.cargo_capacity}</p>
            </div>
            <div class="px-6 pt-4 pb-2"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Starship;
