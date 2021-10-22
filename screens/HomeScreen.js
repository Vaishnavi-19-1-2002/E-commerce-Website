import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Slider from "react-slick";
import { tSTypeAssertion } from '../../../../../../AppData/Local/Microsoft/TypeScript/4.4/node_modules/@babel/types/lib/index';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const d = new Date();
  let month = d.getMonth();
  let date = d.getDate();
  let season="";

  if(month >= 1 && month <= 4) {
    season = "Summer";
  } else if(month >= 5 && month <= 8) {
    season = "Monsoon";
  } else {
    season = "Winter";
  }

  function festival(date, month) {
   if(date === 22) {
    return (<div className="row center row-center">
      {products.map((product) => {                   
        // return product.tag === 'festival' && <Product key={product._id} product={product}></Product>  
        if((product.tag).indexOf('festival') > -1) {
          return <Product key={product._id} product={product}></Product>
        }
      })}
    </div> 
    )          
    } 
  }

  return (
    <div>
       <div className="frontpage">
        <img src="../images/img1.png" alt="img"></img>
        <div className="info col-lg-5 col-sm-8">
          <span >60% Discount</span>
          <h1>Winter Collection</h1>
          <p>Best Collection by 2021!</p>
        </div> 
  </div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <div>
            <center><h1>{season} Collection</h1></center>
              <div className="row center row-center">
                {products.map((product) => (
                  product.tag === season && <Product key={product._id} product={product}></Product>         
                ))}        
              </div>       
          </div>

          <div>
            <center><h1>Festive Collection</h1></center>
            {festival(date, month)}
            <script>
                
            </script>
          </div>

          {/* <div className="row center row-center">
            {products.map((product) => (
               product.tag === "festival" && <Product key={product._id} product={product}></Product>         
            ))}        
          </div> */}
        </div>
      )
    }
    
    </div>
  );
}