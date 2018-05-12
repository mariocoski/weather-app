
import { EventEmitter } from 'events';
import * as ReactDOM from 'react-dom';
import app from './app';

const maxNumOfListeners = 100;
const observer = new EventEmitter();
observer.setMaxListeners(maxNumOfListeners);

const emitChange = () => {
  observer.emit('change');
};

ReactDOM.render(
  app({
    observer,
    repo: {
      local: { emitChange },
    },
  }),
  document.getElementById('root') as HTMLElement,
);