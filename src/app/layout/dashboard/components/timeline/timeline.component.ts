import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  news: any = [];
  constructor(private service: ApiServiceService) { }

  ngOnInit() {
    this.getNews();
  }
  getNews() {
    this.service.getNews().subscribe(newsResp => {
        console.log(newsResp)
        this.news = newsResp['articles'];
    })
}

showDate(date) {
  if(date && date.publishedAt) {
    return new Date(date.publishedAt)
  }
}

}
