import { Component } from "react";
interface FullName {
    nameUser: string;
}
class Exercises01 extends Component<{},FullName> {// k lấy props từ cha vì đã gán trực tiếp giá trị "Le nhat linh" cho state
//  constructor (props:FullName) {
//             super(props)
//             this.state = {nameUser: " Le Nhat Linh"}
//         }

state: FullName = {
    nameUser: "Le Nhat Linh"

};  
    render () {
        return (
            <>
       <h1>Xin chao, toi ten la {this.state.nameUser}</h1>
            </>
        )
    }
}

export default Exercises01;