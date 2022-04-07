import axios from "axios";
import React, { useState } from "react";

export const useRates = () => {
  const [rates, setRates] = useState({
    loading: true,
    data: null,
  });

  React.useEffect(() => {
    async function fetchRates() {
      try {
        const apiUrl = `http://localhost:5000/api/get-rates`;
        const data = await axios.get(apiUrl);
        setRates({
          loading: false,
          data: data.data.data,
        });
      } catch (e) {
        console.log(e);
      }
    }
    fetchRates();
  }, []);

  return rates;
};
