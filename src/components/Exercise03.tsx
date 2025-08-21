import { Component } from 'react'


interface Info {
    id: number;
    nameUser: string;
    address: string;
}

interface State {
    list : Info[];
}

export default class Exercise03 extends Component<{}, State> {
    state: State = {
        list :[
        {id: 1 , nameUser: "Le Nhat Linh", address: "Ha Noi"},
        {id:2, nameUser: "Ha Minh Trang", address: "Ha Noi"},
        {id:3, nameUser: "Pham Phuong Anh", address: "Ha Noi"}
        ]
    }
    
  render() {
    return (
        <div>
                <div>Thong tin</div>

      <table border={2}>
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>

            </tr>
            
        </thead>

        <tbody>
            {this.state.list .map((item) => (
                <tr key={item.id}>
                <td></td>
                <td></td>
                <td></td>
                </tr>
            ))}
           

            
        </tbody>
      </table>
        </div>
  
    )
  }
}
