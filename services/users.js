import { URL } from '@env'

const Login = (userLogin, userPassword) => {
  const requestBody = {
    userLogin: userLogin,
    userPassword: userPassword
  };
  return fetch(`${URL}/api/user/login`, {
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

const Register = (Login, Password, nickName, email) => {
  const requestBody = {
    userLogin: Login,
    userPassword: Password,
    nickName: nickName,
    email: email
  };

  return fetch(`${URL}/api/user`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
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
  return fetch(`${URL}/api/user/${id}`)
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