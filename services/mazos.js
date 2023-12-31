import { URL } from '@env'

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

const getModos = () => {
  return fetch(`${URL}/api/modo`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error("Error: Not found");
      }
    });
};

const getMazo = (id) => {
  return fetch(`${URL}/api/mazo/${id}`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error("Error: Not found");
      }
    })
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

const deleteCartaMazo = (IdCarta, IdMazo) => {
  const requestBody = {
    MazoId: IdMazo,
    CartaId: IdCarta
  };

  return fetch(`${URL}/api/cartasmazo`, {
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

  return fetch(`${URL}/api/coleccion`, {
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

  return fetch(`${URL}/api/mazo/estado/${IdMazo}`, {
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

  return fetch(`${URL}/api/mazo`, {
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
  return fetch(`${URL}/api/mazo/${IdMazo}`, {
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