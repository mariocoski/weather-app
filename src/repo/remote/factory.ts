
import axiosInstance from 'axios';
import { AxiosInstance }from 'axios';
import {defaultTo} from 'lodash';
import { IDataSourceEnum } from '../local/FactoryConfig';
import IFactoryConfig from './FactoryConfig';
import getWeatherDataFromApi from './functions/getWeatherData/axios';
import getWeatherDataFromCsv from './functions/getWeatherData/csv';

const baseURL = process.env.REACT_APP_WEATHER_API_URL || 'http://api.openweathermap.org/data/2.5/forecast'; 
const defaultAxios =  async() => axiosInstance.create({ baseURL });

interface IOptions {
  readonly axios?: () => Promise<AxiosInstance>;
  readonly type: IDataSourceEnum;
  readonly files: any[];
}

const getWeatherDataFactory = (config: IOptions = {
  axios: defaultAxios,
  files: [],
  type: IDataSourceEnum.api,
}) => {
  const axios = defaultTo(config.axios, defaultAxios);
  switch(config.type){
    case IDataSourceEnum.csv: 
      return getWeatherDataFromCsv({ files: config.files });
    case IDataSourceEnum.api:
      return getWeatherDataFromApi({ axios });
  }
}

export default (config: IFactoryConfig = {
  axios: defaultAxios,
  type: IDataSourceEnum.api,
}) => {
  // tslint:disable-next-line:no-console
  return {
    getWeatherData: getWeatherDataFactory,
  }
}