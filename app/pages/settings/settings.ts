import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {SettingsService} from '../../services/settings';
import {AuthService} from '../../services/auth';
import {VenueService} from '../../services/venues';

import {WelcomePage} from '../welcome/welcome';

@Component({
  templateUrl: 'build/pages/settings/settings.html'
})
export class SettingsPage {
  APP_VERSION:string;

  constructor(private nav: NavController,
              public authService: AuthService,
              public venueService: VenueService) {
                this.nav = nav;
                this.APP_VERSION = SettingsService.APP_VERSION; 
  }

  signout(){
    this.authService.removeToken();
    this.nav.rootNav.setRoot(WelcomePage);
  }

  clear(){
    this.venueService.clearVenues();
  }

}
