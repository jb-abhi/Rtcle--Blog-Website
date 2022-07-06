import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { RtcleData } from './rticle.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RtcleService {
  sectionData: RtcleData[] = [];
  public rtcleSubject = new Subject<RtcleData[]>();

  constructor(private http: HttpClient) {}

  rtcleClicked() {
    this.http
      .get<{ message: string; data: any }>('http://localhost:3000/readRTcle')
      .subscribe((data) => {
        this.sectionData = JSON.parse(JSON.stringify(data.data));
        this.rtcleSubject.next(this.sectionData);
      });
  }
}
