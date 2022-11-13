import { Component, setState } from "react";

class Lifecycle extends Component {

    //constructor
    constructor () {
        super();

        this.state = {
            count : 0
        }
        console.log("constructor");
    }

    componentDidMount(){
        console.log("componentDidMount");
        // getAPI ()
    }

    shouldComponentUpdate(nextProps, nextState){
    if (nextState.count != this.state.count) {
        return true;
    }
    return false ;
        // console.group("shouldComponentUpdate");
        // console.log("state lama", this.state.count);
        // console.log("state baru", nextState);
        // console.groupEnd();
        // return true;
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    tambah = () => {
        this.setState ({
            count : this.state.count + 1
        })
    }

    render () {
        console.log("render");
        return (
            <div className="container d-flex mt-5">
                <button className="mx-auto btn btn-primary" onClick={this.tambah}>Aku sudah di klik : {this.state.count}</button>
            </div>
        )
    }
}

export default Lifecycle;