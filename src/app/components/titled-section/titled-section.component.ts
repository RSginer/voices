import { Component, Input } from '@angular/core';

@Component({
  selector: 'voicemod-titled-section',
  templateUrl: './titled-section.component.html',
  styleUrls: ['./titled-section.component.css']
})
export class TitledSectionComponent {
 @Input("title") title: string = "";
}
