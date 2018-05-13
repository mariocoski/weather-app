import FactoryConfig, { IDataSourceEnum, IState } from './FactoryConfig';

export const initialState: IState = {
  countryId: '2643743', // London
  dataSource: IDataSourceEnum.api,
  files: [],
  weather: {
    data: [],
    loaded: false,
    loading: false,
  },
};

export default ({ emitChange = () => null }: FactoryConfig = {}) => {

  let state = initialState;

  const getState = (): IState => {
    return state;
  };

  const patchState = (patch: Partial<IState>) => {
  
    state = { ...state, ...patch };
    // tslint:disable-next-line:no-console
    console.log("PATCH STATE", patch);
    emitChange();
  };
  
  const clearState = () => {
    state = {...initialState};
  };

  return { getState, patchState, clearState };
};