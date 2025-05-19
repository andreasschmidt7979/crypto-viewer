import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.weather.html',
  styleUrl: './app.weather.css',
})
export class WeatherComponent {
  lon = '';
  lat = '';
  city = '';
  countryCode = '';
  weatherData: any = null;
  forecastData!: any[];
  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {
    this.getWeather();
    this.getForecastData();
  }
  getWeather() {
    this.weatherService
      .getWeather(this.city, this.countryCode)
      .subscribe((data) => {
        console.log(data); // Debugging purposes
        this.weatherData = data;
      });
  }
  getForecastData(): void {
    this.weatherService
      .getForecastData(this.city, this.countryCode)
      .subscribe((data) => {
        console.log(data);
        this.forecastData = data;
      });
  }
}
