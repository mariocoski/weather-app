import repoFactory from '../../repo/factory';

export interface IConfig {
  readonly repo: ReturnType<typeof repoFactory>;
}


export default ({ repo }: IConfig) => {
  return async() => {
    const { countryId, weather } = repo.local.getState();
    
    repo.local.patchState({
      weather: {
        ...weather,
        loaded: false,
        loading: true,
      }
    });
    const type = repo.local.getState().dataSource;
    const files = repo.local.getState().files;
    
    return repo.remote.getWeatherData({
      files,
      type,
    })({
      countryId,
    })
    .then((data) => {
      repo.local.patchState({
        weather: {
          ...weather,
          data,
          loaded: true,
          loading: false,
        }
      })
    })
    .catch((err) => {
      // tslint:disable-next-line:no-console
      console.log('error',err);
      repo.local.patchState({
        weather: {
          ...weather,
          loaded: false,
          loading: true,
        }
      });
    });
  }
}