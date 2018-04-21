import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {
  videos: any;
  a: any;
  nextPageToken: any;
  url = 'https://content.googleapis.com/youtube/v3/playlistItems?playlistId=PLB-GuAsjHIZYLFD5sZ7YlGODZpUPMhDq-&maxResults=50&part=snippet,contentDetails&key=AIzaSyAL_QDjBpwlxGNGWgeiAkAQ1MGuNMjX1co';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.videos = this.http.get(this.url).subscribe((res: HttpResponse < any >) => this.a = res);
    this.videos = this.http.get(this.url).subscribe(res => this.nextPageToken = res.nextPageToken);

  }

  nextPage() {
    this.videos = this.http.get('https://content.googleapis.com/youtube/v3/playlistItems?playlistId=PLB-GuAsjHIZYLFD5sZ7YlGODZpUPMhDq-&maxResults=50&part=snippet,contentDetails&'
      + 'pageToken='
      + this.nextPageToken
      + '&key=AIzaSyAL_QDjBpwlxGNGWgeiAkAQ1MGuNMjX1co'
    ).subscribe((res: HttpResponse < any >) => this.a = res);
    console.log(this.nextPageToken);
  }

}
