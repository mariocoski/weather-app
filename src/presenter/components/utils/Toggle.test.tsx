
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Toggle from './Toggle';

it('can toggle', () => {
  const handler = jest.fn();
  const component = renderer.create(
   <Toggle 
     defaultValue={true}
     onChange={handler}
     label={'label'}
   />,
  );

  const tree: any = component.toJSON();
 
  expect(tree).toMatchSnapshot();

  tree.props.onClick();

  expect(handler).toHaveBeenCalledTimes(1);
});
