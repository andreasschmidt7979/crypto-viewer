import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherInterface } from './models/weatherAPI.models';
import { WeatherAPIService } from './services/weather-api.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.weather.html',
  styleUrls: ['./app.weather.css'],
})
export class WeatherComponent implements OnInit {
  constructor(private weatherService: WeatherAPIService) {}

  weatherData?: WeatherInterface;
  cityName: string = '';

  fetchData() {
    this.getWeather(this.cityName);
    this.cityName = '';
  }

  ngOnInit(): void {
    this.getWeatherByGeoLocation();
  }

  private getWeather(cityName: string) {
    this.weatherService.fetchWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
      },
    });
  }

  private getWeatherByGeoLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let long = position.coords.longitude;
        let lat = position.coords.latitude;
        this.weatherService.getlocation(lat, long).subscribe({
          next: (res) => {
            this.getWeather(res.city);
            this.cityName = '';
          },
        });
      });
    }
  }
}
