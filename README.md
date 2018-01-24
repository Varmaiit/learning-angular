# learning-angular
This repository includes commands and sample code for angular


# Angular 
To Install angular first need to install node
$>node --version
$>npm install -g @angular/cli



# Typescript
Typescript is a superset of JavaScript maintained by Microsoft
Installation
$>npm install -g typescript

# Typescript Compilation
$>tsc filename.ts
In case any errors with compiler then use target
$>tsc --target es5 classes.ts

# Run the program
$>node filename.js

# Variable declation
$>var a = 5;
Var allows the variable to be accessible throughout the function whereas let doesn't do that
$>let a: number; (assigning type)
$>let a; (if we don't know the type ahead) or let a: any;
Different data types like  number, boolean, string, 
Number array > number []

Also have one more data type called enum, (google for enum to know more)

# Type assertions
(<string>message) to say message is a string or alternate way
(message as string)

# Arrow functions (Similar to lamda expression)
$> let  doLog = (parameters) => console.log();
 

# Inline annotation 
$> let drawPoint = (point: {x: number, y: number }) => {
// code
}

# Alternate way using Interfaces
$>interface Point {
	X: number,
	Y:number
}
