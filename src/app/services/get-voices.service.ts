import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Voice } from '../core/models/Voice';

@Injectable({
  providedIn: "root"
})
export class GetVoicesService {
  constructor(private http: HttpClient) { }

  getVoices(): Observable<Voice[]> {
    return this.http.get(`${environment.apiUrl}/voices.json`) as Observable<Voice[]>;
  }
}