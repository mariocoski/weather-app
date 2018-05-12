import {IDataSourceEnum,IReading, IState} from '../local/FactoryConfig';

const testReading: IReading = {
  temp: 282.2,
  timestamp: 1526137200,
}

export default {
  countryId: 'testId',
  dataSource: IDataSourceEnum.csv,
  files: [],
  weather: {
    data: [
      testReading,
    ],
    loaded: true,
    loading: false,
  },
} as IState;