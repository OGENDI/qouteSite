export class MyQuotes {
    showDescription:boolean;
    constructor(public id:number, public quote:string, public username:string,
        public author:string, public upVote:number, public downVote:number, public dateSubmitted:Date){
            this.showDescription == false;

    }
}
