import { Component, OnInit } from '@angular/core';
import {SettingService} from '../setting.service';
import {Settings, SettingResponse} from '../setting';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {

  lunch: Settings;
  settingSubscrition: Subscription;

  constructor(private settingsService:SettingService) { }

  ngOnInit(): void {
    this.settingSubscrition = this.settingsService.settings.subscribe((setting: Settings) => {
      this.lunch = setting;
    });
  }

}
