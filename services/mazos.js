import { URL } from '@env'

//const BASE_URL = "https://us-central1-api-nt2-ejemplo.cloudfunctions.net/app/api/read"

const getMazos = () => {
  return fetch(`http://172.20.114.124:8080/api/mazo`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error("Error: Not found");
      }
    });
};

const getModos = () => {
  return fetch(`http://172.20.114.124:8080/api/modo`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error("Error: Not found");
      }
    });
};

const getMazo = (id) => {
  return fetch(`http://172.20.114.124:8080/api/mazo/${id}`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error("Error: Not found");
      }
    })
};

const getMazosByIdUser = (id) => {
  return fetch(`http://172.20.114.124:8080/api/mazo/user/${id}`)

    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error("Error: Not found");
      }
    });
};

const deleteCartaMazo = (IdCarta, IdMazo) => {
  const requestBody = {
    MazoId: IdMazo,
    CartaId: IdCarta
  };

  return fetch(`http://172.20.114.124:8080/api/cartasmazo`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        return res.json();
      }
    });
}
const deleteCartaColeccion = (IdCarta, IdUser) => {
  const requestBody = {
    UserId: IdUser,
    CartaId: IdCarta
  };

  return fetch(`http://172.20.114.124:8080/api/coleccion`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
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

  return fetch(`http://172.20.114.124:8080/api/mazo/estado/${IdMazo}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        return res.json();
      }
    });
}

const createMazo = (nombreMazo, estado, user, modo) => {
  let state = false
  if (estado === "Privado") {
    state = true
  }

  const requestBody = {
    nombreMazo: nombreMazo,
    privado: state,
    ModoJuegoId: modo,
    UserId: user
  };

  return fetch(`http://172.20.114.124:8080/api/mazo`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        return res.json();
      }
    });
}

const deleteMazo = (IdMazo) => {
  return fetch(`http://172.20.114.124:8080/api/mazo/${IdMazo}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    },
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
  cambiarEstadoMazo,
  getModos,
  createMazo,
  deleteMazo,
  deleteCartaColeccion
};