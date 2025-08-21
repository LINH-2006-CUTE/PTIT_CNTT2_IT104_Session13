import React, { Component } from "react";
import Children_Comp from "./Children_Comp";

interface ParentState {
  fullName: string;
}

export default class Parent_Comp extends Component<{}, ParentState> {
  state: ParentState = {
    fullName: "Nguyễn Văn Nam"
  };

  render() {
    return (
      <div>
        <h3>Họ và tên bên component cha: {this.state.fullName}</h3>
        <Children_Comp name={this.state.fullName} />
      </div>
    );
  }
}
