import * as PropTypes from 'prop-types';
import * as React from 'react';
import serviceFactory from '../../../service/factory';

export interface IChildProps {
  readonly service: ReturnType<typeof serviceFactory>;
}

export interface IProps {
  readonly render: (props: IChildProps) => JSX.Element;
}

export default class Connect extends React.Component<IProps> {
  public static readonly contextTypes = {
    observer: PropTypes.any.isRequired,
    service: PropTypes.any.isRequired,
  };

  public componentDidMount() {
    this.context.observer.addListener('change', this.update.bind(this));
  }

  public componentWillUnmount() {
    this.context.observer.removeListener('change', this.update.bind(this));
  }

  private async update() {
    this.setState({});
  }

  // tslint:disable-next-line:member-ordering
  public render() {
    const service = this.context.service;
    return this.props.render({ service });
  }
}