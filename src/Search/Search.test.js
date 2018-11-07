import { Search, mapStateToProps } from './Search';
import React from 'react';
import { shallow } from 'enzyme';

describe('Search', () => {
  let wrapper;
  let callApi;
  let storeQuery;
  let setType;

  beforeEach(() => {
    callApi = jest.fn();
    storeQuery = jest.fn();
    setType = jest.fn();
    wrapper = shallow(<Search 
      callApi={callApi}
      storeQuery={storeQuery}
      setType={setType}
    />);
  });

  it('should render like the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should show media', () => {
    const initialState = {
      media: []
    };

    expect(mapStateToProps(initialState).media).toEqual([]);
  });

  it('should call storeQuery on change', () => {
    wrapper.find('.search-input').simulate('change');

    expect(storeQuery).toHaveBeenCalled();
  });

  it('should call setType on change', () => {
    wrapper.find('.type-select').simulate('change');

    expect(setType).toHaveBeenCalled();
  });

  it('should call callApi on change', async() => {
    let e = {preventDefault: () => {}}
    await wrapper.instance().getData(e);

    await expect(callApi).toHaveBeenCalled();
  });
})