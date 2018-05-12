import * as React from 'react';
import * as reader from 'react-file-reader';
import {Button } from 'semantic-ui-react';

const ReactFileReader = reader.default;

interface IOptions {
  readonly handleFiles: (files: any) => void;
}

export default ({handleFiles} : IOptions) => {
  return (<div>
    <ReactFileReader handleFiles={handleFiles} fileTypes={'.csv'} multipleFiles={false}>
      <Button color="orange" className='btn'>Upload CSV</Button>
    </ReactFileReader>
  </div>);
}