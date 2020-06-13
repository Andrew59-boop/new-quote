export class Quote {
    public showDescription:boolean;
    constructor(public person:string, public name:string ,public description:string, public completeDate:Date ){
        this.showDescription=false
     
    }
    
}