import { IDataSourceEnum, IWeather } from '../repo/local/FactoryConfig';
import FactoryConfig from './FactoryConfig';
import getWeatherData from './functions/getWeatherData';

export default ({ repo }: FactoryConfig) => {
  return {
    clearService: () => {
      repo.local.clearState();
    },
    getDataSource: () => {
      return repo.local.getState().dataSource;
    },
    getWeather: () => {
     return repo.local.getState().weather;
    },
    getWeatherData: getWeatherData({ repo }),
    setDataSource: (dataSource: IDataSourceEnum) => {
      repo.local.patchState({
        dataSource,
      });
    },
    setFiles: (files: any) => {
      repo.local.patchState({
        files,
      });
    },
    setWeather: (weather: IWeather) => {
      return repo.local.patchState({
        weather
      });
    },
  }
}