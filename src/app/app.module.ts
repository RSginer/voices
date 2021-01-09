import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { VoiceComponent } from './components/voice/voice.component';
import { TitledSectionComponent } from './components/titled-section/titled-section.component';
import { GetVoicesService } from './services/get-voices.service';

@NgModule({
  declarations: [
    AppComponent,
    VoiceComponent,
    TitledSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GetVoicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
