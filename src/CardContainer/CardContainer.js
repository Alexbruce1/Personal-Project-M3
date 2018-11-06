import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';
import { connect } from 'tls';
import { mapDispatchToProps } from '../App';
// import TypeButton from '../TypeButton/TypeButton';


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
      {/* <div className='type-button-container'>
        <TypeButton purpose='Movies' />
        <TypeButton purpose='TV' />
        <TypeButton purpose='Books' />
        <TypeButton purpose='Music' />
        <TypeButton purpose='Authors' />
        <TypeButton purpose='Games' />
      </div>
      <div className='recommendations-slider'>more data and important stuff</div> */}
      <div className='card-container'>
        {/* <Card />
        <Card />
        <Card />
        <Card /> */}
        {
          postData
        }
      </div>
    </div>
  )
}

export const mapStateToProps = ({ media }) => ({
  media
});

// export const mapDispatchToProps = (dispatch) => ({
//   setData: (media) => dispatch(setData(media))
// });
// export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
export default CardContainer;