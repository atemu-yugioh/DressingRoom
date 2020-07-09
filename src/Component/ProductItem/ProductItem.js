import React, { Component } from "react";
import { connect } from "react-redux";
import { actChoosenClothes } from "../../Action/action";

class ProductItem extends Component {
  render() {
    let { product } = this.props;
    let { name, imgSrc_jpg } = this.props.product;
    return (
      <div className="card p-2 my-2">
        <img src={imgSrc_jpg} alt="hinhanh" />
        <p>{name}</p>
        <button
          className="btn btn-info"
          onClick={() => this.props.changeClothes(product)}
        >
          Thử Đồ
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (Dispatch, props) => {
  return {
    changeClothes: (clothes) => {
      Dispatch(actChoosenClothes(clothes));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
