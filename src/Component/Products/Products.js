import React, { Component } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { connect } from "react-redux";

class Products extends Component {
  render() {
    let { products, choosenCategories } = this.props;
    products = products.filter((product) => product.type === choosenCategories);
    return <div className="row">{this.showProducts(products)}</div>;
  }

  showProducts = (products) => {
    let result = null;
    result = products.map((product, index) => {
      return (
        <div className="col-4" key={index}>
          <ProductItem product={product} />
        </div>
      );
    });
    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    choosenCategories: state.choosenCategories,
  };
};

export default connect(mapStateToProps, null)(Products);
