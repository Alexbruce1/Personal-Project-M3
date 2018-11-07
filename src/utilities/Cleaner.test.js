import * as Cleaner from './Cleaner';
import * as API from '../API/API';
jest.mock('../API/API');

describe('Cleaner', () => {
  // let url = 'https://tastedive.com/api/';
  // let apiKey = '322746-Apex-5CWVBUFX';

  it('should call searchData with the correct arguments', () => {
    Cleaner.searchData('senna', 'movies');

    expect(API.fetchData).toHaveBeenCalledWith('senna', 'movies');
  });

  // it('Should return a resolved array', async () => {
  //   const media = await Cleaner.searchData('Senna', 'Movies');
  //   console.log(media)

  //   expect(media).toEqual([]);
  // });
})