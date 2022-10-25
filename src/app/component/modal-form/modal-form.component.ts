import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fave } from 'src/app/Model/Fave';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss'],
})
export class ModalFormComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private Ref: MatDialogRef<ModalFormComponent>,
    private http: HttpClient
  ) {}

  fave: any;
  faves: Fave[] = [];
  name!: string;
  text!: string;
  img!: string;

  httpOption = {
    headers: new HttpHeaders({
      'content-Type': 'application/json',
    }),
  };

  ngOnInit(): void {
    this.fave = this.data;
  }

  onSubmit(id: number, fave: Fave) {
    if (!this.name && !this.text && !this.img) {
      alert('Please add something!');
      return;
    }

    const newFave = {
      name: this.name,
      text: this.text,
      img: this.img,
    };

    const url: string = `http://localhost:5000/faves/${id}`;

    return this.http
      .put<Fave>(url, newFave, this.httpOption)
      .subscribe(
        () => (this.faves = this.faves.filter((f) => f.id !== fave.id))
      );
  }

  Closepopup() {
    this.Ref.close('Closing from function');
  }
}
