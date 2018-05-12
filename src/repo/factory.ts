
import IFactoryConfig from './FactoryConfig';
import localFactory from './local/factory';
import remoteFactory from './remote/factory';

export default ({ local, remote }: IFactoryConfig = {}) => {

  const localFacade = localFactory(local);
  const remoteFacade = remoteFactory(remote);

  return {
    local: localFacade,
    remote: remoteFacade,
  };
};