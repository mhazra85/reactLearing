import React from "react";
import './Car.css';

function Car(props) {
    return(
        <h2>This is a {props.color} Car component</h2>
    );
}

export default Car;