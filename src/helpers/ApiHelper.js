class ApiHelper {
  async post(url, data, headers) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(data),
    }).then(x => x.json());

    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }

  async get(url, data, headers) {
    const response = await fetch(url, data).then(x => x.json());

    return new Promise((resolve, reject) => {
      resolve(response);
    });
  }
}

export default new ApiHelper();
