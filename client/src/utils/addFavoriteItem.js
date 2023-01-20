export default function addFavoriteItem(result) {
  const results = JSON.parse(localStorage.getItem("favorites"));
  console.log(results);
  if (results) {
    localStorage.setItem("favorites", JSON.stringify([...results, result]));
    console.log([...results, result]);
  } else {
    localStorage.setItem("favorites", JSON.stringify([result]));
  }
}