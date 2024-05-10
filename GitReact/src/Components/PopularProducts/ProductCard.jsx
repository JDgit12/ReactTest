import React from 'react';
import { Card, Button } from 'react-bootstrap';
import logo from '../../image.png';
import { useState } from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
const [AddBtn,CompanyBy]=["Add","By"]

const ProductCard = ({ product, tag,handleAddCart }) => {
  const [btnDisable,setbtnDisable]=useState(false)
  const {  name,  price, rating, company, category } = product;

  return (
    <Card className="product-card rounded-4">
      {tag && (
        <div className="product-card-tag">
          {tag}
        </div>
      )}

      <div className="product-card-image-wrapper d-flex"> 
        <Card.Img
          src={logo}
          alt={name}
          className="img-fluid img-thumbnail border-0 product-card-image"
        />
        <small className="product-category text-muted ms-2">{category}</small> 
      </div>

      <Card.Body>
        <Card.Title>{name}</Card.Title>

        <div className="d-flex align-items-center gap-2"> 
          <AiOutlineHeart className="favorite-icon text-danger" /> 
          <span className="rating">{rating}</span> 
        </div>

        <div className="d-flex align-items-center gap-1"> 
          <span>{CompanyBy}</span>
          <span className="text-success">{company}</span>
        </div>

        <div className="d-flex justify-content-between mt-2"> 
          <span className="text-primary font-weight-bold">${price.toFixed(2)}</span> 

          <Button onClick={()=>{handleAddCart(product);setbtnDisable(true)}} variant="primary" className="d-flex align-items-center gap-1" disabled={btnDisable}>
            <AiOutlineShoppingCart /> 
            <span>{AddBtn}</span>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;