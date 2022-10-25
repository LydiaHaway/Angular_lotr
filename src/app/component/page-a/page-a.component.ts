import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.scss'],
})
export class PageAComponent implements OnInit {
  constructor(private DataService: DataService, private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer FT3Ka6j6mhMvtLgrVR09`,
    }),
  };

  quotes: any[] = [];
  number: number = Math.floor(Math.random() * (1000 + 1));

  ngOnInit(): void {
    this.getQuotes();
  }

  realodPage() {
    window.location.reload();
  }

  getQuotes() {
    this.DataService.getQuotes().subscribe((response: any) =>
      this.quotes.push(response.docs)
    );
  }
}
