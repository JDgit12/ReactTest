import AnalyticData from "./AnalyticData";
import { Container, Row } from 'react-bootstrap'; 
import logo from '../../img.png';
const product =[
    {
      image: logo,
      name: 'Seeds of Change Organic Quinoa',
      description: 'Organic quinoa that is high in fiber and protein.',
      price: 29.99,
      rating: 4,
      category: 'Snack',
      company: 'Nestle',
      addedDate: '2023-12-01',
      itemsSold: 150,
    },
    {
      image: logo,
      name: 'All Natural Italian-Style',
      description: 'Authentic Italian-style meal with fresh ingredients.',
      price: 25.99,
      rating: 5,
      category: 'Hodo Foods',
      company: 'Stouffer',
      addedDate: '2022-01-10',
      itemsSold: 200,
    },
    {
      image: logo,
      name: 'Blue Diamond Almonds',
      description: 'Delicious roasted almonds for snacking.',
      price: 22.49,
      rating: 3,
      category: 'Pet Foods',
      company: 'NestFood',
      addedDate: '2023-11-20',
      itemsSold: 300,
    }]
export default function FeatureProduct(){
    const LastestAdded=[...product]
    LastestAdded.sort(function(a, b) {
        // console.log("ASD",a,b)
        return new Date(b.addedDate) - new Date(a.addedDate);
    });
    LastestAdded.slice(0, 3);
    // console.log("rrrrrr",LastestAdded)
    const topSelling=[...product]
    topSelling.sort(function(a, b) {
        // console.log("ASD",a,b)
        return b.itemsSold-a.itemsSold;
    });
    topSelling.slice(0, 3);

    const trending=[...product]
    trending.sort(function(a, b) {
        // console.log("ASD",a,b)
        return b.rating-a.rating;
    });
    trending.slice(0, 3);
    return(
        <Container className="my-5"> 
              <Row className="justify-content-center g-3"> 
                  <AnalyticData product={topSelling} title="Top Selling"/>
                  <AnalyticData product={trending} title="Trending Product"/>

                  <AnalyticData product={LastestAdded} title="Recently Added"/>
                  <AnalyticData product={LastestAdded} title="Top Rated"/>
 
              </Row>
            </Container>
 
    )
}