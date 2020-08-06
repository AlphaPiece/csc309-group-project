import React from "react";

import "./styles.css";

/* The Product Component */
class Product extends React.Component {
  render() {
    const {name, image, description} = this.props;

    return (
      <div className="product">
        <div className="product-info">
            <h1>{name}</h1>
            <h3>{description}</h3>
        </div>
        <img src={image} alt="" className="product-image"/>
      </div>
    );
  }
}

export default Product;
