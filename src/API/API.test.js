import * as API from './API';

describe('API', () => {
  let url;

  beforeEach(() => {
    url = 'https://tastedive.com/api/similar?k=322746-Apex-5CWVBUFX&info=1&type=music&limit=25&q=Fall Out Boy';

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({ data: 'response data' })
    }));
  });

  it('should call fetchData with the correct url', () => {
    API.fetchData('Fall Out Boy', 'music');

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return a JSON object from the fetch call', async() => {
    const expected = { data: 'response data' };
    const response = await API.fetchData(url);

    expect(response).toEqual(expected);
  });
});