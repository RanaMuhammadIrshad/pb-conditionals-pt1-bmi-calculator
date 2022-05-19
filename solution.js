"use strict";

/* 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range. */

let int1 = 55;
let int2 = 90;

if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99)) {
  console.log(`true`);
} else {
  console.log(`false`);
}

/* 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range. */

let int3 = 25;
let int4 = 35;
let int5 = 55;

if (
  (int3 >= 50 && int3 <= 99) ||
  (int4 >= 50 && int4 <= 99) ||
  (int5 >= 50 && int5 <= 99)
) {
  console.log(`true`);
} else {
  console.log(`false`);
}

/* 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works. */

let a = 100;
let b = 200;
let c = 300;

if (c > b && a > c) {
  console.log(`${a} is the largest`);
} else if (b > a && b > c) {
  console.log(`${b} is the largest`);
} else {
  console.log(`${c} is the largest`);
}


/* console.log(Math.max(int1, int2, int3));

int1 = 99; int2 = 1; int3 = 49; // reassignment of values

console.log(Math.max(int1, int2, int3)); */


/* 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string. */


const strPrefix = "Py";
const str = "thon";

if (str.substring(0,2) == "Py") { 
    console.log(str); 
} else {
    console.log(`${strPrefix}${str}`);
}


/* function string_check(str1) {
  if (str1 === null || str1 === undefined || str1.substring(0, 2) === "Py") {
    return str1;
  }
  return "Py" + str1;
}

console.log(string_check("Python"));
console.log(string_check("thon")); */

/* 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.  */

let someInt1 = 50;
let someInt2 = 30;

let sum = someInt1 + someInt2;
if (sum >= 50 && sum <= 80) {
  console.log(`65`);
} else {
  console.log(`80`);
}

/* 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true. */

let someInt3 = 12;
let someInt4 = 20;

const sum1 = someInt3 + someInt4;
const diff1 = someInt3 - someInt4;
const diff2 = someInt4 - someInt3;  // Math.abs(someInt3 - someInt4)
if (sum1 === 8 || diff1 === 8 || diff2 === 8) {
  console.log(`true`);
} else {
  console.log(`false`);
}

/* 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.  */

let someInt5 = 10;
let someInt6 = 10;
let sum2 = someInt5 + someInt6;

if (someInt5 === 15 || someInt6 === 15 || sum2 === 15) {
  console.log(`true`);
} else {
  console.log(`false`);
}

/* 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true. */

let someInt7 = 99;
let someInt8 = 59;

if (
  someInt7 % 7 === 0 ||
  someInt7 % 11 === 0 ||
  someInt8 % 7 === 0 ||
  someInt8 % 11 === 0
) {
  console.log(`true`);
} else {
  console.log(`false`);
}

/* 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.
 */

let someInt9 = 5;
let someInt10 = 5;
let sum3 = someInt9 + someInt10;

if (someInt9 === someInt10) {
  console.log(`Triple their sum: ${sum3 * 3}`);
} else {
  console.log(`Not triple their sum `);
}

/* 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19. */

let specifiedNum = 25;
let someNum19 = 19;
let diff3 = specifiedNum - someNum19;

if (specifiedNum > someNum19) {
  console.log(`Double the difference : ${diff3 * 2} `);
} else {
  console.log(`Specified number is not greater than 19`);
}

/* 11. BONUS CHALLENGE:  Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult".  */

let firstName = "John";
let age = 35;
if (age < 13) {
  console.log(`${firstName} is child`);
} else if (age >= 13 && age < 20) {
  console.log(`${firstName} is teenager`);
} else if (age >= 20 && age < 30) {
  console.log(`${firstName} is a young adult`);
} else {
  console.log(`${firstName} is an adult`);
}

/* 12. BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc.  */

//////////////////////////////////////////////

//Q1 Store Mark's and John's mass and height in variables.
let markMass = 80;
let markHeight = 1.7;
let johnMass = 90;
let johnHeight = 1.9;

//Q2 Calculate both their BMIs and store their BMIs in variables.

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / (johnHeight * johnHeight);

//Q3 Create a boolean variable containing information about whether Mark has a higher BMI than John.

let markMoreBeefCake = markBMI > johnBMI;
console.log(markMoreBeefCake);

//Q4 Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").
console.log(
  `Q4. Is Mark's BMI(${markBMI.toFixed(
    2
  )}) higher than John's(${johnBMI.toFixed(
    2
  )})? Why yes, it's ${markMoreBeefCake}, it is.`
);

//Q5 Create an *if* statement which prints the name and BMI of the person with the highest BMI.

if (markBMI > johnBMI) {
  console.log(
    `Q5. Mark BMI (${markBMI.toFixed(
      2
    )}) is higher than John's BMI (${johnBMI.toFixed(2)})`
  );
} else {
  console.log(
    `Q5. John's BMI (${johnBMI.toFixed(
      2
    )}) is higher than Mark BMI (${markBMI.toFixed(2)})  `
  );
}
