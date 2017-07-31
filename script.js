//1. print the number 5 to the console

console.log(5);

//2. Print your name to the console

console.log("vipul");

//3. Store your age as a variable called "myAge"

var myAge = 22;

//4. Print to the console how old you will be in 5 years

myAge = myAge + 5;

console.log("My Age after five years will "+myAge);

//5. Store your favorite food as a variable called "myFavoriteFood"

var myFavoriteFood = prompt("What's your favorite food?");

//6. Publish your favorite food to `index.html` using `document.write()`

document.write(myFavoriteFood);

//7. Print the remainder of 14 / 3 to the console

var a = 14, b = 3;

console.log(a % b); 

//8. Print the remainder of 829 / 13 to the console

var a = 829, b = 13;

console.log(a % b);

//9. Create a for loop that counts from 0 to 130 by 3s

for (var i = 0; i<=130; i+=3) {
	console.log(i);
}

//10. Create a for loop that counts from 3 to 17 by 2s

for (var i = 3; i<=17; i+=2) {
	console.log(i);
}

//11. Create a for loop that counts from 100 to 3 by -1

for (var i = 100; i>=3; i-=1) {
	console.log(i);
}

//12. Create a for loop that counts from 1 to 100 by 1s

for (var i = 1; i<=100; i++) {
	console.log(i);
}

//13. Create a for loop that counts from 1 to 100, but instead of printing `i` prints `fizz` if the number is divisible by 5

for (var i = 1; i<=100; i+=5) {
	console.log("fizz");
}

//14. Create a for loop that counts from 1 to 100, but instead of printing `i` prints `buzz` if the number is divisible by 3

for (var i = 1; i<=100; i+=3) {
	console.log("buzz");
}

//15. Create a for loop that counts from 1 to 100, but instead of printing `i` prints `fizzbuzz` if the number is divisible by 15

for (var i = 1; i<=100; i+=15) {
	console.log("fizzbuzz");
}

// 1 to 100
// 3  - fizz
// 5 - buzz
// 15  - fizzbuzz

for (var i = 0; i <= 100; i++) {
	  if (i % 15 === 0) {

		console.log("fizzbuzz");

	} else if (i % 5 === 0) {

		console.log("buzz");

	} else if (i % 3 === 0) {

		console.log("fizz");

	} else {

		console.log(i);
	}
}

//EXTRA CREDIT: Fizzbuzz

/*

The "Fizz-Buzz test" is an interview question designed to help filter out the 99.5% of programming job candidates who can't seem to program their way out of a wet paper bag. The text of the programming assignment is as follows:

"Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”."

Hint: Use your last three loops and if/then/else statements. You can learn about those here https://www.w3schools.com/js/js_if_else.asp

*/

