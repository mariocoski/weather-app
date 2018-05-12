import { EventEmitter } from 'events';
import serviceFactory from '../service/factory';

export default interface IFactoryConfig {
  readonly service: ReturnType<typeof serviceFactory>;
  readonly observer: EventEmitter;
}