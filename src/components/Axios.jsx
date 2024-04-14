import React, { useState } from "react";
import axios from "axios";
import "./Axios.css";

const Axios = () => {
  const [data, setdata] = useState([]);

  const getAllProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setdata(response.data);
  };

  console.log("The data right now : ", data);
  return (
    <center>
      <div>
        <h1>Special Offer</h1>
        <button onClick={getAllProducts}>Search Items</button>
        <div className="item-container">
          {data.map((item) => {
            return (
              <div className="items">
                <img src={item.image} alt={item.category} />
                <br></br>
                <h3>{item.title}</h3>
                <p>
                  <b>MRP : {item.price}</b>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </center>
  );
};

export default Axios;
