import { Component, OnDestroy, OnInit } from '@angular/core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import {
  faShareFromSquare,
  faHeart,
  faUpRightFromSquare,
  faChevronRight,
  faChevronLeft,
  faBookmark,
  faReply,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import { RtcleService } from '../rtcle.service';
import { RtcleData } from '../rticle.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers: [],
})
export class ContentComponent implements OnInit {
  faClock = faClock;
  faSquareShareNodes = faShareFromSquare;
  faHeart = faHeart;
  faUpRightFromSquare = faUpRightFromSquare;
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  faBookmark = faBookmark;
  faReply = faReply;
  faLink = faLink;

  heading: string = '';
  time: string = '';

  firstSection: string = '';
  secondSection: string = '';
  thirdSection: string = '';

  comment1 = '';
  comment2 = '';
  comment3 = '';
  comment4 = '';

  datas: RtcleData[] = [];

  getDataforContent(datas: RtcleData[], name: string): string {
    name;
    return datas
      .filter((item) => item.title === `${name}`)
      .map((item) => item.content)
      .toString();
  }

  constructor(public rtcleService: RtcleService) {}

  ngOnInit() {
    this.rtcleService.rtcleSubject.subscribe((sectionData) => {
      this.datas = sectionData;

      this.heading = this.getDataforContent(this.datas, 'heading');
      this.time = this.getDataforContent(this.datas, 'time');

      this.firstSection = this.getDataforContent(this.datas, 'firstSection');
      this.secondSection = this.getDataforContent(this.datas, 'secondSection');
      this.thirdSection = this.getDataforContent(this.datas, 'thirdSection');

      this.comment1 = this.getDataforContent(this.datas, 'comment1');
      this.comment2 = this.getDataforContent(this.datas, 'comment2');
      this.comment3 = this.getDataforContent(this.datas, 'comment3');
      this.comment4 = this.getDataforContent(this.datas, 'comment4');

      this.firstSection = this.datas
        .filter((item) => item.title === 'firstSection')
        .map((item) => item.content)
        .toString();

      this.secondSection = this.datas
        .filter((item) => item.title === 'secondSection')
        .map((item) => item.content)
        .toString();

      this.thirdSection = this.datas
        .filter((item) => item.title === 'thirdSection')
        .map((item) => item.content)
        .toString();
    });
  }
}
