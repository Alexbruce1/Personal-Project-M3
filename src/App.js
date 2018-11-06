import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import CardContainer from './CardContainer/CardContainer';
import Header from './Header/Header';
import Search from './Search/Search';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchData } from './utilities/Cleaner';
import { Parallax, Background } from 'react-parallax';
import { setData } from './actions/actions';


export class App extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
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

  render() {
    const { media } = this.props;
    return (
      <Route path="/" render={() => {
        return(
          <div className='App'>
            <Parallax
              strength={700}
              className='parallax-header'
            >
              <Background className='parallax-image'>
                <div className='parallax-transition'></div>
              </Background>

              <Header />

              <Search 
                callApi={this.callApi}
                storeQuery={this.storeQuery}
                setType={this.setType}
              />

              { media &&
                <CardContainer media={media} />
              }

            </Parallax>
          </div>
        )
      }} />
    );
  }
}

App.propTypes = {
  newFunction: PropTypes.func.isRequired
}

export const mapStateToProps = ({ media }) => ({
  media
});

export const mapDispatchToProps = (dispatch) => ({
  setData: (media) => dispatch(setData(media))
});


export default connect( mapStateToProps, mapDispatchToProps )(App);