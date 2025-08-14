import React, {Component} from "react";

class State extends Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    handleMultiple = () => {
        this.setState({
            count: this.state.count * 2
        })
    }

    render(){
        const {count} = this.state;
        return (
            <div className='card'>
                <h3>Count is : {count}</h3>
                <div>
                    <button className="btn1" onClick={this.handleIncrement}>+</button>
                    <button className="btn1" onClick={this.handleDecrement} disabled={count==0 ? true : false}>-</button>
                    <button className="btn1" onClick={this.handleMultiple}>Multiple*2</button>
                </div>
            </div>
        )
    }
}

export default State;