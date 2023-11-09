//const BASE_URL = "https://us-central1-api-nt2-ejemplo.cloudfunctions.net/app/api/read"
const BASE_URL = "http://172.20.102.248:8080/api/mazo"

const getMazos = () => {
  return fetch(`${BASE_URL}`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error("Error: Not found");
      }
    });
};
const getMazosByIdUser = (id) => {
  return fetch(`${BASE_URL}/user/${id}`)
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