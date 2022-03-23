import React, { useState } from "react";

export const useRates = () => {
  const [rates, setRates] = useState({
    loading: true,
    data: null,
  });

  React.useEffect(() => {
    async function fetchRates() {
      try {
        const apiUrl = `http://localhost:5000/get-rates`;
        const json = await fetch(apiUrl);
        const data = await json.json();
        setRates({
          loading: false,
          data: data.data,
        });
      } catch (e) {
        console.log(e);
      }
    }
    fetchRates();
  }, []);

  return rates;
};
