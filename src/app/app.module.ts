import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoiceComponent } from './components/voice/voice.component';
import { TitledSectionComponent } from './components/titled-section/titled-section.component';

@NgModule({
  declarations: [
    AppComponent,
    VoiceComponent,
    TitledSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
