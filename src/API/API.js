const baseUrl = 'https://tastedive.com/api/';
const apiKey = '322746-Apex-5CWVBUFX';

export const fetchData = async (query, type) => {
  let searchQuery = `&q=${query}`;
  let searchType = type ? `&type=${type.toLowerCase()}` : '';

  const response = await fetch(baseUrl + 'similar?k=' + apiKey + '&info=1' + searchType + '&limit=25' + searchQuery);
  const data = await response.json();
  return data;
}