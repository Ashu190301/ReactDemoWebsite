import React from 'react';
import "./ProductList.css";
import Product from "../product/Product";
import {products} from "../../data";

function productList() {
  return (
    <div className="pl">
    <div className="pl-texts">
        <h1 className="pl-title">Create And Inspire</h1>
        <p className="pl-desc">
        vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga
        </p>
    </div>
        <div className="pl-list">
        {products.map((item)=>(

          <Product 
          key={item.id}
          img={item.img}
          link={item.link}  
          />

        ))}
           
        </div>
    </div>
  )
}

export default productList