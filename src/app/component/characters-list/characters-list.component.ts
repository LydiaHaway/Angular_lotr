import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Character } from 'src/app/Model/Character';
import { DataService } from 'src/app/services/data.service';
import { ModalComponent } from '../modal/modal.component';

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

  constructor(private DataService: DataService, private matdialog: MatDialog) {}

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter() {
    this.DataService.getCharacter(900, 1, 1).subscribe((response: any) =>
      this.characters.push(response.docs)
    );
  }

  OpenModal(character: Character) {
    const modal = this.matdialog.open(ModalComponent, {
      enterAnimationDuration: '10ms',
      exitAnimationDuration: '1500ms',
      data: {
        name: character.name,
        birth: character.birth,
        death: character.death,
        gender: character.gender,
        height: character.height,
        race: character.race,
        realm: character.realm,
        spouse: character.spouse,
        wikiUrl: character.wikiUrl,
      },
    });
    modal.afterClosed().subscribe((item) => {
      console.log(item);
    });
  }
}
