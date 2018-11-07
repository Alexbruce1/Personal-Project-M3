import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  let data;
  let setData;
  let removeStateMedia;

  beforeEach(() => {
    setData = jest.fn();
    removeStateMedia = jest.fn();
    data = []
    wrapper = shallow(<App 
      setData={setData}
      removeStateMedia={removeStateMedia}
      media={data} 
      />);
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

  it('should call setData when callApi is invoked', async() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({Similar:{Info: [{}], Results: []}})
    }));
  
    await wrapper.instance().callApi();

    await expect(setData).toHaveBeenCalled();
  });

  it('should call removeStateMedia  when removeMedia is invoked', () => {
    wrapper.instance().removeMedia();

    expect(removeStateMedia).toHaveBeenCalled();
  });

  it('should update state when storeQuery is called', () => {
    let e = {target: {value: 'yes'}};

    wrapper.instance().storeQuery(e);

    expect(wrapper.state().query).toEqual('yes');
  });

  it('should update state when setType is called', () => {
    let e = { target: { value: 'yes' } };

    wrapper.instance().setType(e);

    expect(wrapper.state().mediaType).toEqual('yes');
  });

  it.skip('should change routes after clicking NavLink', () => {
    wrapper.find('.navlink-search').simulate('click');

    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should call removeStateMedia  when removeMedia is invoked', () => {
    wrapper.find('.remove-media').simulate('click');

    expect(removeStateMedia).toHaveBeenCalled();
  });

});