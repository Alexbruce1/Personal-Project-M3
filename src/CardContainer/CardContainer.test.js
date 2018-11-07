import CardContainer from './CardContainer';
import React from 'react';
import { shallow } from 'enzyme';


describe('CardContainer', () => {
  let wrapper;
  let data;

  beforeEach(() => {
    data = [{}, {}];
    wrapper = shallow(<CardContainer media={data} />);
  });

  it('should render like the snapshot with data', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render like the snapshot without data', () => {
    wrapper = shallow(<CardContainer media={[]} />);
    
    expect(wrapper).toMatchSnapshot();
  })
})