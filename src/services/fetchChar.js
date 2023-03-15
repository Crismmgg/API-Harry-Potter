const ENDPOINT = "https://hp-api.onrender.com/api/characters";

export default () => {
  return fetch(ENDPOINT)
    .then(resp => resp.json())
}
