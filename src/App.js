import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer/CardContainer';
import Header from './Header/Header';
import backgroundImg from './images/track.jpg';

import { Parallax, Background } from 'react-parallax';


class App extends Component {


  render() {
    return (
      <div className='App'>
        <Parallax
          strength={700}
          className='parallax-header'>
          <Background className='parallax-image'>
            <img 
              src={backgroundImg} 
              alt='background' />
          </Background>

          <Header />          
          <CardContainer />

        </Parallax>
      </div>
    );
  }
}

export default App;
