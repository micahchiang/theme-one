export default class DummyService {
  constructor() {
    this.baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  }

  getData() {
    return fetch(`${this.baseUrl}`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        return res;
      });
  }
}
