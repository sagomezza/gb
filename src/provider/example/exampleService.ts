import ExampleConfig from './exampleConfig';

export default class ExampleService {
  static fetchExample() {
    return new Promise(async (resolve, reject) => {
      try {
        const endpoint = ExampleConfig.endpointExample;
        const response: any = await ExampleConfig.APIConnector.get(endpoint);
        if (response.status === 200) {
          resolve(response);
        } else reject();
      } catch (error) {
        console.log('error', error);
        reject(error);
      }
    });
  }
}
