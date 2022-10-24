import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private Ref: MatDialogRef<ModalComponent>
  ) {}

  character: any;

  ngOnInit(): void {
    this.character = this.data;
  }

  Closepopup() {
    this.Ref.close('Closing from function');
  }
}
