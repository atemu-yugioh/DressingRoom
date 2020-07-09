import React, { Component } from "react";
import { connect } from "react-redux";
import { actChoosenType } from "../../Action/action";

class Categories extends Component {
  render() {
    let { categories } = this.props;
    return <div className="btn-group">{this.showCategories(categories)}</div>;
  }

  showCategories = (categories) => {
    let result = null;
    result = categories.map((categori, index) => {
      return (
        <button
          className="btn btn-primary"
          key={index}
          onClick={() => this.props.choosenType(categori.type)}
        >
          {categori.showName}
        </button>
      );
    });
    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = (Dispatch, props) => {
  return {
    choosenType: (type) => {
      Dispatch(actChoosenType(type));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
