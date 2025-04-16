import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './../environments/environment';
import { WeatherInterface } from '../models/weatherAPI.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherAPIService {
  constructor(private http: HttpClient) {}

  private baseURL = environment.baseURL;
  

  fetchWeatherData(placeName: string): Observable<WeatherInterface> {
    let apiUrl = this.baseURL+'city/'+ placeName+'/EN'; //'https://{this.baseURL}/city/landon/EN';
    return this.http.get<WeatherInterface>(apiUrl, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostName, environment.XRapidAPIHostValue)
        .set(environment.XRapidAPIKeyName, environment.XRapidAPIKeyValue),
    });
  }

  getlocation(lat: any, long: any) {
    var geoAPI = `${environment.reverseGeoCodeURL}latitude=${lat}&longitude=${long}&localityLanguage=en`;
    return this.http.get<any>(geoAPI);

  }
}
