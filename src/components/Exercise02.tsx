import { Component } from "react";
interface Info {
    id: number;
    name: string;
    date: string;
    address: string;
}

class Exercise02 extends Component<{},Info> {
    state: Info = {
        id: 1,
        name: "Le Nhat Linh",
        date: "19/04/2006",
        address: "Ha Noi"
    }
  render () {
        return (
            <>
            <h2>Thong tin ca nhan</h2>
            <p>id: {this.state.id} <br />
                name: {this.state.name} <br />
                date: {this.state.date} <br />
                address: {this.state.address}

            </p>

        </>
    )
}
}
export default Exercise02