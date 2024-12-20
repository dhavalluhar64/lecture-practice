import axios from "axios";
import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Api_card() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    handleCard();
  });

  const handleCard = async () => {
    const res = await axios.get(`https://dummyjson.com/carts`);

    // console.log(res.data.carts);

    setCard(res.data.carts);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {card.map((data1) => {
            return data1.products.map((data2, idx2) => {
              return (
                <div className="col-md-3 mb-2" key={idx2}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={data2.thumbnail} />
                    <Card.Body>
                      <Card.Title>{data2.title}</Card.Title>
                      <Card.Title>{data2.id}</Card.Title>
                      <Card.Title>₹ {data2.price}</Card.Title>
                      <Button variant="warning">Add to cart</Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            });
          })}
        </div>
      </div>
    </>
  );
}

export default Api_card;
