import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'tls';

export const setData = (media) => ({
  type: 'SET_DATA',
  media
});

export const addQuery = (query) => ({
  type: 'ADD_QUERY',
  query
});

export const addDataType = (dataType) => ({
  type: 'ADD_DATA_TYPE',
  dataType
});

// export const addFavorite = (data) => ({
//   type: 'ADD_FAVORITE',
//   data
// });

// export const removeFavorite = (data) => ({
//   type: 'REMOVE_FAVORITE',
//   data
// });

