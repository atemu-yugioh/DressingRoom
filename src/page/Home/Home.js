import React, { Component } from "react";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import Categories from "../../Component/Categories/Categories";
import Products from "../../Component/Products/Products";
import Model from "../../Component/Model/Model";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <Categories />
              <Products />
            </div>
            <div className="col-6">
              <Model />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
