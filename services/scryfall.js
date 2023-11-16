import { URL_SCRYFALL } from '@env'

const searchCard = (name) => {
  return fetch(`https://api.scryfall.com/cards/search?q=${name}`)
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