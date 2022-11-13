// import { Component } from "react";
// import { connect } from "react-redux";


// class GrandChild extends Component {
//     render () {
//         console.log(this)
//         return (
//             <div className="d-flex">
//                 <button className='btn btn-primary m-2' onClick={()=> {this.props.action({type:"MINUS"})}}>Kurangi Power</button>
//                     <input className='mx-auto w-50 text-center' readOnly value={this.props.power}/>
//                 <button className="btn btn-primary m-2" onClick={()=> {this.props.action({type:"PLUS"})}}>Tambah Power</button>
//             </div>
//         )
//     }
// }
// const MapStateToProps = (state) => {
//     return {
//         power : state.power
//     }
// }

// const MapDispatchToProps = (dispatch) => {
//     handleMinus : () => dispatch({type:"MINUS"}),
//     handlePlus : () => dispatch({type:"PLUS"})
// }

// export default connect(MapStateToProps, MapDispatchToProps) (GrandChild);