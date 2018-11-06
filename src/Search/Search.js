import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchData } from '../utilities/Cleaner';
import './Search.css';

class Search extends Component {
  
  getData = async (e) => {
    e.preventDefault();
    this.props.callApi();
    // await searchData(this.props.media)
  }

  render() {
    return(
      <div className='search'>
        <h2 className='search-title'>Search for content, or just browse</h2>
        <form className='search-form' onSubmit={this.getData}>
          <div className='search-input-container'>
            <input className='search-input' placeholder='Search' onChange={this.props.storeQuery}/>
            <div className='input-divider'></div>
            <select className='type-select' onChange={this.props.setType}>
              <option className='select-option' value='Everything'>Everything</option>
              <option className='select-option' value='Movies'>Movies</option>
              <option className='select-option' value='TV'>TV</option>
              <option className='select-option' value='Books'>Books</option>
              <option className='select-option' value='Authors'>Authors</option>
              <option className='select-option' value='Games'>Games</option>
              <option className='select-option' value='Music'>Music</option>
            </select>
          </div>
          <input className='search-submit' type='submit' value='Search' />
          {/* <input className='search-browse' type='button' value='Browse' /> */}
        </form>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  media: state.media
})

// export const mapDispatchToProps = (dispatch) => ({
//   newFunction: (data) => dispatch(getData(data))
// })


export default connect(mapStateToProps, null)(Search);