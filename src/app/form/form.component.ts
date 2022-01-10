import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MyQuotes } from '../my-quotes';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

   userquote = new MyQuotes(0,"","","",0,0, new Date())

   @Output()  add_Quote = new EventEmitter<MyQuotes>();

   submit_quote(){
     this.add_Quote.emit(this.userquote);
     this.userquote = new MyQuotes(0,"","","",0,0, new Date())
     
   }

  constructor() { }

  ngOnInit(): void {
  }

}
