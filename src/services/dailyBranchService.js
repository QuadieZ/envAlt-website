export default class dailyBranchService {
    async getBranchDailyInfo(number="b0001") {
        let host = "http://127.0.0.1:8000/branches/"
        let response = await fetch(host + number + '/dailyreport', {
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