import * as React from 'react';
import { Container, Table } from 'semantic-ui-react';
import { IReading, IWeather} from '../../../repo/local/FactoryConfig';
import getDate from '../../utils/getDate';
import getTime from '../../utils/getTime';

interface IOptions {
  readonly weather: IWeather;
}

export default ({
  weather,
}: IOptions) => (<Container>
  <Table celled={true} inverted={true}>
    {weather.loaded && weather.data.length > 0 && <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Time</Table.HeaderCell>
        <Table.HeaderCell>Temp [K]</Table.HeaderCell>
      </Table.Row>
    </Table.Header>}
    <Table.Body>
      { weather.loading && !weather.loaded && <Table.Row>
        <Table.Cell positive={true} colSpan={3}>
          Loading...
        </Table.Cell>
      </Table.Row> }
      { !weather.loading && weather.loaded && weather.data.length === 0 && <Table.Row>
        <Table.Cell warning={true}  colSpan={3}>
         No weather forecase found... :(
        </Table.Cell>
      </Table.Row> }
      { 
        !weather.loading && weather.loaded && weather.data.length > 0  &&
        weather.data.map((reading: IReading, key: number) => (<Table.Row key={key}>
          <Table.Cell>{getDate(reading.timestamp)}</Table.Cell>
          <Table.Cell>{getTime(reading.timestamp)}</Table.Cell>
          <Table.Cell >{reading.temp}</Table.Cell>
        </Table.Row>)) 
      }
    </Table.Body>
  </Table>
</Container>);
