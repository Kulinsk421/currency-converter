import { default as axios } from "axios";

export function fetchRates() {
  const apiURL = `https://openexchangerates.org/api/latest.json?app_id=${process.env.RATES_API_KEY}`;
  return axios.get(apiURL);
}
