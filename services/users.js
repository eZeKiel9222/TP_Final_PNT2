const users = [
    { id: 0 , username: 'Alice', password: 'password123' },
    { id: 1 ,username: 'Bob', password: 'secret456' },
    { id:2 ,username: 'Charlie', password: 'secure789' },
  ];

const getUsers = () => {

  

    // Se supone que hace una llamada al back para traer contactos...
    return new Promise((resolve, reject) => {
      return resolve(users)
    })
  }
  const saveContact = (user) => {
    return new Promise((resolve, reject) => {
        users.push(user)
        return resolve(user)
      })

  }
  export default {
    getUsers,
    saveContact
  };