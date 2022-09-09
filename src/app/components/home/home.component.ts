import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../tmdb.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // page loader
  showSpinner = true;
  dataArray: any = [];
  filteredString: string = '';


  constructor(private tmdb: TmdbService, private http: HttpClient) {}

  ngOnInit(): void {
    this.tmdb.getData().subscribe((res) => {
      console.log(this.dataArray);
      this.dataArray = Object.values(res);
      // loading stops
      this.showSpinner = false;
    });
  }
}
