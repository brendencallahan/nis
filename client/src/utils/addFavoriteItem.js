export default function addFavoriteItem(result) {
  if (localStorage.getItem) {
    const results = localStorage.getItem("favorites");
    localStorage.setItem("favorites", JSON.stringify([...results, result]));
    console.log([...results, result]);
  } else {
    localStorage.setItem("favorites", JSON.stringify([result]));
  }
}