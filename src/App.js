import './App.css';
import { useState } from 'react';
import API from './api';
import Table from './components/Table';

function App() {

  const [forecasts, setForecasts] = useState ([]);

  const loadData = () => {
    // try {
    //   const response = await API.get('/environment/24-hour-weather-forecast');

    //   setForecast(response.data.item.general.forecast);
    //   setTemp(response.data.item.general.forecast.high);

    // } catch (error) {
    //   console.log('Error Message: ', error.message);
    // } finally {
    //   console.log('Load Data completed.');
    // }

    const response = API.get('/environment/4-day-weather-forecast')
    .then((response) => {
      setForecasts(response.data.items[0].forecasts);
    })
  };


  return (
    <div className='App'>
     <h1>4 Days Forecast</h1>
     <button onClick={ loadData }>Click Me!</button>
     <Table forecasts={ forecasts }  />
    </div>
  );
}

export default App;
