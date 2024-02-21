import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./cardDetails.css";

const CardDetails = ({ data }) => {
  // console.log("carddetails prop",props)
  //   console.log("carddetails render", data);

  return (
    <div className="card-container">
      {data?.map((data) => {
        const { id, category, description, image, title, price, rating } = data;
        const { count, rate } = rating;
        return (
          <>
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                style={{ width: "18rem", height: "50%", overflow: "hidden" }}
                src={image}
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text style={{height:"100px"}}>
                  {description.slice(0, 80)}
                  {price}
                </Card.Text>
                <div className="button-container">
                  <Button className="btn-1" href="#" variant="success">
                    {rate} *
                  </Button>

                  <Button className="btn-2"
                    href="https://nextstep.tcs.com/campus/#/"
                    variant="primary"
                  >
                    Buy Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default CardDetails;
