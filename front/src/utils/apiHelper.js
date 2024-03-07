export class ApiHelper {
  static getHeaders() {
    return {
      'Content-Type': 'application/json',
      mode:'cors',
    };
  }

  static preparePayload(payload) {
    return payload && JSON.stringify(payload);
  }

  static async prepareResponse(res) {
   
    let data = await res.text();
    try{
      data = JSON.parse(data)
    }catch(err){
    }
    
    if (res.status > 205) {
      return Promise.reject(data);
    }

    return data;
  }

  static async get(url) {
    const response = await fetch(url, {
      headers: ApiHelper.getHeaders(),
    });

    const result = await ApiHelper.prepareResponse(response);

    return result;
  }
}
