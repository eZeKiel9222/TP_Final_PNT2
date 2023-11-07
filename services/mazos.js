const BASE_URL = "https://us-central1-api-nt2-ejemplo.cloudfunctions.net/app/api/read"
//const BASE_URL = "http://localhost:8080/api/mazo"

const getMazos = () => {
    return new Promise((resolve, reject) => {
        fetch(`${BASE_URL}`)
            .then(res => {
                if (res.status === 200) {
                    return resolve(res.json())
                } else {
                    return reject("Error: Not found")
                }
            })
    })
}

export default {
    getMazos
};