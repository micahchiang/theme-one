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

  login(user) {
    console.log('in login method', user);
    let options = {
      method: 'POST',
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(user),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    };
    return fetch(`${this.baseUrl}/admin/login`, options)
      .then(res => {
        return res.json();
      })
      .then(res => {
        return res;
      });
  }
}
