import { mediaReducer } from './reducers';

describe('reducer', () => {
  let defaultState = [];

  it('Should return default state if there is no type', () => {
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

  it('Should set data as an empty array', () => {
    const mockData = [];
    const mockAction = {
      type: 'REMOVE_STATE_MEDIA',
      media: mockData
    }
    const newState = mediaReducer([], mockAction);

    expect(newState).toEqual(mockData);
  });

});