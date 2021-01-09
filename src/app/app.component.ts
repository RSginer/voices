import { Component, Inject } from '@angular/core';
import { Voice } from './core/models/Voice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  favoriteVoices: Voice[] = [];
  voices: Voice[] = [];

}
