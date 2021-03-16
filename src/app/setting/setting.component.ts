import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import SettingData from './data';
// import {Setting} from './setting';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})




export class SettingComponent implements OnInit {

  lunch = new SettingData( 50, 8);

  constructor( private http: HttpClient ) {

  };

  get settings(){
    return this.http.get('http://localhost:3000/settings');
  }


  ngOnInit(): void {
    // this.lunch = new SettingData( 50, 8);
    this.settings.subscribe( (response) =>{
      if(200 == response.status){
        console.log(response.data);
      }
    });
    console.log(this.settings, 'settings');
  }

  onSubmit( ){
    console.log('all valid data foundA', this.lunch);
  }
  

}
