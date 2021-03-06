import './AppWrappers.scss';

import {useEffect, useState} from 'react';
import WeatherWidget from '../../components/WeatherWidget';
import {getGeoLocation, geoCoding} from '../../services/geoLocation';
import {getCurrentWeather} from '../../services/weather';

const AppWrapper = () => {
  const [currentCoordinates, setCurrentCoordinates] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [hottestWeather, setHottestWeather] = useState(null);
  const [hottestLocation, setHottestLocation] = useState(null);

  useEffect(() => {
    getGeoLocation()
      .then(location => ({
        lat: location.coords.latitude,
        long: location.coords.longitude
      }))
      .then(location => setCurrentCoordinates(location));
  }, []);

  useEffect(() => {
    if (currentCoordinates) {
      geoCoding(currentCoordinates).then(location => {
        setCurrentLocation(location);
      });
    }
  }, [currentCoordinates]);

  useEffect(() => {
    if (currentCoordinates) {
      getCurrentWeather(currentCoordinates).then(weather => setCurrentWeather(weather));
    }
  }, [currentCoordinates]);

  useEffect(() => {
    geoCoding({lat: 62.8657307, long: -154.7453284}).then(location => {
      setHottestLocation(location);
    });
  }, []);

  useEffect(() => {
    getCurrentWeather({lat: 62.8657307, long: -154.7453284}).then(weather =>
      setHottestWeather(weather)
    );
  }, []);

  if (!currentLocation || !currentWeather) {
    return (
      <div
        role='progressbar'
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={50}
        aria-valuetext='Loading content...'
        className='cs-loader-container'
        aria-labelledby='spinner'
        data-testid='cs-loader-component'>
        <div className='loading' id='spinner'>
          Loading...
        </div>
      </div>
    );
  }
  return (
    <>
      <WeatherWidget weather={currentWeather} location={currentLocation} />
      <div style={{marginTop: '24px'}}>
        <WeatherWidget weather={hottestWeather} location={hottestLocation} />
      </div>
    </>
  );
};

export default AppWrapper;
