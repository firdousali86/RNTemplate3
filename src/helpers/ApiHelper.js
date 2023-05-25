import {kApiUrlEndpoint} from '../config/WebServices';

class ApiHelper {
  async post(url, data, headers) {
    const completeEndpoint = kApiUrlEndpoint + url;

    const response = await fetch(completeEndpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(data),
    }).then(x => x.json());

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  async get(url, data, headers) {
    const completeEndpoint = kApiUrlEndpoint + url;

    const response = await fetch(completeEndpoint, data).then(x => x.json());

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  async delete(url, data, headers) {}
  async put(url, data, headers) {}
  async postImage(url, data, headers) {}

  handlePromise = (resolve, reject, response) => {
    if (response.error) {
      reject(response.error);
    } else {
      resolve(response);
    }
  };
}

export default new ApiHelper();
