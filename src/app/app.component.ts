import { Component, OnInit } from '@angular/core';
import { Voice } from './core/models/Voice';
import { GetVoicesService } from './services/get-voices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  favouriteVoices: Voice[] = [];
  voices: Voice[] = [];
  selectedVoice: Voice | undefined;
  activeSearch: string | undefined;

  constructor(
    private getVoicesService: GetVoicesService
  ) {}


  ngOnInit(): void {
    this.getVoicesService.getVoices().subscribe(
      (voices: Voice[]) => {
        this.voices = voices;
    }, (err) => console.log(err))
  }

  toggleFavourite(voice: Voice) {
    const favVoice = this.favouriteVoices.find((v) => v.id === voice.id);
    
    if (!favVoice) {
      this.favouriteVoices = [...this.favouriteVoices, voice]
    } else {
      this.favouriteVoices = this.favouriteVoices.filter((v) => v.id !== voice.id)
    }
  }
}
