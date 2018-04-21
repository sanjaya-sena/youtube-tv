import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: any;
  a: any;
  url = 'https://content.googleapis.com/youtube/v3/playlistItems?playlistId=PLB-GuAsjHIZYLFD5sZ7YlGODZpUPMhDq-&maxResults=50&part=snippet,contentDetails&key=AIzaSyAL_QDjBpwlxGNGWgeiAkAQ1MGuNMjX1co';
  constructor(private http: HttpClient) { }
  getVideos() {
    console.log('GER');
    this.videos = this.http.get(this.url).subscribe((res: HttpResponse < any >) => this.a = res);
    // this.videos = this.http.get(this.url).subscribe(res => console.log(res));
    console.log('sdsads');
  }
  ngOnInit() {
  }

}
