import { useEffect, useState } from "react";
import axios from "axios";

const useStatistics = () => {
  const [statsData, setStatsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const statsUrl = `http://localhost:5000/api/get-statistics`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(statsUrl);
        setStatsData(response.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [statsUrl]);

  return {
    statsData,
    loading,
  };
};

export default useStatistics;
