export default class cityService{

    async getCities()  {
  
      let host = "http://127.0.0.1:8000/cities"
      let response = await fetch(host, {
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
  
    async getCity(number)  {
      let host = "http://127.0.0.1:8000/cities/"
      let response = await fetch(host+number, {
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
  
    async createCity(name,timezone)  {
      let city = {
        'name': name,
        'timezone': timezone
      }
      let host = "http://127.0.0.1:8000/cities"
      let response = await fetch(host, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(city),
      });
  
      if (response !== 200) {

      }

      let res = await response.json();
       console.log(res)
       return res;
    }
}