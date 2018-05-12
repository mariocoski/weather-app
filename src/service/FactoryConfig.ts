import repoFactory from '../repo/factory';

export default interface IFactoryConfig {
  readonly repo: ReturnType<typeof repoFactory>;
}