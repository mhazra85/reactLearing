import React from "react";
import './EmpDetails.css';

function EmpDetails(props) {  
    return(
        <>
        {props.details && <div><h2>Employee Details</h2>
        <ul> <li>
           Name: {props.details.name} <br />
           User Name: {props.details.email} <br />
           Pin: {props.details.address.street} <br />
           Geo: ( LAT: {props.details.address.geo.lat} LNG: {props.details.address.geo.lng} )
        </li></ul></div>}        
        </>
    );
}

export default EmpDetails;