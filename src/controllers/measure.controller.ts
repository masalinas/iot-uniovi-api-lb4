import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Measure} from '../models';
import {MeasureRepository} from '../repositories';

export class MeasureController {
  constructor(
    @repository(MeasureRepository)
    public measureRepository : MeasureRepository,
  ) {}

  @post('/measures', {
    responses: {
      '200': {
        description: 'Measure model instance',
        content: {'application/json': {schema: {'x-ts-type': Measure}}},
      },
    },
  })
  async create(@requestBody() measure: Measure): Promise<Measure> {
    return await this.measureRepository.create(measure);
  }

  @get('/measures/count', {
    responses: {
      '200': {
        description: 'Measure model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Measure)) where?: Where,
  ): Promise<Count> {
    return await this.measureRepository.count(where);
  }

  @get('/measures', {
    responses: {
      '200': {
        description: 'Array of Measure model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Measure}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Measure)) filter?: Filter,
  ): Promise<Measure[]> {
    return await this.measureRepository.find(filter);
  }

  @patch('/measures', {
    responses: {
      '200': {
        description: 'Measure PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() measure: Measure,
    @param.query.object('where', getWhereSchemaFor(Measure)) where?: Where,
  ): Promise<Count> {
    return await this.measureRepository.updateAll(measure, where);
  }

  @get('/measures/{id}', {
    responses: {
      '200': {
        description: 'Measure model instance',
        content: {'application/json': {schema: {'x-ts-type': Measure}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Measure> {
    return await this.measureRepository.findById(id);
  }

  @patch('/measures/{id}', {
    responses: {
      '204': {
        description: 'Measure PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() measure: Measure,
  ): Promise<void> {
    await this.measureRepository.updateById(id, measure);
  }

  @put('/measures/{id}', {
    responses: {
      '204': {
        description: 'Measure PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() measure: Measure,
  ): Promise<void> {
    await this.measureRepository.replaceById(id, measure);
  }

  @del('/measures/{id}', {
    responses: {
      '204': {
        description: 'Measure DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.measureRepository.deleteById(id);
  }
}
