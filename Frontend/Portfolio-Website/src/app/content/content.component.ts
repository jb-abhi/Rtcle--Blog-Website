import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
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
  constructor() {}

  ngOnInit(): void {}
}
