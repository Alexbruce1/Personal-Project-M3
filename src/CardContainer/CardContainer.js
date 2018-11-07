import React from 'react';
import Card from '../Card/Card';
import dinosaur from '../images/dinosaur.png';
import './CardContainer.css';


const CardContainer = (props) => {
  const postData = props.media.map((item, i) => {
    return <Card
      key={i}
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
        { props.media.length > 1 ?
          postData :
          <div className='no-responses'>
            <h2>Sorry, there were no matches to your search</h2>
            <img alt='' src={dinosaur} />
            <h2>Try another search</h2>
          </div>
        }
      </div>
    </div>
  )
}

export default CardContainer;