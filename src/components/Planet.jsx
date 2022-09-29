import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Planet = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/planets");
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
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2"></div>
              <p class="text-gray-700 text-base">{data.name}</p>
            </div>
            <div class="px-6 pt-4 pb-2"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Planet;
