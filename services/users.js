const users = [
  { id: 0, username: 'Alice', password: 'password123' },
  { id: 1, username: 'Bob', password: 'secret456' },
  { id: 2, username: 'Charlie', password: 'secure789' },
  { id: 3, username: 'admin', password: 'admin' }
];
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
const Register = (Login,Password,nickName,email) => {
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
})}

export default {
  Login,
  Register
};