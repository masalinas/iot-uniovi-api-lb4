import {IotUnioviBackendApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {IotUnioviBackendApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new IotUnioviBackendApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
