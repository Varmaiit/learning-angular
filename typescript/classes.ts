// In Object oriented programming languages a Class groups variables (properties) and functions (methods) 
// that are highly related

// class Point {
//     x: number;
//     y: number;

//     //constructor is method that is called when you create a instance of a class
//     // we can also make this parameters optional by adding ?
//     // Eg: constructor(x?: number, y?: number) --- Also Note once you make any parameter optional then you
//     // have to make all other parameters rightside to that parameter also optional
//     constructor(x:number, y: number) {
//         this.x = x;
//         this.y = y;
//     }

//     // when a function is part of a class then it is called methods
//     draw() {
//         // Code 
//         console.log('X: ' + this.x + ', Y: ' + this.y);
//     }

//     getX() {
//         return this.x;
//     }

//     setX(value) {
//         if (value < 0)
//             throw new Error('value cannot be less than 0.');

//         this.x = value;
//     }

//     // we have properties feature for object oriented programming languages where we can get and set the variables
//     // Eg. follow the  following example
//     set eX(value) {
//         if (value < 0)
//             throw new Error('value cannot be less than 0.');

//         this.x = value;
//     }
// }

import { Point } from './point';

// Objects 

// object is instance of a class
// here *point* is an object

let point= new Point(1, 2);
point.setX(18);
point.eX = 19;
point.draw();

//In order restrict access to the variables in a class after it got initialized. use private to do so.
// In Typescript we have 3 Access Modifiers they are private, public, restricted

// we can also add access modifiers in constructors
// constructor(private x?: number, public y?: number)
