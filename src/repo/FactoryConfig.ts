import LocalFactoryConfig from './local/FactoryConfig';
import RemoteFactoryConfig from './remote/FactoryConfig';

export default interface IFactoryConfig {
  readonly local?: LocalFactoryConfig;
  readonly remote?: RemoteFactoryConfig;
}