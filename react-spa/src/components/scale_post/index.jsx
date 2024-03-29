import React from "react";

export function Scaled(props){
    
    return (
        <div className="scaled">
            <h1>{props.header}</h1>
            <p>{props.post}</p>
        </div>
    );
}