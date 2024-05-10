import { Container, Row, Col } from 'react-bootstrap'; 
import { AiOutlineHeart } from 'react-icons/ai';


export default function AnalyticData({product,title}){
    console.log(product)
    return(

                 <Col  xs={12} sm={6} md={3}> 
                 <h5>{title}</h5>
                    {product.map((data, rowIndex) => (
                      <div key={rowIndex} className="d-flex align-items-center my-2"> 
                        <img
                          src={data.image}
                          alt={data.name}
                          className="small-image" 
                        />
                        <div className="ms-3"> 
                          <b><small>{data.name}</small></b>
                          <div className="d-flex align-items-center gap-5">
                  <AiOutlineHeart className="favorite-icon" />
                  <span className="rating">({data.rating})</span>
                </div>
                          <span className="text-primary font-weight-bold">${data.price.toFixed(2)}</span> 
                        </div>
                      </div>
                    ))}
                  </Col>
                
            
          );
        
}