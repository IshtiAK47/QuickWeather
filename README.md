# QuickWeather

QuickWeather is a minimal, responsive, university-level weather application built with pure HTML5, CSS3, and vanilla JavaScript (ES6+). It fetches real-time weather data from WeatherAPI and presents the result in a clean, centered dashboard with a search experience and a live-location option.

## Project Overview

This project was designed to demonstrate core frontend fundamentals without using any external frameworks or libraries. It focuses on:

- Semantic HTML structure
- Modern responsive UI styling
- Asynchronous API integration with `fetch()`
- DOM rendering and event handling
- Browser geolocation support for current location weather

## Features

- Search weather by city name
- Load a default location on first visit
- Show current temperature in Celsius
- Display city, region, and country information
- Render custom formatted day, date, and time from WeatherAPI local time
- Display the current weather condition text
- Fetch weather for the user’s live location through the browser geolocation API
- Responsive glass-style dashboard layout with a centered card interface

## Technologies Used

- HTML5
- CSS3
- JavaScript ES6+
- WeatherAPI Current Weather endpoint

## File Structure

```text
QuickWeather/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works

1. On page load, the app requests weather data for the default location.
2. The search form allows users to enter any city name and submit it.
3. The live location button uses `navigator.geolocation` to request the browser’s current position.
4. The app sends the location data to WeatherAPI and receives a JSON response.
5. The script extracts the relevant fields and updates the dashboard dynamically.

## WeatherAPI Integration

The application uses the following endpoint pattern:

```text
https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY_HERE&q=LOCATION
```

The API key in `script.js` is currently a placeholder or project key for testing. Replace it with your own valid WeatherAPI key if needed.

## Setup Instructions

### Option 1: Open Directly

You can open `index.html` in a browser to view the project.

### Option 2: Run with a Local Server

Using a local server is recommended, especially for geolocation support and more consistent browser behavior.

Examples:

- VS Code Live Server
- Python simple server
- Any local development server

## Usage

1. Open the application in a browser.
2. Wait for the default city weather to load.
3. Type a city name into the search field and click Search.
4. Click Live Location to fetch weather data for your current position.

## Notes for Reviewers

- Geolocation may require browser permission.
- Some browsers restrict location access when the page is opened through `file://`; a local server is recommended.
- Weather data is displayed in Celsius.
- The design intentionally stays minimal to keep the interface clear and focused.

## Student Information

- Ishtiak Mahmood
- ID: B220102002
- Department of ICT, Session 22-23

