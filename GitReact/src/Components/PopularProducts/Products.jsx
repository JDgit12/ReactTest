import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import ProductHeader from './ProductHeader';
import { useEffect, useState } from 'react';
import ProductReducer from "./ProductReducer"

const tag="Hot"
export default function Products() {
  const [products,setProducts]=useState([])
  const [cart,setCart]=useState({
    items: []
  });
  const [filterProd,setFilterProd]=useState([])

  useEffect(()=>{
    async function fetchData(){
      const resp=await fetch("http://localhost:5000/prod")
      const data=await resp.json()
      setProducts(data)
      setFilterProd(data)
      return data
    }
    fetchData()
  },[])

  function handleAddCart(prod) {
    setCart((prevState) => {
      console.log("prevState", prevState.items);
      const updatedItems = [...prevState.items];
      
      const existingProductIndex = updatedItems.findIndex((item) => item.id === prod.id);
  
      if (existingProductIndex >= 0) {
        updatedItems[existingProductIndex].quantity += 1;
      } else {
        updatedItems.push({
          id: prod.id,
          name: prod.name,
          price: prod.price,
          quantity: 1,
        });
      }
  
      return { ...prevState, items: updatedItems }; 
    });
  }
  function handleFilter(filter){
    if(filter==="All")
    return setFilterProd(products)
    console.log(filter,products.filter(product=>product.category===filter))
    setFilterProd(products.filter(product=>product.category===filter))
  }
  return (
    <Container className="mt-4">
      <ProductReducer products={products} length={cart.items.length}/>
      <ProductHeader handleFilter={handleFilter} /> 

      <Row className="justify-content-center g-2">
        {filterProd.map((product, index) => (
          <Col key={index} className="mb-2">
            <ProductCard product={product} tag={tag} handleAddCart={handleAddCart} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}