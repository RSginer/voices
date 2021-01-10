import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Voice } from 'src/app/core/models/Voice';

@Component({
  selector: 'voicemod-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.css']
})
export class VoiceComponent {
  @Input() voice: Voice | undefined;
  @Input() isFavourite: boolean = false;
  @Input() isSelected: boolean = false;
  @Output() favouriteClick = new EventEmitter();
  @Output() selectVoiceClick = new EventEmitter();
  favouriteIconVisible: boolean = false;

  toggleFavourite(event: Event) {
    this.favouriteClick.emit(this.voice);
  }

  showFavouriteIcon() {
    this.favouriteIconVisible = true;
  }

  hideFavouriteIcon() {
    this.favouriteIconVisible = false;
  }

  selectVoice(event: Event) {
    this.selectVoiceClick.emit(this.voice)
  }
}
