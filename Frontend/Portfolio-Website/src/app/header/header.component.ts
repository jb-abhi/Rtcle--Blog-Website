import { Component, OnInit } from '@angular/core';
import { RtcleService } from '../rtcle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private rtcleService: RtcleService) {}

  ngOnInit(): void {}

  OnReadRtcle() {
    this.rtcleService.rtcleClicked();
  }
}
