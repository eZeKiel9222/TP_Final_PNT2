const saveCarta = (cardName, image, cardUrl) => {
    const requestBody = {
      cardName: cardName,
      image: image,
      cardUrl:cardUrl
    };
  
    return fetch(`http://172.20.114.124:8080/api/carta/`, {
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

  const addCartaMazo = (MazoId, CartaId) => {
    const requestBody = {
        MazoId: MazoId, 
        CartaId: CartaId
    };
  
    return fetch(`http://172.20.114.124:8080/api/cartasmazo/`, {
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
  
  const addCartaColeccion = (UserId, CartaId) => {
    const requestBody = {
        UserId: UserId, 
        CartaId: CartaId
    };
  
    return fetch(`http://172.20.114.124:8080/api/coleccion/`, {
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

  
  export default {
    saveCarta,
    addCartaColeccion,
    addCartaMazo
  };