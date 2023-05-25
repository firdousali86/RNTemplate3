import {
  kApiUrlEndpoint,
  ERROR_NETWORK_NOT_AVAILABLE,
  ERROR_WRONG_CREDENTIALS,
} from '../config/WebServices';
import {fetch} from 'react-native-ssl-pinning';

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
      sslPinning: {
        certs: ['certs/mynewcert'], // your certificates name (without extension), for example cert1.cer, cert2.cer
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
      if (response.error.code === 'LOGIN_FAILED') {
        reject(ERROR_WRONG_CREDENTIALS);
      } else {
        reject(response.error);
      }
    } else {
      resolve(response);
    }
  };
}

export default new ApiHelper();
