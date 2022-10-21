import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.scss'],
})
export class PageAComponent implements OnInit {
  constructor(private DataService: DataService) {}

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
