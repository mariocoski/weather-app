
import {IReading} from '../../../local/FactoryConfig';
import parseFile from '../../utils/parseFile';

interface IOptions {
  readonly files: any[];
}

export default ({ files }: IOptions) => {
  return async (): Promise<IReading[]> => {
    return new Promise((resolve, reject) =>{
      if(files.length === 0){
        return resolve([]);
      }
      try{
        const reader = new FileReader();
        reader.onload = async(e) => {
           const data =  await parseFile(files[0]).catch((err) => {
             reject(err);
           });
           resolve(data as IReading[]);
        }
        reader.readAsText(files[0]);
      }catch(err){
        reject(err);
      }
    }) as Promise<IReading[]>;
  };
};