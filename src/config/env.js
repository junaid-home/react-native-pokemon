const dev = {
  apiURL: 'https://pokeapi.co/api/v2',
}

const prod = {
  apiURL: 'https://pokeapi.co/api/v2',
}

function getKeys() {
  if (__DEV__) return dev
  else return prod
}

export default getKeys()
