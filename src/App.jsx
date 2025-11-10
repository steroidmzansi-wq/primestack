import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        console.log("Data from backend:", res.data);
        setProducts(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(products);

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>UPA Products</h1>
        <table border="1" cellPadding="10" width="100%">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, index) => (
              <tr key={index}>
                <td>{p.Title}</td>
                <td>{p.Price === "NULL" ? "-" : p.Price}</td>
                <td>{p.Description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
