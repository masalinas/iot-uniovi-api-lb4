import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './uniovi.datasource.json';

export class UnioviDataSource extends juggler.DataSource {
  static dataSourceName = 'uniovi';

  constructor(
    @inject('datasources.config.uniovi', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
