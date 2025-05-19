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

// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { WeatherInterface } from './models/weatherAPI.models';
// import { WeatherAPIService } from './services/weather-api.service';

// @Component({
//   selector: 'app-weather',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './app.weather.html',
//   styleUrls: ['./app.weather.css'],
// })
// export class WeatherComponent implements OnInit {
//   constructor(private weatherService: WeatherAPIService) {}

//   weatherData?: WeatherInterface;
//   cityName: string = '';

//   fetchData() {
//     this.getWeather(this.cityName);
//     this.cityName = '';
//     console.log("333e");
//   }

//   ngOnInit(): void {
//     this.getWeatherByGeoLocation();
//   }

//   private getWeather(cityName: string) {
//     console.log("555Start");
//     this.weatherService.fetchWeatherData(cityName).subscribe({ next: (response) => {this.weatherData = response; },});
//   }

//   private getWeatherByGeoLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         let long = position.coords.longitude;
//         let lat = position.coords.latitude;
//         this.weatherService.getlocation(lat, long).subscribe({
//           next: (res) => {
//             this.getWeather(res.city);
//             this.cityName = '';
//           },
//         });
//       });
//     }
//   }
// }
