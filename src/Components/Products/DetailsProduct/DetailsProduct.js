import React, { Component } from "react";
import {incdecQte , cancel ,addToCart} from "../../../Store/actions/actionCartUser";
import { connect } from "react-redux";

class Modal extends Component {
 
  render() {
    return (
      <div
        className="modal "
        id={`det${this.props.product.id}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.product.name}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={this.props.cancel}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-5">
                  <img
                    className="card-img"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/img/" +
                      this.props.product.category.name +
                      "/" +
                      this.props.product.pic
                    }
                    alt={this.props.product.name}
                  />
                </div>
                <div className="col-7">
                  <p>Modal body text goes here.</p>
                  <div className="price-wrap h6 mt-3">
                    $ {this.props.newPrice}/ {this.props.product.unite}
                  </div>

                  <div className="btn-group mt-3" role="group">
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() =>
                        this.props.incdecQte(
                          this.props.product.id,
                          this.props.newPrice,
                          "minus"
                        )
                      }
                    >
                      -
                    </button>
                    <span className="btn btn-light">{this.props.count}</span>
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() =>
                         this.props.incdecQte(
                          this.props.product.id,
                          this.props.newPrice,
                          "plus"
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="d-flex justify-content-end">
                    <h5>
                      Total:{" "}
                      <span className="price text-success">
                        {this.props.amount}
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                data-dismiss="modal"
                className="btn btn-info"
                onClick={() =>
                  this.props.addToCart(
                    this.props.refProduct,
                    this.props.amount,
                    this.props.count,
                    this.props.product.name,
                    this.props.product.category.name,
                    this.props.product.pic,
                    this.props.newPrice,
                    this.props.product.unite
                  )
                }
              >
                <i className="fa fa-shopping-cart cart"></i> Add To Cate
              </button>
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={this.props.cancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.cartR.count,
    amount: state.cartR.amount,
    refProduct: state.cartR.refProduct,
  };
};

const mapDispacheToProps = (dispatche) => {
  return {
    incdecQte: (ref, newPrice , operator) => dispatche(incdecQte(ref, newPrice , operator)),
    cancel: () => dispatche(cancel()),
    addToCart: (ref, amount, count, name, type, pic , price, unit) => dispatche(addToCart(ref, amount, count, name, type, pic , price, unit)),
     
  };
};

export default connect(mapStateToProps, mapDispacheToProps)(Modal);
