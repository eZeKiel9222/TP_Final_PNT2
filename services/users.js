import { URL } from '@env'

const Login = (userLogin, userPassword) => {
  const requestBody = {
    userLogin: userLogin,
    userPassword: userPassword
  };

  return fetch(`http://172.20.102.248:8080/api/user/login`, {
    method: "POST",
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

const Register = (Login, Password, nickName, email) => {
  const requestBody = {
    userLogin: Login,
    userPassword: Password,
    nickName: nickName,
    email: email
  };

  return fetch(`http://172.20.102.248:8080/api/user`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json' // Specify the content type as JSON
    },
    body: JSON.stringify(requestBody) // Convert the object to a JSON string
  })
    .then(res => {
      console.log()
      if (res.status === 200) {
        return res.json()
      } else {
        return res.json()
      }
    })
}

const getUser = (id) => {
  return fetch(`http://172.20.102.248:8080/api/user/${id}`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error("Error: Not found");
      }
    })
};

export default {
  Login,
  Register,
  getUser
};