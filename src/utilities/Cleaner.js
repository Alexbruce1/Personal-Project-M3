import * as API from '../API/API';

export const searchData = async (query, type) => {
  const cleanedQuery = query.replace(/ /g, '+')
  const getData = await API.fetchData(cleanedQuery, type);
  const cleanedData = await returnMedia(getData.Similar);
  return cleanedData;
}

export const returnMedia = async (data) => {
  const completeData = [...data.Info, ...data.Results]
  const mediaPromises = await completeData.map(async item => {
    return {
      name: item.Name,
      type: item.Type,
      teaser: item.wTeaser,
      wiki: item.wUrl,
      yt: item.yUrl,
      yId: item.yId,
    }
  });
  return Promise.all(mediaPromises);
}
