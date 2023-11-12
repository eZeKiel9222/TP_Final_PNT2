import { URL_SCRYFALL } from '@env'

const searchCard = (name) => {
  return fetch(`${URL_SCRYFALL}${name}`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error("Carta Not found");
      }
    })
};

export default {
  searchCard
};