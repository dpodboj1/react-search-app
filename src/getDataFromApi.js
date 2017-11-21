import fetchjsonp from 'fetch-jsonp';

const getDataFromApi = async (url) => {
  try {
    //  get response from API
    const response = await fetchjsonp(url);
    //  parse data from response
    const data = await response.json();
    //  return data
    return data;
  } catch (e) {
    console.log(e);
  }
};

export default getDataFromApi;
