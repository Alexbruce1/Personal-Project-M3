import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';



const apiKey = '322746-Apex-5CWVBUFX';
const baseUrl = 'tastedive.com/read/api';



const CardContainer = () => {
  return(
    <div className="outer-container">
        {/* <img
          src={backgroundImg}
          className="parallax-image"
          alt="" /> */}

      <div>Things</div>
      <div>extra stuff</div>
      <div>items</div>
      <div>data</div>
      <div>info</div>
      <div>more stuff</div>
      <div className='card-container'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default CardContainer;