import React from "react";
import'./PhoneCover.css'
export const PhoneCover = ({image= ""}) => {
    return (
        <div className="phone-cover"style={{backgroundImage:`url(${image})`}}/>
    )
}