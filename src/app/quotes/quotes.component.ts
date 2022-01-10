import { Component, OnInit, } from '@angular/core';
import { MyQuotes } from '../my-quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  

  quotes:MyQuotes[]=[
    new MyQuotes(1,"The greatest glory in living lies not in never falling, but in rising every time we fall. ","Derick","-Nelson Mandela",0,0,new Date(2022,0,1)),
    new MyQuotes(2,"If life were predictable it would cease to be life, and be without flavor.", "Oyama", "-Eleanor ",0,0,new Date(2020,0,18)),
    new MyQuotes(3,"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success", "Oyoo", "James Cameron",0,0,new Date(2010,10,18)),
  ];

  addNewQuote(newQuote:MyQuotes){
    var quotesLength = this.quotes.length;
    newQuote.id = quotesLength+1;
    newQuote.dateSubmitted =new Date( newQuote.dateSubmitted);
    this.quotes.push(newQuote);
  }

  deletequote(notgood:boolean, index:number){
    if(notgood){
      var todelete = confirm( " This QUote will be deleted");
      if(todelete){
        this.quotes.splice(index,1)
      }
    }
  }

  vote(id:number){
    
    this.quotes[id].upVote +=1
  }
  de_vote(id:number){
    
    this.quotes[id].downVote +=1
  }

  moreinfo(index:number){
    this.quotes[index].showDescription= !this.quotes[index].showDescription;
  }




  constructor() { }

  ngOnInit(): void {
  }

}
