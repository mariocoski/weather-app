import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
  Button,
  Container,
  Segment,
} from 'semantic-ui-react';
import { IDataSourceEnum } from '../../repo/local/FactoryConfig';
import '../styles/app.css';
import Connect from './utils/Connect';
import CsvForm from './utils/CsvForm';
import Toggle from './utils/Toggle';
import WeatherApp from './Weather/index';

export default () => {
  return (
    // tslint:disable-next-line:jsx-no-lambda
    <Connect render={({ service }) => {
      const weather = service.getWeather();
      const dataSource = service.getDataSource();

      return <Container style={{ marginTop: '20px', marginBottom: '20px'}}>
        <h1>Weather App</h1>
        <h2>London, UK</h2>
        <Segment color='orange'>
            <Toggle 
            defaultValue={dataSource === IDataSourceEnum.csv} 
            label={'Toggle data source'}
            onChange={(state) => {
              const value = state === true ? IDataSourceEnum.csv : IDataSourceEnum.api;
              service.setDataSource(value);
              service.setFiles([]);
              service.setWeather({
                data: [],
                loaded: false,
                loading: false,
              })
            }
          }/>
        </Segment>
        {dataSource === IDataSourceEnum.api ? <Button 
          color="orange"
          style={{marginBottom: '20px'}}
          onClick={() => {
            service.getWeatherData().then(() => {
              // tslint:disable-next-line:no-console
              console.log('success');
            }).catch((err) => {
              // tslint:disable-next-line:no-console
              console.log(err);
            });
          }}>
            Get Weather Data
          </Button> 
          : 
          <CsvForm handleFiles={(files) => {
            service.setFiles(files);
            service.getWeatherData().then(() => {
              // tslint:disable-next-line:no-console
              console.log('success');
            }).catch((err) => {
              // tslint:disable-next-line:no-console
              console.log(err);
            });
          }} /> }
        <div style={{marginTop: '10px'}}>
        <WeatherApp weather={weather}/>
        </div>
      </Container>;
    }} />);
}