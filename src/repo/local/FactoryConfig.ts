export interface IReading {
  readonly timestamp: number;
  readonly temp: number;
}

export interface IWeather {
  readonly data: IReading[];
  readonly loaded: boolean;
  readonly loading: boolean;
}

export enum IDataSourceEnum {
  api = 'api',
  csv = 'csv'
}

export interface IState {
  readonly countryId: string;
  readonly dataSource: IDataSourceEnum;
  readonly files: any[];
  readonly weather: IWeather;
}

export default interface IFactoryConfig {
  readonly emitChange?: () => void;
}