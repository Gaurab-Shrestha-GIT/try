import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000").then((res) => {
      console.log(res.data);
      setUserDetails(res.data);
    });
  }, []);
  return (
    <div>
      Hosting App Made by React Node and MySQL
      {userDetails.map((val) => (
        <div key={val.id}>{val.first_name}</div>
      ))}
    </div>
  );
};

export default Home;
