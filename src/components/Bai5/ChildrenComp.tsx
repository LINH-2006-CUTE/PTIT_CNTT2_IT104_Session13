import React, { Component } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ChildrenProps {
  product: Product;
}

export default class ChildrenComp extends Component<ChildrenProps> {
  render() {
    const { id, name, price, quantity }=this.props.product;

    return (
      <div>
        <h3>Dữ liệu trong component con</h3>
        <p>Id: {id}</p>
        <p>Product name: {name}</p>
        <p>Price:{price.toLocaleString()}</p>  {/*chuyển đổi số thành chuỗi*/}
        <p>Quantity:{quantity}</p>
      </div>
    );
  }
}
