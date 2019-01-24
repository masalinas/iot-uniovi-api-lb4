import { Entity, model, property } from '@loopback/repository';

@model()
export class Measure extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  device: string;

  @property({
    type: 'number',
    required: true,
  })
  value: number;

  @property({
    type: 'date',
    required: true,
  })
  date: string;

  constructor(data?: Partial<Measure>) {
    super(data);
  }
}
