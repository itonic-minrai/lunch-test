import { Injectable } from '@angular/core';
import { Settings, SettingResponse, SettingSaveResponse } from './setting';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SettingService {

  settingSubject: BehaviorSubject<Settings> = new BehaviorSubject(null);
  url: string = 'http://localhost:3000/settings';

  constructor(private http: HttpClient) {

  };

  get settings(): Observable<Settings> {
    return this.settingSubject.asObservable();

  }

  fetch(): void {
    this.http.get<SettingResponse>(this.url).subscribe(res => {
      if (200 == res.status) {
        this.settingSubject.next(res.data);
      }
    });
  }


  save(settings: Settings): void {
    this.http.post<SettingSaveResponse>(this.url, settings).subscribe(res => {
      if (200 == res.status) {
        this.settingSubject.next(settings);
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
