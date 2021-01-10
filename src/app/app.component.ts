import { Component, OnInit } from '@angular/core';
import { Voice } from './core/models/Voice';
import { GetVoicesService } from './services/get-voices.service';


export interface ITagFilter {
  id: number;
  tag: string;
}

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
  tags: ITagFilter[] = [{id: 0, tag: "All"}];
  selectedTag: number = 0;

  constructor(
    private getVoicesService: GetVoicesService
  ) {}


  ngOnInit(): void {
    this.getVoicesService.getVoices().subscribe(
      (voices: Voice[]) => {
        this.voices = voices;
        this.selectedVoice = voices[0];
        let tagId = 0;

        this.voices.map((voice) => voice.tags.map((tag) => {
          tagId++;
          if (!this.tags.find((tagFilter: ITagFilter) => tagFilter.tag === tag)) this.tags.push({id: tagId, tag:tag})
        }))

        this.tags = [...this.tags];
        console.log(this.tags)
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

  changeTag(tag: ITagFilter) {
    this.selectedTag = tag; 
  }

  randomSelection() {
    const index = Math.floor(Math.random() * this.voices.length);

    this.selectedVoice = this.voices[index];
  }
}
