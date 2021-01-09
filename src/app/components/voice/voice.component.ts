import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Voice } from 'src/app/core/models/Voice';

@Component({
  selector: 'voicemod-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.css']
})
export class VoiceComponent {
  @Input() voice: Voice | undefined;
  @Output() favouriteClick = new EventEmitter();

  constructor(private sanitizer: DomSanitizer) {}

  getBackgroundImage() {
    return this.sanitizer.bypassSecurityTrustStyle(`background-image: url(/assets/${this.voice?.icon})`);
  }

  toggleFavourite() {
    console.log("click")
    this.favouriteClick.emit(this.voice);
  }
}
