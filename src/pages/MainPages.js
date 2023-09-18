import React from "react";
import Header from "../components/headers/Header";
import PhoneCover from "../components/PhoneCover/PhoneCover";
import {phoneitem} from "../components/phone-item/phoneitem";
const phones= [
    { 
      id: 1,
      title : 'Iphone 15 Pro',
      image: '/assets/images/8608d98de7145845514d7ec0c4ee1992 (1).jpg',
      price: '0'
    },
    {
      id: 2,
      title : 'Iphone 15 Pro Max',
      image: '/assets/images/b7851e6165ff806b31ae42f66cec46c6.jpg',
      price: '0'
     },
     {
      id: 3,
      title : 'Iphone 14 Pro Max',
      image: '/assets/images/63ccea961faf68e3d9e4b6f1e4d845c8.jpg',
      price: '102 120'
     },
     {
      id: 4,
      title : 'Iphone 14 Pro ',
      image: '/assets/images/1-500x500.jpg',
      price: '92352'
     },
     {
      id: 5,
      title : 'Iphone 14 Plus ',
      image: '/assets/images/ebc497dc62e4073a57b0b77c5d0fa938.jpg',
      price: '74592'
    },
    {
      id: 6,
      title : 'Iphone 14 ',
      image: '/assets/images/Без названия (1).jpg',
      price: '71040'
    },
    {
      id: 7,
      title : 'Iphone 13 ',
      image: '/assets/images/2.jpg',
      price: '62160'
    },
    {
      id: 8,
      title : 'Iphone 13 mini ',
      image: '/assets/images/6e3e78955a9bae71eb87d3583a2c7a7b.png',
      price: '61272'

    },
  ]


export function MainPages ()  {
    return (
        <div className="main-page">
            {phones.map (phone=><phoneitem phone = {phone} key ={phone.id}/> )}
        </div>
    )
}

