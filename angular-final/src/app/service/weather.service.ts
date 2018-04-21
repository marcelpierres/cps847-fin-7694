import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {
  returnedJson: Object = "";
  data = [ 'weather1' , 'weather2' ];
  constructor(public http: HttpClient) {
    console.log('Data service is made');
  }

  getWeather() {
    this.http.get('http://api.wunderground.com/api/83a16c7369f768a0/geolookup/conditions/forecast/q/Canada/ottawa.json').subscribe(data =>{
      console.log(data);
      var strJson: string = JSON.stringify(data);
      var parsedJson = JSON.parse(strJson);
      this.returnedJson = parsedJson.current_observation.temp_c;

    });
  
  }

  getData() {
    return this.data;
  }





}
