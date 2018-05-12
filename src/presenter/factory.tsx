import * as React from 'react';
import Layout from './components/Layout';
import Provider from './components/utils/Provider';
import FactoryConfig from './FactoryConfig';

export default ({ service, observer }: FactoryConfig) => {
  return <Provider 
           service={service} 
           observer={observer} 
           render={Layout} 
         />;
};