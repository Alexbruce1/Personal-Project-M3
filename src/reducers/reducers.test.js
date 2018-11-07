import { mediaReducer } from './reducers';

describe('reducer', () => {
  let defaultState = [];

  it('Should return default state when no type is given', () => {
    const newState = mediaReducer(undefined, {});

    expect(newState).toEqual(defaultState);
  });

  it('Should set data as new state', () => {
    const mockData = [];
    const mockAction = {
      type: 'SET_DATA',
      media: mockData
    }
    const newState = mediaReducer([], mockAction);

    expect(newState).toEqual(mockData);
  });


});