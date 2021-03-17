import { Injectable } from '@angular/core';
import {Settings, SettingResponse} from './setting';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  settingSubject: BehaviorSubject<Settings> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {

  };

  get settings(): Observable<Settings> {
    return this.settingSubject.asObservable();
   
  }

  fetchSettings(): void{
    this.http.get<SettingResponse>('http://localhost:3000/settings').subscribe(res => {
      if (200 == res.status) {
        this.settingSubject.next(res.data);
      }
    });
  }

  emiitNewSetting(){
    this.settingSubject.next({
      "lunchAmount": {
      "label": "lunch Amount",
      "price": 50
      },
      "discountAmount": {
      "label": "Discount amount",
      "percentage": 80
      }
      });
  }
}
