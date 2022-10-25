import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Fave } from 'src/app/Model/Fave';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalFormComponent } from '../modal-form/modal-form.component';

@Component({
  selector: 'app-fave-list',
  templateUrl: './fave-list.component.html',
  styleUrls: ['./fave-list.component.scss'],
})
export class FaveListComponent implements OnInit {
  @Input() fave!: Fave;
  @Output() onDeleteFave: EventEmitter<Fave> = new EventEmitter();
  constructor(private DataService: DataService, private matdialog: MatDialog) {}

  ngOnInit(): void {}

  onDelete(fave: Fave) {
    this.onDeleteFave.emit(fave);
  }

  OpenModal(fave: Fave) {
    const modal = this.matdialog.open(ModalFormComponent, {
      enterAnimationDuration: '10ms',
      exitAnimationDuration: '1500ms',
      data: {
        id: fave.id,
        name: fave.name,
        text: fave.text,
        img: fave.img,
      },
    });
    modal.afterClosed().subscribe((item) => {
      console.log(item);
    });
  }
}
