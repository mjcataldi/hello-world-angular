// import { LikeComponent } from './like.component';
// function log(message){
//     console.log(message);
// }

// var message = "Hello World";
// log(message);

// function doSomething() {
//     for (var i = 0; i < 5; i++){
//         console.log(i);
//     }
//     console.log("Finally " + i);
// }

// doSomething();

// let count = 5;
// count = 'a';

// let z: number;
// z = 'string';
// z = 34;


// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3];
// let f: any[] = [1, true, 'a', false];

// // // Don't have to do this
// // const ColorRed = 0;
// // const ColorGreen = 1;
// // const ColorBlue = 2;

// enum Color { Red = 0, Green = 1, Blue = 2, Purple = 3 }
// let backgroundColor = Color.Purple;


// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');

 
// let log = function(message) {
//     console.log(message);
// }

// let doLog = (message) => {
//     console.log(message);
// }

// doLog("Here is my message");
// log("Here is another message");

// let drawPoint = (point: Point) => {
//     console.log(`${point.x} is a point away from ${point.y}`);
// }

// interface Point {
//     x: number,
//     y: number
// }

// class Point {
//     x: number;
//     y: number;

//     constructor( x?: number, y?: number ) {
//         this.x = x;
//         this.y = y;
//     }

//     draw() {
//         console.log(`X is at ${ this.x } and Y is at ${ this.y }.`);
//     }
// }

// import { Point } from './point';
// // import { Component } from '@angular/core';

// let point = new Point(2, 4);
// point.draw();

import { LikeComponent } from './like.component';

let component = new LikeComponent(10, true);
component.onClick();
console.log(`likesCount: ${ component.likesCount  }, isSelected: ${ component.isSelected }.`);