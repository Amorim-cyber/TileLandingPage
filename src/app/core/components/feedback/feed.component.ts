import { Component, OnInit } from "@angular/core";
import { Feed } from "./feed";
import { FeedService } from "./feed.service";

@Component({
  selector: 'app-feed',
  templateUrl:'./feed.component.html',
  styleUrls:['./feed.component.css']
})
export class FeedComponent implements OnInit{

  feed: Feed[] = [];

  constructor(private feedService: FeedService){ }

  ngOnInit(): void {
    this.feed = this.feedService.retrieveAll();
  };

}
