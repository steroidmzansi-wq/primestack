import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

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

  return (
    <Container style={{ padding: "40px", width: "100%" }}>
      <h1 className="text-center mb-5">UPA Products</h1>

      {/* Responsive grid */}
      <Row xs={1} sm={1} md={2} lg={3} className="g-4">
        {products.map((p, index) => {
          // Convert Title to match image filenames
          const cleanTitle = p.Title.trim(); // remove leading/trailing spaces
          const fileName = cleanTitle.replace(/[^a-zA-Z0-9_]/g, "_") + ".jpg";

          const imageUrl = `http://localhost:3000/images/${fileName}`;

          console.log("Image URL:", imageUrl);

          return (
            <Col key={index}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img variant="top" src={imageUrl} alt={p.Title} />
                <Card.Body>
                  <Card.Title className="fw-bold">{p.Title}</Card.Title>
                  <Card.Text style={{ color: "#555", fontSize: "0.9rem" }}>
                    {p.Description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Read More</small>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default App;
