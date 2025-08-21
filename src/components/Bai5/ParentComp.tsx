import React, { Component } from "react";
import ChildrenComp from "./ChildrenComp";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ParentState {
  product: Product;
}

export default class ParentComp extends Component<{}, ParentState> {
  state: ParentState = {
    product: {
      id: 1,
      name: "Bưởi ba roi",
      price: 12000,
      quantity: 6
    }
  };

  render() {
    return (
      <div>
        <ChildrenComp product={this.state.product} />
      </div>
    );
  }
}
