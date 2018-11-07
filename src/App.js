import React, { Component } from 'react';
import './App.css';
import backArrow from './images/back.svg'
import CardContainer from './CardContainer/CardContainer';
import Header from './Header/Header';
import Search from './Search/Search';
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchData } from './utilities/Cleaner';
import { Parallax, Background } from 'react-parallax';
import { setData, removeStateMedia } from './actions/actions';


export class App extends Component {
  constructor(props) {
    super();
    this.state = {
      // data: [],
      query: '',
      mediaType: '',
    }
  }

  storeQuery = e => {
    this.setState({
      query: e.target.value
    })
  }

  setType = e => {
    this.setState({
      mediaType: e.target.value
    })
  }

  callApi = async() => {
    const { query, mediaType } = this.state;
    const returnedData = await searchData(query, mediaType);
    this.props.setData(returnedData);
  }

  removeMedia = () => {
    let newMedia = []
    this.props.removeStateMedia(newMedia)
  }

  render() {
    const { media } = this.props;
    return (
      <div className='App'>
        <Route exact path='/' render={() => {
          return(
            <Parallax
              strength={700}
              className='parallax-header'
            >
              <Background className='parallax-image'>
                <div className='parallax-transition'></div>
              </Background>
              <Header />
            <NavLink className='navlink-search' to='/search' >Search for Content</NavLink>
          </Parallax>
          )
        }} />
        <Route exact path='/search' render={() => {
          return (
            <div className='App'>
              <Parallax
                strength={700}
                className='parallax-header'
              >
                <Background className='parallax-image'>
                  <div className='parallax-transition'></div>
                </Background>

                <Header />
                {
                  !media.length &&
                  <Search
                    callApi={this.callApi}
                    storeQuery={this.storeQuery}
                    setType={this.setType}
                  />
                }
              </Parallax>
            </div>
          )
        }} />
        {
          media.length &&
          <Route path='/search' render={() => {
            return (
              <div>
                <button className='remove-media' onClick={() => { this.removeMedia() }}>
                  <img alt='' src={backArrow} />
                  Make Another Search
                </button>
                <CardContainer media={media} />
              </div>
            )
          }} />
        }
      </div>
    );
  }
}

export const mapStateToProps = ({ media }) => ({
  media
});

export const mapDispatchToProps = (dispatch) => ({
  setData: (media) => dispatch(setData(media)),
  removeStateMedia: (newMedia) => dispatch(removeStateMedia(newMedia)),
});


export default connect( mapStateToProps, mapDispatchToProps )(App);