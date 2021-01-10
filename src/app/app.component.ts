import { Component, OnInit } from '@angular/core';
import { Voice } from './core/models/Voice';
import { SearchPipe } from './pipes/search.pipe';
import { GetVoicesService } from './services/get-voices.service';

export interface ITagFilter {
  id: number;
  tag: string;
}

export interface ISortOption {
  id: number;
  option: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  favouriteVoices: Voice[] = [];
  voices: Voice[] = [];
  selectedVoice: Voice | undefined;
  activeSearch: string | undefined;
  sortOptions: ISortOption[] = [
    { id: 0, option: "Ascendent" },
    { id: 1, option: "Descendent"}
  ];
  selectedSortOption = 0;
  tags: ITagFilter[] = [{ id: 0, tag: "All" }];
  selectedTag: number = 0;

  constructor(
    private getVoicesService: GetVoicesService,
    private searchPipe: SearchPipe
  ) { }


  ngOnInit(): void {
    this.getVoicesService.getVoices().subscribe(
      (voices: Voice[]) => {
        this.voices = voices;
        this.selectedVoice = voices[0];
        let tagId = 0;

        this.voices.map((voice) => voice.tags.map((tag) => {
            tagId++;

            if (!this.tags.find((tagFilter: ITagFilter) => tagFilter.tag.toLocaleLowerCase() === tag.toLocaleLowerCase())) this.tags.push(
              { id: tagId, tag: tag.charAt(0).toUpperCase() + tag.slice(1) })
          }))

        this.tags = [...this.tags];
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

  randomSelection() {
    const filteredVoices = this.searchPipe.transform(this.voices, this.activeSearch, this.getCurrentTag(this.selectedTag) || "All")
    const index = Math.floor(Math.random() * filteredVoices.length);
    const randomVoiceId = filteredVoices[index].id;
  
    this.selectedVoice = this.voices.find((voice) => voice.id === randomVoiceId);
  }

  getCurrentTag(selectedTagId: number) {
    return this.tags.find((tag) => tag.id === selectedTagId)?.tag;
  }
}
