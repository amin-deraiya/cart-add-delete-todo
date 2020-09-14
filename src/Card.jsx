import React, { Component } from "react";

export class Card extends Component {
  handleDelete = (item, i) => {
    this.props.removeCart(item, i)
  };
  render() {
    return (
      <div className="row">
        {
          this.props.data.map((e, i) => (
            <div className="col-md-3">
              <div class="card bg-dark text-light my-3">
                <div class="card-body">
                  <h5 class="card-title" name="name">Name:{e.name}</h5>
                  <p class="card-text" price="price">Price: {e.price}</p>
                  <button onClick={() => { this.handleDelete(e, i) }} key={i} className="btn btn-danger btn-sm border border-dark">Delete</button>
                </div>
              </div>
            </div >
          ))
        }
      </div>
    );
  }
}
