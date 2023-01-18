export default function getFavoritesItems() {
  if (localStorage.getItem("favorites")) {
    return localStorage.getItem("favorites");
  } else {
    return null
  }
}