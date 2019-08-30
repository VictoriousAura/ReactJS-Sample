import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component{

    componentDidMount() {
        console.log(this.props.counters.map(counter => (console.log("MyValue "+counter.id))))
    }

    render() {
        return (

            <div>
                <button onClick={this.props.onReset}
                        className = " btn btn-primary btn-sm m-2">
                    Reset
                </button>

                {this.props.counters.map(counter => (
                    <Counter key = {counter.id}
                             // value = {counter.value}
                             onDelete ={this.props.onDelete}
                             onIncrement = {this.props.onIncrement}
                             //
                        counter = {counter}
                    >
                        <h4> Counter #{counter.id}</h4>
                    </Counter>))

                }
            </div>
        );
}

}

export default Counters;
