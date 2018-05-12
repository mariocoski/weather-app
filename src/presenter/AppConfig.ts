import { EventEmitter } from 'events';
import FactoryConfig from '../repo/FactoryConfig';

export default interface IAppConfig {
  readonly repo: FactoryConfig;
  readonly observer: EventEmitter;
}