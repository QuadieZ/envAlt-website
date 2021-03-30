export default class LoginService {
    async checkLogin(username, password) {
        let user = {
            'username': username,
            'password': password
        }
        let host = "http://127.0.0.1:8000/users"
        let response = await fetch(host, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (response !== 200) {

        }
        let res = await response.json();
        console.log(res)
        return res;
    } 
}