export default function getFavoritesItems() {
  const results = JSON.parse(localStorage.getItem('favorites'));
  if (results) {
    //reversing makes the most recent favorite show up at the top of the page
    return results.reverse();
  } else {
    return null;
  }
}
