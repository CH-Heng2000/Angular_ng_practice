import { Component } from '@angular/core';

@Component({
    selector: 'app-pwfield',
    templateUrl: './pwfield.component.html'
})
export class pwfieldComponent{
    displayStatus : boolean;
    clickLog : number[] = [];
    bgColor : string;
    fontColor : string;
    count : number;

    constructor(){
        this.displayStatus = false;
        this.bgColor = '';
        this.count = 0;
        this.fontColor = '';
    }

    changeDisplay(){
        this.count += 1;
        if(this.displayStatus === false){
            this.displayStatus = true;
        }else{
            this.displayStatus = false;
        }

        if(this.count > 4){
            this.bgColor = 'blue';
            this.fontColor = 'white';
        }

        this.clickLog.push(Date.now())
    }

    isDisplay(): boolean{
        return this.displayStatus
    }

}