import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyQuotes } from '../my-quotes';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() isquote!:MyQuotes;
  @Output() disliked = new EventEmitter<boolean>();


  delete(notgood:boolean){
    this.disliked.emit(notgood);
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
