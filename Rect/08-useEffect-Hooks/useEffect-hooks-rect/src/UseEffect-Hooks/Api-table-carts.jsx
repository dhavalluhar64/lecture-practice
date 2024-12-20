import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

import styles from "./Api-table-carts.module.css";

function Api_table_carts() {
  const [tData, setTData] = useState([]);

  useEffect(() => {
    handleTableData();
  });

  const handleTableData = async () => {
    const res = await axios.get(`https://dummyjson.com/carts`);

    //  console.log(res.data.carts)

    setTData(res.data.carts);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h3>table inside carts data show</h3>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Images</th>
                <th>Title</th>
                <th>Total</th>
                <th>DiscountPercentage</th>
                <th>DiscountedTotal</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {tData.map((itemsData) => {
                return itemsData.products.map((item, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{item.id}</td>
                      <td>
                        <img
                          src={item.thumbnail}
                          className={`${styles["imgAll"]}`}
                          alt="image-load.."
                        />
                      </td>
                      <td>{item.title}</td>
                      <td>Rs {item.total}</td>
                      <td>{item.discountPercentage} % OFF</td>
                      <td>Rs {item.discountedTotal}</td>
                      <td>Rs {item.price}</td>
                    </tr>
                  );
                });
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Api_table_carts;
