import { Col, ButtonGroup, Button } from 'react-bootstrap';
import { useState } from 'react';
const filterButtons = ['All', 'Milks & Dairies', 'Coffees & Teas', 'Pet Foods', 'Meats', 'Vegetables', 'Fruits']

export default function ProductFilter({handleFilter}){
    const [filter,setFilter]=useState()
    function handleSelectedFilter(Appfilter){
        setFilter(Appfilter)
        handleFilter(Appfilter)
    }
    return(
        <Col xs={6} className="text-end">
        <ButtonGroup>
          {filterButtons.map((filterValue) => (
            <Button
              key={filterValue}
              onClick={() => handleSelectedFilter(filterValue)}
              variant="link"
              className={` text-bold  ${filter===filterValue?" text-success":"text-dark"}`}
              style={{ textDecoration: 'none' }}
            >
              {filterValue}
            </Button>
          ))}
        </ButtonGroup>
      </Col>
    )

}