import { URL } from '@env'

//const BASE_URL = "https://us-central1-api-nt2-ejemplo.cloudfunctions.net/app/api/read"

const getMazos = () => {
  return fetch(`${URL}/api/mazo`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error("Error: Not found");
      }
    });
};

const getMazosByIdUser = (id) => {
  return fetch(`${URL}/api/mazo/user/${id}`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error("Error: Not found");
      }
    });
};

export default {
  getMazos,
  getMazosByIdUser
};