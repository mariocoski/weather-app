import { EventEmitter } from 'events';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import serviceFactory from '../../../service/factory';

export interface IProps {
  readonly service: ReturnType<typeof serviceFactory>;
  readonly observer: EventEmitter;
  readonly render: () => JSX.Element;
}

export default class Provider extends React.Component<IProps> {
  public static readonly childContextTypes = {
    observer: PropTypes.any.isRequired,
    service: PropTypes.any.isRequired,
  };

  public getChildContext() {
    const service = this.props.service;
    const observer = this.props.observer;
    return { service, observer };
  }

  public render() {
    return this.props.render();
  }
}