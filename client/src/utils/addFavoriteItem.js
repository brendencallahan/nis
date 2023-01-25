export default function addFavoriteItem(result) {
  const results = JSON.parse(localStorage.getItem("favorites"));
  if (results) {
    localStorage.setItem("favorites", JSON.stringify([...results, result]));
  } else {
    localStorage.setItem("favorites", JSON.stringify([result]));
  }
}
