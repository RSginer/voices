import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { VoiceComponent } from './components/voice/voice.component';
import { TitledSectionComponent } from './components/titled-section/titled-section.component';
import { GetVoicesService } from './services/get-voices.service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { NgSelectModule } from '@ng-select/ng-select';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VoiceComponent,
    TitledSectionComponent,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [
    GetVoicesService,
    SearchPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
