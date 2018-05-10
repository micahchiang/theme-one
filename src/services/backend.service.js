export default class BackendService {
  constructor() {
    this.baseUrl = 'http://localhost:3000';
  }

  getEntries() {
    let options = {
      method: 'GET',
      mode: 'cors',
      cache: 'default'
    };
    return fetch(`${this.baseUrl}/api/entries`, options)
      .then(res => {
        return res.json();
      })
      .then(res => {
        return res;
      });
  }
}
