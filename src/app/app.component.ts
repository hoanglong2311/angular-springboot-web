import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.onLoad();
  }
  constructor(private http: HttpClient) {}

  onLoad() {
    this.http
      .get<any>('http://localhost:8070/api/sp1/product/list')
      .subscribe((response) => {
        console.log('xxx', response);
      });
  }
  title = 'AdminFE';
}
