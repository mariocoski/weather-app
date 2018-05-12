import { AxiosInstance } from 'axios';
import { IDataSourceEnum } from '../local/FactoryConfig';

// tslint:disable-next-line:no-empty-interface
export default interface IFactoryConfig {
  readonly axios: () => Promise<AxiosInstance>;
  readonly type: IDataSourceEnum;
}