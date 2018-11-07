import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  let data;

  beforeEach(() => {
    data = []
    wrapper = shallow(<App media={data} />);
  });

  it('Should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should show media', () => {
    const initialState = {
      media: []
    };

    expect(mapStateToProps(initialState).media).toEqual([]);
  });

  it('should set data into redux state', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).setData();

    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'SET_DATA' });
  });

  it('should remove data from redux state', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).removeStateMedia();

    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'REMOVE_STATE_MEDIA' });
  });
  
  // it('renders without crashing', () => {
  //   // const div = document.createElement('div');
  //   // ReactDOM.render(<App />, div);
  //   // ReactDOM.unmountComponentAtNode(div);
  // });
  
})