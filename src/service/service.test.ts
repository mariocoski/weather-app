
import repoFactory from '../repo/factory';
import { initialState } from '../repo/local/factory';
import {  IDataSourceEnum } from '../repo/local/FactoryConfig';
import testState from '../repo/utils/testState';
import serviceFactory from './factory';

const repo = {
  ...repoFactory(),
  remote: {
    getWeatherData: jest.fn((type) => {
      return Promise.resolve(testState.weather.data);
    }),
  }
};

const service = serviceFactory({ repo });

describe(__filename,()=>{

  it('should clear local repo', async()=> {
    repo.local.patchState(testState);
    service.clearService();
    expect(repo.local.getState()).toMatchObject(initialState);
  });

  it('should get weather from local repo', async()=>{
    const weather = service.getWeather();
    expect(weather).toMatchObject(initialState.weather);
  });

  it('should get data source from local repo', async()=>{
    const dataSource = service.getDataSource();
    expect(dataSource).toBe(initialState.dataSource);
  });

  it('should set weather to the local repo', async()=>{
    service.setWeather(testState.weather);
    const weather = repo.local.getState().weather;
    expect(weather).toMatchObject(testState.weather);
  });

  it('should call weather and correctly set the weather', () => {
    service.getWeatherData();
    const currentWeatherData = repo.local.getState().weather.data;
    expect(currentWeatherData).toMatchObject(testState.weather.data);
  });
  
  it('should correctly set dataSource', () => {
    service.setDataSource(IDataSourceEnum.csv);
    const dataSource = repo.local.getState().dataSource;
    expect(dataSource).toBe(IDataSourceEnum.csv);
  });

  it('should correctly set files', () => {
    const testData = [{ filename: 'test.csv' }];
    service.setFiles(testData);
    const files = repo.local.getState().files;
    expect(files).toBe(testData);
  });
});