const searchForm = document.querySelector('.search-form');
const searchField = document.querySelector('.search-field');
const locationButton = document.querySelector('.location-button');
const tempField = document.querySelector('.temp-field');
const locationField = document.querySelector('.location-field');
const dateTimeField = document.querySelector('.date-time-field');
const conditionField = document.querySelector('.condition-field');

const API_KEY = '76a5285352394bf589c71830260906';
const BASE_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=`;
let targetLocation = 'Mumbai';

const getDayName = (number) => {
  switch (number) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return '';
  }
};

const updateDetails = (temp, locationName, time, condition) => {
  tempField.innerText = `${temp}°C`;
  locationField.innerText = locationName;
  dateTimeField.innerText = time;
  conditionField.innerText = condition;
};

const formatDateTime = (localtime) => {
  const [isolatedDateString, time] = localtime.split(' ');
  const dateObject = new Date(isolatedDateString);
  const dayName = getDayName(dateObject.getDay());
  const displayDate = dateObject.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  return `${dayName}, ${displayDate} • ${time}`;
};

const fetchResults = async (target) => {
  try {
    const response = await fetch(`${BASE_URL}${encodeURIComponent(target)}`);

    if (!response.ok) {
      throw new Error('Unable to load weather data.');
    }

    const data = await response.json();
    const cityName = data.location.name;
    const regionName = data.location.region;
    const countryName = data.location.country;
    const temperature = data.current.temp_c;
    const condition = data.current.condition.text;
    const localtime = data.location.localtime;
    const formattedTime = formatDateTime(localtime);
    const locationName = regionName ? `${cityName}, ${regionName}, ${countryName}` : `${cityName}, ${countryName}`;

    updateDetails(temperature, locationName, formattedTime, condition);
  } catch (error) {
    updateDetails('--', 'Location not found', '--', 'Try a different city name.');
    console.error(error);
  }
};

const fetchLiveLocation = () => {
  if (!navigator.geolocation) {
    updateDetails('--', 'Geolocation unavailable', '--', 'Your browser does not support live location.');
    return;
  }

  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      const liveTarget = `${coords.latitude},${coords.longitude}`;
      searchField.value = '';
      fetchResults(liveTarget);
    },
    () => {
      updateDetails('--', 'Location access blocked', '--', 'Allow location access to use live weather.');
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    }
  );
};

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const rawValue = searchField.value.trim();

  if (!rawValue) {
    return;
  }

  targetLocation = rawValue;
  fetchResults(targetLocation);
});

locationButton.addEventListener('click', fetchLiveLocation);

fetchResults(targetLocation);
