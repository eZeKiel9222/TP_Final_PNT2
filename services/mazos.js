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

const getMazo = (id) => {
  return fetch(`${BASE_URL}/${id}`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error("Error: Not found");
      }
    })
};
const  getMazosByIdUser = (id) => {
  return  fetch(`${BASE_URL}/user/${id}`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error("Error: Not found");
      }
    });
};
const deleteCartaMazo = (IdCarta , IdMazo) => {
  const requestBody = {
    MazoId: IdMazo,
    CartaId: IdCarta
  };

  return fetch(`http://172.20.102.248:8080/api/cartasmazo`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json' // Specify the content type as JSON
    },
    body: JSON.stringify(requestBody) // Convert the object to a JSON string
  })
  .then(res => {
    if (res.status === 200) {
      return res.json();
    } else {
      return res.json();
    }
  });

}
const cambiarEstadoMazo = (IdMazo, nuevoEstado) => {
  const requestBody = {
    id: IdMazo,
    privado: nuevoEstado
  };

  return fetch(`http://172.20.102.248:8080/api/mazo/estado/${IdMazo}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json' // Specify the content type as JSON
    },
    body: JSON.stringify(requestBody) // Convert the object to a JSON string
  })
  .then(res => {
    if (res.status === 200) {
      return res.json();
    } else {
      return res.json();
    }
  });

}




export default {
    getMazos,
    getMazosByIdUser,
    getMazo,
    deleteCartaMazo,
    cambiarEstadoMazo
};