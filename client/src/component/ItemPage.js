import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

const ItemPage = () => {
    const { id } = useParams()
    const [details, setDetails] = useState(null)
  
    useEffect(() => {
        fetch(`/item/${id}`)
          .then((res) => res.json())
          .then((resItems) => {
            setDetails(resItems.data);
            // console.log(resItems.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [id]);

      if (!details) {
        return <p>Loading...</p>;
      }

  return (
    <div>
      <p>{details.product?.name}</p>
      <p>{details.product?.benefits}</p>
      <Container key={details.id}>
      <Carousel>
      {details.product["image-urls"].map((item, i) => (
        <Carousel.Item key={i}>
           <img
            className="d-block w-100"
            src={item}
            alt={`Image ${i}`}
          />
        </Carousel.Item>
      ))}
      </Carousel>
      </Container>
    </div>
  )
}

export default ItemPage