
import { AxiosInstance } from 'axios';
import { IReading } from '../../../local/FactoryConfig';

interface IOptions {
  readonly countryId: string;
}
const appid = process.env.REACT_APP_WEATHER_APP_ID ;

interface IConfig {
  readonly axios: () => Promise<AxiosInstance>;
}

export default ({ axios }: IConfig) => {
  return async ({
    countryId,
  }: IOptions): Promise<IReading[]> => {
    const params = {
      appid,
      id: countryId,
    };
    // tslint:disable-next-line:no-console
    const connection = await axios();
    try{
      const { data } = await Promise.resolve(connection.get('', { params }));
      const items = data.list.map((item: any) => {
        return {
          temp: item.main.temp,
          timestamp: item.dt * 1000,
        } as IReading;
      });
      return Promise.resolve(items);
    }catch(err){
      return Promise.reject(err);
    }
  };
};
