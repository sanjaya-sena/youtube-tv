import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: any;
  constructor(private http: HttpClient) { }
  getVideos() {
    console.log('GER');
    this.videos = this.http.get('https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=AIzaSyAL_QDjBpwlxGNGWgeiAkAQ1MGuNMjX1co ').subscribe(res => console.log(res));

  }
  ngOnInit() {
  }

}
