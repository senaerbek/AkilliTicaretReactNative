import AsyncStorage from '@react-native-community/async-storage';
import {ResponseModel} from './request.model';

const BASE_URL = 'https://api.akilliticaretim.com/api/';

export function get(url: string) {
  return request('GET', url);
}

export function post(url: string, body?: any) {
  return request('POST', url, body);
}

export function request(method: string, url: string, body?: any): Promise<any> {
  return AsyncStorage.getItem('token')
    .catch(() => null)
    .then(() => {
      const headers = {
        'Content-Type': 'application/json',
        GUID: '71FF-ADB9-600F-82D9',
      };
      const args = {headers, method, body: JSON.stringify(body)};

      return fetch(BASE_URL + url, args).then(response => {
        return response
          .json()
          .then(content => {
            return new ResponseModel(content.data);
          })
          .catch(() => console.log('error'));
      });
    });
}
