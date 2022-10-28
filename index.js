
// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

const ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Q1. Created an array called ages that contains the following values: ", ages);


// 1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 
// ▪ Do not use numbers to reference the last element, find it programmatically, 
// ▪ ages[7] – ages[0] is not allowed!
const subtractFirstLast = function (array) {
    return array[array.length - 1] - array[0];//takes in an array and then returns the first number in the array from the last number in the array 
}
console.log("1a. Subtracted the value of the first element in the array from the value in the last element of the array.", subtractFirstLast(ages));
console.log("\n");//adding a new line


// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(55); //adding new element to the end of the array
console.log("1b. Addded a new age to the end of the array", ages);

console.log("New added last element to the end of the array minus the first element. ", subtractFirstLast(ages));
console.log("\n");//adding a new line


// 1c. Use a loop to iterate through the array and calculate the average age. 
function averageAge(array) {
    let sumAge = 0;
    for (var i = 0; i < array.length; i++) {
        sumAge += array[i];
    }
    return sumAge / array.length;
}
console.log("1c. Used a loop to iterate through the array and calculate the average age. ", averageAge(ages));
console.log("\n");//adding a new line


// *2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log("Q2. Created an array called names that contains the following values: ", names);
console.log("\n");//adding a new line


// // 2a. Use a loop to iterate through the array and calculate the average number of letters per name. 

function averageLetters(array) {
    let sumLetters = 0;
    for (var i = 0; i < array.length; i++) {
        sumLetters += array[i].length;


    }
    return sumLetters / array.length;
}

console.log("2a. Used a loop to iterate through the array and calculate the average number of letters per name. ", averageLetters(names));
console.log("\n");//adding a new line


// 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 

function catArray(arr) {
    let catNames = '';
    for (let i = 0; i < names.length; i++) {
        catNames += ' ' + names[i];
    }
    return catNames
}
console.log("2b. Used a loop to iterate through the array again and concatenate all the names together, separated by spaces. ", catArray(names));
console.log("\n");//adding a new line


// // *3. How do you access the last element of an array?
console.log("Q3. How do you access the last element of an array? ");
let s = ['first', 'second', 'last'];

let lastElement = s[s.length - 1];
console.log("We can access the last element of an array by using the length property to determine it, and since the array count starts at 0, you can pick the last item by referencing the <array>.length - 1 item.", lastElement);
console.log("\n");//adding a new line

// // *4. How do you access the first element of any array?
console.log("Q4. How do you access the first element of an array? ");
let arrayElement = ['first', 'second', 'last'];
let firstElement = arrayElement[0];
console.log("We can access the first element of an array by using an index and the first element is accessed using index 0.", firstElement);
console.log("\n");//adding a new line


// *5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:
// namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array
console.log("Q5. Created a new array called nameLengths,used a loop to iterate over the previously created names array and added the length of each name to the nameLengths array.");
function getArrLen(n) {
    let lenArr = [];
    for (let i = 0; i < n.length; i++) {
        lenArr.push(n[i].length);
    }
    return lenArr
}

let nameLengths = getArrLen(names)
console.log(names)
console.log(nameLengths)
console.log("\n");//adding a new line


// *6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
////
// console.log("Q6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. ");
function arraySum(array) {
    let sumNumElem = 0;
    for (let i = 0; i < array.length; i++) {
        sumNumElem += array[i];
    }
    return sumNumElem
}
let nameSum = arraySum(nameLengths)
console.log("Q6. Used for loop to iterate over the nameLengths array and calculated the sum of all the elements in the array. ", nameSum);
console.log("\n");//adding a new line


// *7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
// console.log("Q7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. ");
function connectWord(word, n) {
    return word.repeat(n);
}
console.log("Q7. Created a function that returns the word concatenated to itself n number of times. ", connectWord("Hey", 4)); //prints HeyHeyHeyHey
console.log("\n");//adding a new line


// *8. Write a function that takes two parameters, firstName and lastName, and returns a full name.
//         ▪ The full name should be the first and the last name separated by a space.
// console.log("Q8. Created a function that takes two parameters, firstName and lastName, and returns a full name." + " The full name should be the first and the last name separated by a space. ");

function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log("Q8. Created a function that returns a full name.", fullName("May", "Saidi"));

console.log("\n");//adding a new line


// *9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
// console.log("Q9. Created a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100. ");
function sumArray(arr) {
    return arraySum(arr) > 100;
}
console.log("Q9. Created a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100. ", sumArray([25, 95]));
console.log("\n");//adding a new line


// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
// console.log("Q10. Write a function that takes an array of numbers and returns the average of all the elements in the array. ");
function sm(x, y) {
    return x + y;
}
function averageElement(arr) {
    return arr.reduce((x, y) => { return x + y }) / arr.length;
}
console.log("Q10. Created function that takes an array of numbers and returns the average of all the elements in the array. ", averageElement([1, 1, 1]));
console.log("\n");//adding a new line


// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.    
console.log("Q11. Created a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.  ");

function twoArrays(arr1, arr2) {
    // console.log(arr1);
    return averageElement(arr1) > averageElement(arr2);
}
console.log(twoArrays([4, 4, 4], [3, 3, 3]));

console.log("\n");//adding a new line



// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
// and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}
let a = willBuyDrink(true, 12)
console.log("Q12. Created a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50." ,a);
console.log("\n");//adding a new line



// 13. Create a function of your own that solves a problem. // ▪ In comments, write what the function does and why you created it.
console.log("13. Created a function of my own that solves a problem.");

//This function that I created takes 3 numbers as parameters and returns the product.
function multiplicationOfThree(a, b, c) {
    return a * b * c;
}
console.log(multiplicationOfThree(1, 6, 7));







