import repoFactory from '../repo/factory';
import serviceFactory from '../service/factory';
import IAppConfig from './AppConfig';
import presenterFactory from './factory';

export default (config: IAppConfig) => {
  const repo = repoFactory(config.repo);
  const service = serviceFactory({ repo });
  const presenter = presenterFactory({ service, observer: config.observer });
  return presenter;
};