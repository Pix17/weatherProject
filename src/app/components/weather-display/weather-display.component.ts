import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeather } from 'src/app/interfaces/interfaces';
import { WeatherSService } from 'src/app/services/weather-s.service';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent implements OnInit {

  inputCity!:string;
  city!: Observable<IWeather>;

  date:Date = new Date();
  icon!:string;

  constructor(private serv: WeatherSService) { }

  ngOnInit(): void {
  }

  takeCity(){
    this.city = this.serv.getWeatherFromCity(this.inputCity);
    this.serv.getWeatherFromCity(this.inputCity).subscribe(
      item => item.weather.map(item => this.icon = `http://openweathermap.org/img/wn/${item.icon}.png`)
    )
  // console.log(this.serv.getOther())    
  }
}
