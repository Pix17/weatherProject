import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IWeather } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class WeatherSService {
  constructor(private http: HttpClient) {}

  getWeatherFromCity(city: string): Observable<IWeather> {
    const params = new HttpParams()
      .set('lang', 'it')
      .set('q', city)
      .set('units', 'metric')
      .set('APPID', '00b2a84a6b76a4ac78d104307ffc030e');

    return this.http.get<IWeather>(`${environment.apiUrl}`, { params });
  }
  // https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
  // https://nominatim.openstreetmap.org/search
  // https://nominatim.openstreetmap.org/search?<params>
  
  // getOther(){
  //   const params = new HttpParams()
  //   .set('city', 'Rome')
  // return this.http.get<any>('https://nominatim.openstreetmap.org/search',{params});
  // }
}
