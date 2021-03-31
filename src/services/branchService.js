export default class branchService {
    async getBranch(number=1) {
        let host = "http://127.0.0.1:8000/branches/"
        let response = await fetch(host + number, {
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

    async getAppliances(number=1) {
        let host = "http://127.0.0.1:8000/branches/"
        let response = await fetch(host + number + 'appliances/', {
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

    async getPayment(number=1) {
        let host = "http://127.0.0.1:8000/branches/"
        let response = await fetch(host + number + 'payment/', {
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

    async getRecommendations(number=1) {
        let host = "http://127.0.0.1:8000/branches/"
        let response = await fetch(host + number + 'recommend/', {
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