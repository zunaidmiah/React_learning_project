import React , {Component} from "react";
import { FaAddressCard } from "react-icons/fa6";


class CardClass extends Component{
    render(){
        this.props.onChildData("This is data from CardClass component");
        return (
            <div className='card'>
                <h1>{this.props.title} <FaAddressCard /></h1>
            </div>
        )
    }
}

export default CardClass;