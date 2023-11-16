import { URL } from '@env'
const search = (filter , search) => {

  
    return fetch(`http://172.20.114.124:8080/api/search/${filter}/${search}`, {
      method: "GET",
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
    search
  };