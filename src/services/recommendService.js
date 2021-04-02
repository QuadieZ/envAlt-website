export default class recommendService {
    async getRecommendations(number="b0001") {
        let host = "http://127.0.0.1:8000/branches/"
        let response = await fetch(host + number + '/recommendation', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response);

        let res = await response.json();
        console.log(res);

        return res;
    }

}