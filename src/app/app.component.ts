import { Component } from '@angular/core';
import {SettingService} from './setting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Tour of heroes';
  constructor(private setingsService:SettingService) {

  };



  ngOnInit(){
    this.setingsService.fetch();
  }
}
