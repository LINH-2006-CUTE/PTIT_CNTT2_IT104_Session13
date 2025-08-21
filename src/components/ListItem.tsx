import { Component } from "react";

interface PropsType {
    content: string;
    

}


export default class ListItem extends Component<PropsType> {
    constructor (props: PropsType) {
        super(props);
    }
    render () {
        return (
            <>
                <h1>props</h1>
                <ul> 
                    <ListItem content="prop dc truyen tu cha"/>
                </ul>
            </>
        )
    }
}