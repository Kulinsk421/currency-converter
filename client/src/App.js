import { useState, useEffect } from "react";

const App = () => {
  const [Bdata, setBData] = useState({});

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBData(data);
        console.log(data);
      });
  }, []);

  return <div></div>;
};

export default App;
