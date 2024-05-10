import { Row, Col } from 'react-bootstrap';
import ProductFilter from "./ProductFilter"
const popProdHeader="Popular Products"
export default function ProductHeader({handleFilter}) {

  return (
    <Row className="mb-3 justify-content-between align-items-center">
      
      <Col xs={6}>
        <h3>{popProdHeader}</h3>
        
      </Col>
      <ProductFilter handleFilter={handleFilter}/>
    </Row>
  )
}