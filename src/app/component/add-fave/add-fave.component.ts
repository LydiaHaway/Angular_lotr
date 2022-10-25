import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Fave } from 'src/app/Model/Fave';

@Component({
  selector: 'app-add-fave',
  templateUrl: './add-fave.component.html',
  styleUrls: ['./add-fave.component.scss'],
})
export class AddFaveComponent implements OnInit {
  @Output() onAddFave: EventEmitter<Fave> = new EventEmitter();
  name!: string;
  text!: string;
  img!: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.name && !this.text && !this.img) {
      alert('Please add something!');
      return;
    }

    const newFave = {
      name: this.name,
      text: this.text,
      img: this.img,
    };

    this.onAddFave.emit(newFave);

    this.name = '';
    this.text = '';
    this.img = '';
  }
}
