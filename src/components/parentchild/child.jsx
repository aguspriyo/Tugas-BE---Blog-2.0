import Balmond from '../../asset/img/balmond.jpg'
import { Component } from "react"
// import { useState } from "react"

class Child extends Component  {

    state = {
        power : 100,
    }

    kirimpower = () => {
        this.props.handlingpower (this.state.power)
    }

    handlerminus = () => {
        this.setState({
             power: this.state.power - 1
        }, () => this.kirimpower(this.state.power))
    }

    handlerplus = () => {
        this.setState({
            power: this.state.power + 1
        }, () => this.kirimpower(this.state.power))
        console.log(this.state.power);
    }

    render () {
    return (
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={Balmond} alt="img"/>
                <div className="card-body">
                    <h5 className="card-title">title</h5>
                    <p className="card-text">deskripsi</p>
                    <div className="d-flex">
                        <button className='btn btn-primary m-2' onClick={this.handlerminus}>Kurangi Power</button>
                        <input className='mx-auto w-50 text-center' readOnly value={this.state.power}/>
                        <button className="btn btn-primary m-2" onClick={this.handlerplus}>Tambah Power</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Child;