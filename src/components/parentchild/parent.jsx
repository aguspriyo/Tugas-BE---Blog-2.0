import Child from './child';
const { Component } = require("react");

class Parent extends Component {

    //constructor method dan component
    // constructor() {
    //     super();

    //     this.state = {
    //         count : 0
    //     }

    //     this.handlerklik = this.handlerklik.bind(this)
    // }

    //state menyimpan sebuah nilai
    //state = {
    //         count : 0
    //     }

    state = {
        power : 100,
    }

    handlingPower = (kiriman) => {
        // console.log(kiriman.power);
        this.setState({
            power : kiriman
        })
        // console.log(kiriman);
    }

    // handlePower = (Kiriman) => {
    //     this.setState ({
    //         power : this.state.power + Kiriman
    //     })
    // }

    // handleChange = (Kiriman) => {
    //     //console.log("kiriman dari child:", Kiriman);
    //     this.setState({
    //         power : Kiriman,
    //     })

    // }
    
    //object > by data/value > object
    // rubick = {
    //     nama : "rubick",
    //     job : "mencuri skill"
    // }

    //State menggunakan arrow function
    // handlerklik =() => {
    //     this.setState ({
    //         count : this.state.count + 1
    //     })

    //     this.setState ({
    //         abc : "abc",
            
    //     })
    // }

    // handlerklik () {
    //     this.setState ({
    //         count : this.state.count + 1
    //     })

    //     this.setState ({
    //         abc : "abc",
            
    //     })
    // }

    render(){
        return (
            <div className="container mt-5 d-flex justify-content-center" style={{flexDirection:"column", alignItems: "center"}}>
                {/* <Child title={this.rubick.nama} desc={this.rubick.job}/> */}
                <p> Power balmond : {this.state.power}</p>
                {/* <Child change={this.handleChange}/> */}
                <Child handlingpower={this.handlingPower}/>
                {/* <button onClick={this.handlerklik} className="mx-auto btn btn-primary">
                    {this.state.count}
                </button> */}
            </div>
        )
    }
}

export default Parent;