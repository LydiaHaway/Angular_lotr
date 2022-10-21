import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Fave } from 'src/app/Fave';

@Component({
  selector: 'app-fave-list',
  templateUrl: './fave-list.component.html',
  styleUrls: ['./fave-list.component.scss'],
})
export class FaveListComponent implements OnInit {
  @Input() fave!: Fave;
  @Output() onDeleteFave: EventEmitter<Fave> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onDelete(fave: Fave) {
    this.onDeleteFave.emit(fave);
  }
}
