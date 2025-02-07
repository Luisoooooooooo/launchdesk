import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=40.4168&longitude=-3.7038&current_weather=true&timezone=Europe/Madrid';
  private temperature = signal<number | null>(null);
  private weatherCode = signal<number | null>(null);

  constructor(private http: HttpClient) {
    this.fetchWeather();
  }

  fetchWeather(): void {
    this.http.get<any>(this.apiUrl).subscribe(
      (data) => {
        this.temperature.set(data.current_weather.temperature);
        this.weatherCode.set(data.current_weather.weathercode);
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }

  getTemperature(): number | null {
    return this.temperature();
  }

  getWeatherCondition(): string {
    const weatherCodeValue = this.weatherCode();
    if (weatherCodeValue === null) return 'Unknown';

    const weatherConditions: { [key: number]: string } = {
      0: 'Clear sky',
      1: 'Mainly clear',
      2: 'Partly cloudy',
      3: 'Overcast',
      45: 'Fog',
      48: 'Depositing rime fog',
      51: 'Light drizzle',
      53: 'Moderate drizzle',
      55: 'Heavy drizzle',
      61: 'Light rain',
      63: 'Moderate rain',
      65: 'Heavy rain',
      80: 'Light showers',
      81: 'Moderate showers',
      82: 'Heavy showers',
      95: 'Thunderstorm',
      96: 'Light thunderstorm',
      99: 'Severe thunderstorm'
    };

    return weatherConditions[weatherCodeValue] || 'Unknown weather';
  }

  getWeatherIcon(): string {
    const weatherCodeValue = this.weatherCode();
    if (weatherCodeValue === null) return 'fa-solid fa-question';

    const weatherIcons: { [key: number]: string } = {
      0: 'fa-regular fa-sun-bright',
      1: 'fa-regular fa-sun-bright',
      2: 'fa-regular fa-cloud-sun',
      3: 'fa-regular fa-cloud',
      45: 'fa-regular fa-smog',
      48: 'fa-regular fa-smog',
      51: 'fa-regular fa-cloud-rain',
      53: 'fa-regular fa-cloud-rain',
      55: 'fa-regular fa-cloud-showers-heavy',
      61: 'fa-regular fa-cloud-rain',
      63: 'fa-regular fa-cloud-rain',
      65: 'fa-regular fa-cloud-showers-heavy',
      80: 'fa-regular fa-cloud-showers-heavy',
      81: 'fa-regular fa-cloud-showers-heavy',
      82: 'fa-regular fa-cloud-showers-heavy',
      95: 'fa-regular fa-bolt',
      96: 'fa-regular fa-bolt',
      99: 'fa-regular fa-bolt'
    };

    return weatherIcons[weatherCodeValue] || 'fa-solid fa-question';
  }
}
