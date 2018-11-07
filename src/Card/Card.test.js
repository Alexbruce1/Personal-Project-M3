import { Card } from './Card';
import React from 'react';
import { shallow } from 'enzyme';
import * as API from '../API/API';
jest.mock('../API/API');


describe('Card', () => {
  let wrapper;
  let mockCard;

  beforeEach(() => {
    mockCard = {
      name: 'name',
      type: 'type',
      teaser: 'teaser',
      wiki: 'wiki',
      yt: 'yt',
      yId: 'yId',
    }
  })

  it('should render like the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  
});