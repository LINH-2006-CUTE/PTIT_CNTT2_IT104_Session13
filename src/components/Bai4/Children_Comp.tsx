import React, { Component } from "react";

interface ChildrenProps {
  name: string;
}

export default class Children_Comp extends Component<ChildrenProps> {
  render() {
    return (
      <div>
        <h3>Họ và tên bên component con: {this.props.name}</h3>
      </div>
    );
  }
}
