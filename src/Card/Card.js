import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    const { name, type, teaser, wiki, yt } = this.props;
    return (
      <div className="card">
        <div className="card-top-container">
          <p className="title">{name}</p>
          <p className="media-type">{ type }</p>
        </div>
        <a className='wikipedia-link' href={wiki}>Learn More</a>
        <p className="description">{ teaser }</p>
        <iframe
          className='youtube-embed' 
          title='YouTube Link' 
          src={yt}>
        </iframe>
        <div className='youtube-background'>Loading YouTube link</div>
      </div>
    )
  }
}

export default Card;