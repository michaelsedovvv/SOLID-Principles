// Dependency Inversion

class Fetch {
  request(url) {
    // return fetch(url).then((r) => r.json());
    return Promise.resolve("data from fetch");
  }
}

class LocalStorage {
  get() {
    return Promise.resolve("data from localstorage");
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch();
  }

  getClient() {
    return this.fetch.request("vk.com");
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage();
  }

  getClient() {
    return this.localStorage.get("vk.com");
  }
}

class Database {
  constructor(client) {
    this.client = client;
  }

  getData(key) {
    return this.client.getClient(key);
  }
}

// const db = new Database(new FetchClient());
const db = new Database(new LocalStorageClient());
console.log(db.getData("rand"));
