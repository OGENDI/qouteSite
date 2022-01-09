import { Component, OnInit } from '@angular/core';
import { MyQuotes } from '../my-quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:MyQuotes[]=[
    new MyQuotes(1,"Keep it Moving","Derick","Manely",0,0,new Date(2022,0,1)),
    new MyQuotes(2,"Yes I can", "Oyama", "Oloo",0,0,new Date(2020,0,18)),
    new MyQuotes(3,"We deliver the best", "Oyoo", "Musa",0,0,new Date(2010,10,18)),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
