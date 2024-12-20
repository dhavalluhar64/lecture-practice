import axios from "axios";
import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Products_Card() {
  const [card2, setCard2] = useState([]);

  useEffect(() => {
    handleCardData();
  });

  const handleCardData = async () => {
    const resp = await axios.get("https://dummyjson.com/products");

    setCard2(resp.data.products);
  };

  return (
    <div className="container">
      <div className="row">
        {card2.map((items, idxx) => {
          return (
            <div className="col-md-3" key={idxx}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={items.thumbnail} />
                <Card.Body>
                  <Card.Title>Id: {items.id}</Card.Title>
                  <Card.Title>{items.title}</Card.Title>
                  <Card.Text>{items.description}</Card.Text>
                  <Card.Title>₹{items.price}</Card.Title>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products_Card;
