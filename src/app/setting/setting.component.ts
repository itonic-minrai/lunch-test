import { Component, OnInit, OnDestroy } from '@angular/core';
import {Settings, SettingResponse} from '../setting';
import {SettingService} from '../setting.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit, OnDestroy {

  lunch: Settings;
  settingSubscrition: Subscription;

  constructor(private settingsService:SettingService) {

  };


  ngOnInit(): void {
    // this.lunch = new SettingData( 50, 8);
    this.settingSubscrition = this.settingsService.settings.subscribe((setting: Settings) => {
        this.lunch = setting;
      }
    );
  }

  onSubmit() {
    this.settingsService.save(this.lunch);
    // this.settingsService.save(this.lunch).subscribe()
    // console.log('all valid data foundA', this.lunch);
  }

  ngOnDestroy(){
    console.log('distroy')
    this.settingSubscrition.unsubscribe();
  }

  emitNew(){
    this.settingsService.emiitNewSetting();
  }


}
