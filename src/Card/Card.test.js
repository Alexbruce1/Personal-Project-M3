import { Card } from './Card';
import React from 'react';
import { shallow } from 'enzyme';

describe.skip('Card', () => {
  let wrapper = shallow(<Card
    name='name'
    type='type'
    teaser='teaser'
    wiki='wiki'
    yt='yt'
    yId='yId'
  />);

  it('should render like the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});