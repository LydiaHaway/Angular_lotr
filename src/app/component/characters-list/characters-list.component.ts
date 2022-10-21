import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  characters: any[] = [];
  page: number = 1;
  total: number = 900;

  handlePageChange(page: any) {
    this.DataService.getCharacter(900, page, page).subscribe(
      (response: any) => {
        this.characters.push(response.docs);
      }
    );
  }

  constructor(private DataService: DataService) {}

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter() {
    this.DataService.getCharacter(900, 1, 1).subscribe((response: any) =>
      this.characters.push(response.docs)
    );
  }
}
