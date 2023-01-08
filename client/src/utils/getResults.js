import axios from 'axios';

export default async function getResults(query, mainPage) {
  const resp = await axios.get(
    `https://images-api.nasa.gov/search?q=${query.get(
      'q'
    )}&page=${mainPage}&media_type=image`
  );
  return resp.data.collection.items;
}
