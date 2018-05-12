import * as moment from 'moment';

export default (timestamp: number) => {
  return moment(timestamp).format('LL');
} 