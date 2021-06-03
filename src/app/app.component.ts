import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {

  public gridAreas = "";

  public state = new State();
  public previewState = new State();

  public showGrid(): void {
    this.previewState.topLeftVisibility = this.state.topLeftVisibility;
    this.previewState.topRightVisibility = this.state.topRightVisibility;
    this.previewState.topMiddleVisibility = this.state.topMiddleVisibility;
    this.previewState.middleRightVisibility = this.state.middleRightVisibility;
    this.previewState.bottomLeftVisibility = this.state.bottomLeftVisibility;
    this.previewState.bottomRightVisibility = this.state.bottomRightVisibility;

    this.gridAreas = this.getGridAreas();
  }

  public getGridAreas(): string {
    let topLeftArea = "topLeft ";
    let topMiddleArea = "topMiddle ";
    let topRightArea = "topRight ";
    let middleRightArea = "middleRight ";
    let bottomLeftArea = "bottomLeft ";
    let bottomRightArea = "bottomRight ";

    let rowOne = "";
    let rowTwo = "";
    let rowThree = "";

    //row one
    //show one part
    if (
      this.state.topLeftVisibility &&
      !this.state.topMiddleVisibility &&
      !this.state.topRightVisibility
    ) {
      rowOne += topLeftArea + topLeftArea + topLeftArea + topLeftArea;
    } else if (
      !this.state.topLeftVisibility &&
      this.state.topMiddleVisibility &&
      !this.state.topRightVisibility
    ) {
      rowOne += topMiddleArea + topMiddleArea + topMiddleArea + topMiddleArea;
    } else if (
      !this.state.topLeftVisibility &&
      !this.state.topMiddleVisibility &&
      this.state.topRightVisibility
    ) {
      rowOne += topRightArea + topRightArea + topRightArea + topRightArea;
    }
    //show two parts
    else if (
      this.state.topLeftVisibility &&
      this.state.topMiddleVisibility &&
      !this.state.topRightVisibility
    ) {
      rowOne += topLeftArea + topMiddleArea + topMiddleArea + topMiddleArea;
    } else if (
      this.state.topLeftVisibility &&
      !this.state.topMiddleVisibility &&
      this.state.topRightVisibility
    ) {
      rowOne += topLeftArea + topLeftArea + topRightArea + topRightArea;
    } else if (
      !this.state.topLeftVisibility &&
      this.state.topMiddleVisibility &&
      this.state.topRightVisibility
    ) {
      rowOne += topMiddleArea + topMiddleArea + topMiddleArea + topRightArea;
    }
    //show three parts
    else if (
      this.state.topLeftVisibility &&
      this.state.topMiddleVisibility &&
      this.state.topRightVisibility
    ) {
      rowOne += topLeftArea + topMiddleArea + topMiddleArea + topRightArea;
    }

    //row two
    if (this.state.middleRightVisibility && !this.state.bottomLeftVisibility) {
      //show only middleRight
      rowTwo =
        middleRightArea + middleRightArea + middleRightArea + middleRightArea;
    } else if (
      this.state.middleRightVisibility &&
      this.state.bottomLeftVisibility
    ) {
      rowTwo =
        bottomLeftArea + bottomLeftArea + middleRightArea + middleRightArea;
    }
    //do not show middleRight
    else if (
      !this.state.middleRightVisibility &&
      this.state.bottomLeftVisibility &&
      this.state.bottomRightVisibility
    ) {
      rowTwo =
        bottomLeftArea + bottomLeftArea + bottomRightArea + bottomRightArea;
    } else if (
      !this.state.middleRightVisibility &&
      this.state.bottomLeftVisibility &&
      !this.state.bottomRightVisibility
    ) {
      rowTwo =
        bottomLeftArea + bottomLeftArea + bottomLeftArea + bottomLeftArea;
    } else if (
      !this.state.middleRightVisibility &&
      !this.state.bottomLeftVisibility &&
      this.state.bottomRightVisibility
    ) {
      rowTwo =
        bottomRightArea + bottomRightArea + bottomRightArea + bottomRightArea;
    }

    //row three
    if (this.state.bottomLeftVisibility && this.state.bottomRightVisibility) {
      rowThree =
        bottomLeftArea + bottomLeftArea + bottomRightArea + bottomRightArea;
    } else if (
      this.state.bottomLeftVisibility &&
      !this.state.bottomRightVisibility
    ) {
      rowThree =
        bottomLeftArea + bottomLeftArea + bottomLeftArea + bottomLeftArea;
    } else if (
      !this.state.bottomLeftVisibility &&
      this.state.bottomRightVisibility
    ) {
      rowThree =
        bottomRightArea + bottomRightArea + bottomRightArea + bottomRightArea;
    }

    if (rowOne === "") {
      rowOne = rowTwo;
      rowTwo = rowThree;
    }
    if (rowTwo === "") {
      rowTwo = rowOne;
      rowThree = rowOne;
    }
    if (rowThree === "") {
      rowThree = rowTwo;
    }

    let gridArea = rowOne + " | " + rowTwo + " | " + rowThree;

    return gridArea;
  }
}

export class State {
  public topLeftVisibility = true;
  public topMiddleVisibility = true;
  public topRightVisibility = true;
  public middleRightVisibility = true;
  public bottomLeftVisibility = true;
  public bottomRightVisibility = true;
}
