import React, { Component } from 'react';
import './App.css';
import backArrow from './images/back.svg'
import CardContainer from './CardContainer/CardContainer';
import Header from './Header/Header';
import Search from './Search/Search';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchData } from './utilities/Cleaner';
import { Parallax, Background } from 'react-parallax';
import { setData, removeStateMedia } from './actions/actions';


export class App extends Component {
  constructor(props) {
    super();
    this.state = {
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
              <div className='instructions'>
                <p>
                  <strong>Apex</strong> gives you recommendations for movies, TV shows, music, books, authors, and games as results to your searches. With a motorsport theme, it's perfect for finding new forms of media to be passionate about. Give it a try. Search for things like <strong>'Senna'</strong>, <strong>'Talladega Knights'</strong>, <strong>'Gran Turismo'</strong>, or any other motorsport related things you may like!
                </p>
              </div>
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


export default withRouter(connect( mapStateToProps, mapDispatchToProps )(App));