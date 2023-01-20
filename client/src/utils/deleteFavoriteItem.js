export default function deleteFavoriteItem(passedResult) {
  const results = JSON.parse(localStorage.getItem('favorites'));

  const newResults = results.filter((result) => {
    return result.data[0].nasa_id !== passedResult.data[0].nasa_id;
  })

  if (newResults.length > 0) {
    localStorage.setItem('favorites', JSON.stringify([...newResults]));
  } else {
    localStorage.removeItem('favorites')
  }
}