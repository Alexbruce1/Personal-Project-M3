import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';


const CardContainer = (props) => {
  const postData = props.media.map(item => {
    return <Card
      name={item.name}
      type={item.type}
      teaser={item.teaser}
      wiki={item.wiki}
      yt={item.yt}
      yId={item.yId} />
  })


  return(
    <div className='outer-container'>
      <div className='card-container'>
        {
          postData
        }
      </div>
    </div>
  )
}

export default CardContainer;