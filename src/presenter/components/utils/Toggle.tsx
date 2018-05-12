import * as React from 'react';
import { Checkbox } from 'semantic-ui-react';

interface IOptions {
  readonly defaultValue: boolean;
  readonly label: string;
  readonly onChange: (state: boolean) => void; 
}

const CheckboxExampleToggle = ({onChange, defaultValue, label} : IOptions) => (
  <Checkbox 
    label={label}
    toggle={true}
    // tslint:disable-next-line:jsx-no-lambda 
    onChange={(
      // tslint:disable-next-line:variable-name
      _e, data
    ) => {
      const state = data.checked !== undefined ?
      data.checked : defaultValue;
      onChange(state);
    }}
    defaultChecked={defaultValue}
  />
)

export default CheckboxExampleToggle