import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Measure} from '../models';
import {UnioviDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MeasureRepository extends DefaultCrudRepository<
  Measure,
  typeof Measure.prototype.id
> {
  constructor(
    @inject('datasources.uniovi') dataSource: UnioviDataSource,
  ) {
    super(Measure, dataSource);
  }
}
