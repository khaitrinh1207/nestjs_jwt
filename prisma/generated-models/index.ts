import { User as _User } from './user';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace PrismaModel {
  export class User extends _User {}

  export const extraModels = [User];
}
