import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public topLeftVisibility = true;
  public topMiddleVisibility = true;
  public topRightVisibility = true;
  public middleRightVisibility = true;
  public bottomLeftVisibility = true;
  public bottomRightVisibility = true;

  public gridAreas = "";

  public showGrid():void{
    this.gridAreas = this.getGridAreas();
  }

  public getGridAreas(): string {
    let topLeftArea = 'topLeft ';
    let topMiddleArea = 'topMiddle ';
    let topRightArea = 'topRight ';
    let middleRightArea = 'middleRight ';
    let bottomLeftArea = 'bottomLeft ';
    let bottomRightArea = 'bottomRight ';


    let rowOne = '';
    let rowTwo = '';
    let rowThree = '';

    //row one
    //show one part
    if (this.topLeftVisibility && !this.topMiddleVisibility && !this.topRightVisibility) {
        rowOne += topLeftArea + topLeftArea + topLeftArea + topLeftArea;
    }
    else if(!this.topLeftVisibility && this.topMiddleVisibility && !this.topRightVisibility){
        rowOne += topMiddleArea + topMiddleArea + topMiddleArea + topMiddleArea;
    }
    else if (!this.topLeftVisibility && !this.topMiddleVisibility && this.topRightVisibility) {
        rowOne += topRightArea + topRightArea + topRightArea + topRightArea;
    }
    //show two parts
    else if(this.topLeftVisibility && this.topMiddleVisibility && !this.topRightVisibility){
        rowOne += topLeftArea + topMiddleArea + topMiddleArea + topMiddleArea;
    } 
    else if(this.topLeftVisibility && !this.topMiddleVisibility && this.topRightVisibility){
        rowOne += topLeftArea + topLeftArea + topRightArea + topRightArea;
    } 
    else if(!this.topLeftVisibility && this.topMiddleVisibility && this.topRightVisibility){
        rowOne += topMiddleArea + topMiddleArea + topMiddleArea + topRightArea;
    }
    //show three parts 
    else if(this.topLeftVisibility && this.topMiddleVisibility && this.topRightVisibility){
        rowOne += topLeftArea + topMiddleArea + topMiddleArea + topRightArea;
    }


    //row two
    if(this.middleRightVisibility && !this.bottomLeftVisibility){ //show only middleRight
        rowTwo = middleRightArea + middleRightArea + middleRightArea + middleRightArea;
    }
    else if(this.middleRightVisibility && this.bottomLeftVisibility){
        rowTwo = bottomLeftArea + bottomLeftArea + middleRightArea + middleRightArea;
    }
    //do not show middleRight
    else if(!this.middleRightVisibility && this.bottomLeftVisibility && this.bottomRightVisibility){
        rowTwo = bottomLeftArea + bottomLeftArea + bottomRightArea + bottomRightArea;
    }
    else if(!this.middleRightVisibility && this.bottomLeftVisibility && !this.bottomRightVisibility){
        rowTwo = bottomLeftArea + bottomLeftArea + bottomLeftArea + bottomLeftArea;
    }
    else if(!this.middleRightVisibility && !this.bottomLeftVisibility && this.bottomRightVisibility){
        rowTwo = bottomRightArea + bottomRightArea + bottomRightArea + bottomRightArea;
    }


    //row three
    if(this.bottomLeftVisibility && this.bottomRightVisibility){
        rowThree = bottomLeftArea + bottomLeftArea + bottomRightArea + bottomRightArea;
    }
    else if(this.bottomLeftVisibility && !this.bottomRightVisibility){
        rowThree = bottomLeftArea + bottomLeftArea + bottomLeftArea + bottomLeftArea;
    }
    else if(!this.bottomLeftVisibility && this.bottomRightVisibility){
        rowThree = bottomRightArea + bottomRightArea + bottomRightArea + bottomRightArea;
    }


    //row one is empty copy row two
    if(rowOne === ""){
        rowOne = rowTwo;
        rowTwo = rowThree;
    } 
    else if(rowTwo === ""){
        rowTwo = rowOne;
        rowThree = rowOne;
    }

    let gridArea = rowOne + ' | ' + rowTwo + ' | ' + rowThree;

    return gridArea;
}
}
