import { Component, OnInit } from '@angular/core';
import { Fave } from 'src/app/Model/Fave';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  faves: Fave[] = [];

  constructor(private DataService: DataService) {}

  ngOnInit(): void {
    this.DataService.getFave().subscribe((faves) => (this.faves = faves));
  }

  addFave(fave: Fave) {
    this.DataService.addFave(fave).subscribe((fave) => this.faves.push(fave));
  }

  deleteFave(fave: Fave) {
    this.DataService.deleteFave(fave).subscribe(
      () => (this.faves = this.faves.filter((f) => f.id !== fave.id))
    );
  }
}
