import React from "react";

function FrontEnd (props) {
    return (
        <>
        <p> Halo ini komponen FrontEnd, Nama saya {props.name} !</p>
        <p> props warna adalah: {props.warna}</p>
        </>
    )
}

export default FrontEnd;