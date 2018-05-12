
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { initialState } from '../../../repo/local/factory';
import Weather from './index';

it('can match weather snapshot', () => {
  const { weather } = initialState;
 
  const component = renderer.create(
   <Weather 
     weather={weather}
   />,
  );

  const tree = component.toJSON();
 
  expect(tree).toMatchSnapshot();
});

it('should show message that no foreast is available', () => {
 
  const component = renderer.create(
   <Weather 
     weather={{
       data: [],
       loaded: true,
       loading: false,
     }}
   />,
  );

  const tree = component.toJSON();
 
  expect(tree).toMatchSnapshot();
});


it('should show loading message when loading weather forecast', () => {
  
   const component = renderer.create(
    <Weather 
      weather={{
        data: [],
        loaded: false,
        loading: true,
      }}
    />,
   );
 
   const tree = component.toJSON();
  
   expect(tree).toMatchSnapshot();
 });

