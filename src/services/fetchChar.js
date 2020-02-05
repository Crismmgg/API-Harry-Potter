const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';

export default () => {
  return fetch(ENDPOINT)
    .then(resp => resp.json())
}