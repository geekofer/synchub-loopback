import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
    index: {
      unique: true,
    },
  })
  login: string;

  @property({
    type: 'string',
  })
  avatar_url?: string;

  constructor(data?: Partial<User>) {
    super(data);
  }
  
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
