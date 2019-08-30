import React, {Component} from 'react';

class Counter extends Component {
    // state = {
    //     value : this.props.counter.value,
    //     tags: [ ]
    // };

    styles ={

        fontSize : 20,
        fontWeight: "bold"
    };

    // constructor(props){
    //     super(props);
    //     this.handleIncrement=this.handleIncrement.bind(this);
    // }
    //
    // An alternative way to do so is to use array function
    // instead of handleIncrement() {} use handleIncrement =() => {}
    //
    // doHandleIncrement =() => {
    //     this.handleIncrement({id:1});
    // }

    // handleIncrement = () => {
    //     //console.log( product, this);
    //     this.setState({value : this.state.value + 1 });
    // }

    renderTags(){
        if(this.state.tags.length ===0) return <p>There are no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }
    render() {

       // let classes = this.getBadgeClasses();


        console.log('props',this.props);

        return (
            <React.Fragment>
                {this.props.children}
                {/*<span>{this.formatCount()}</span>*/}
            {/*<h1>Hello World</h1>*/}
                <span style= {this.styles }
                      className={this.getBadgeClasses()}>{this.formatCount()}</span>

            <button onClick = {() => this.props.onIncrement(this.props.counter)}
                    className = " btn btn-secondary btn-sm">Increment</button>

            <button onClick = {() =>this.props.onDelete(this.props.counter.id)}
                    className = " btn btn-danger btn-sm m-2">Delete</button>
                {/*{this.renderTags()}*/}
            </React.Fragment>
        ) ;

    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const count  = this.props.counter.value;
        //return this.state.count === 0 ? 'Zero' : this.state.count;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
