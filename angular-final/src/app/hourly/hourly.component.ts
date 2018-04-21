import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WeatherService} from '../service/weather.service';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css']
})
export class HourlyComponent implements OnInit {
  returnedCel: Object = "";
  returnedTime: Object = "";
  returnedCon: Object = "";
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  this.httpClient.get('http://api.wunderground.com/api/83a16c7369f768a0/geolookup/conditions/forecast/q/Canada/ottawa.json').subscribe(data =>{
      console.log(data);
      var strJson: string = JSON.stringify(data);
      var parsedJson = JSON.parse(strJson);
      this.returnedCel = parsedJson.current_observation.temp_c;
      this.returnedTime = parsedJson.current_observation.observation_time;
      this.returnedCon = parsedJson.current_observation.weather;
    });
  
  
}



}
