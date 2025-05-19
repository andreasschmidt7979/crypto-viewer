import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  getWeather(city: string, countryCode: string) {
    // Replace YOUR_API_KEY with your actual API key from OpenWeatherMap
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=03d4c1b3999231e0ba933cb7d6dd7788`;
    console.log('today weather');
    return this.http.get(apiUrl);
  }
  getForecastData(city: string, countryCode: string) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&units=metric&appid=03d4c1b3999231e0ba933cb7d6dd7788`;
    console.log('5day weather');
    return this.http.get(url).pipe(
      map((data: any) => {
        return data.list.filter((item: any) => {
          return item.dt_txt.includes('12:00:00'); // Filter to include only the 12:00:00 forecast for each day
        });
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error.message || 'Something went wrong');
  }
}
