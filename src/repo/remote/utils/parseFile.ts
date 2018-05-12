

import * as moment from 'moment';
import * as Papa from 'papaparse';
import {IReading} from '../../local/FactoryConfig';

export default (file: any) => {
  return new Promise((resolve,reject) => {
    try{
      Papa.parse(file, {
        complete: ({data, errors}: any) => {
          if(errors.length > 0 ){
            return reject(errors[0]);
          }
          // tslint:disable-next-line:no-console
          const values = data
            .filter((row: any)=> {
              if(row.length < 2){
                return false;
              }
              if(! moment(row[0]).isValid()){
                return false;
              }
              if(isNaN(row[1])){
                return false;
              }
              return true;
            })
            .map((row: any) => {
              // tslint:disable-next-line:no-console
              return {
                temp: row[1], 
                timestamp: moment(row[0]).valueOf(),
              } as IReading;
            });
          return resolve(values);
        },
        dynamicTyping: true,
      });
    }catch(err){
      return reject(err);
    }
  });
}