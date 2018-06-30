// code here tests the differences between let and var 

"use strict"

var a = 'test1';
let b = 'test2';

function testVar() {
  var a = 30;
  if (true) {
    var a = 50;
    console.log(a); // 50
  }
  console.log(a); // 50, because the if statement changed the value of a
}

testVar();

function testLet() {
  let a = 30;
  if (true) {
    let a = 50;
    console.log(a); // 50
  }
  console.log(a); // 30, because the if statement here can't change the value of the global scope a
}

testLet();


for (var i=0; i<10; i++) {
  console.log(i); // 0-9
}
console.log(i); // 10

for (let k=0; k<10; k++) {
  console.log(k); // 0-9
}
console.log(k); // error, k is undefined, because k only exists in the for loop scope




// examples of constant variables

const colors = []; // define colors as an array

colors.push('red');
colors.push('blue'); // yes we can add items into a constant array 

colors = 'Green'; // try to reassign colors as a string

console.log(colors); // error: Assignment to constant variable