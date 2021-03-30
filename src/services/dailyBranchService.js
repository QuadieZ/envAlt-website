export default class dailyBranchService {
    async getCustomer(number=1, date) {
        let host = "http://127.0.0.1:8000/branches/"
        let response = await fetch(host + number + '/' + date + '/customer', {
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

    async getCarbon(number=1, date) {
        let host = "http://127.0.0.1:8000/branches/"
        let response = await fetch(host + number + '/' + date + '/carbon', {
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

    async getGraph(number=1, date) {
        let host = "http://127.0.0.1:8000/branches/"
        let response = await fetch(host + number + '/' + date + '/graph', {
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