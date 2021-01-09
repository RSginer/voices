import { Component, OnInit } from '@angular/core';
import { Voice } from './core/models/Voice';
import { GetVoicesService } from './services/get-voices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  favoriteVoices: Voice[] = [];
  voices: Voice[] = [];

  constructor(
    private getVoicesService: GetVoicesService
  ) {}


  ngOnInit(): void {
    this.getVoicesService.getVoices().subscribe(
      (voices: Voice[]) => {
        this.voices = voices;
    }, (err) => console.log(err))
  }
}
