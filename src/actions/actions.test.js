import { setData, removeStateMedia, addDataType } from './actions';

describe('actions', () => {
  it('Should have a type of GET_DATA', () => {
    const response = 100;
    const expected = {
      type: 'SET_DATA',
      media: 100
    }
    const result = setData(response);

    expect(result).toEqual(expected);
  });

  it('should have a type of REMOVE_STATE_MEDIA', () => {
    const media = [];
    const expected = {
      type: 'REMOVE_STATE_MEDIA',
      media
    };
    const result = removeStateMedia(media);

    expect(result).toEqual(expected);
  })

  it('should have a type of ADD_DATA_TYPE', () => {
    const dataType = 'Movie';
    const expected = {
      type: 'ADD_DATA_TYPE',
      dataType
    }
    const result = addDataType(dataType);

    expect(result).toEqual(expected);
  })
})