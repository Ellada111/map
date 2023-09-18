import React from "react";
import MainPages from "../components/pages/MainPages";
import PhoneCover  from "../components/PhoneCover/PhoneCover"
import './phoneitem.css'

export function phoneitem ({phone}) {
    return (
        <div className="phoneitem">
            <PhoneCover image ={phone.image}/>
            <div className="phoneitem_price"> {phone.price}  </div>
                <span className="phoneitem_title">{phone.title}</span>
          
        </div>
    )
}

