import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Card } from "./Card";

class AddtoCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      nameText: "",
      priceText: "",
      text: ""
    };
    this.removeCart = this.removeCart.bind(this)
  }

  handleSubmit = () => {
    this.state.data.push({
      name: this.state.nameText,
      price: this.state.priceText,
    });
    this.setState({
      priceText: "",
      nameText: ""
    })
  };

  removeCart(name, i) {
    let data = this.state.data.slice();
    data.splice(i, 1);
    this.setState({
      data
    });
  }

  render() {
    return (
      <div className="container">
        <button
          className="btn btn-primary my-5"
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Add New Item
        </button>
        <div className="collapse" id="collapseExample">
          <div className="card card-body bg-info">
            <div className="container">
              <div className="form-group">
                <label className="text-light">Product Name</label>
                <input
                  className="form-control"
                  aria-describedby="emailHelp"
                  name="name"
                  value={this.state.nameText}
                  onChange={(e) => {
                    this.setState({ nameText: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label className="text-light">Price</label>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  value={this.state.priceText}
                  onChange={(e) => {
                    this.setState({ priceText: e.target.value });
                  }}
                />
              </div>
              <button
                onClick={this.handleSubmit}
                type="submit"
                className="btn btn-light"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <Card data={this.state.data} removeCart={this.removeCart} />
      </div>

    );
  }
}

ReactDOM.render(<AddtoCart />, document.getElementById("root"));
