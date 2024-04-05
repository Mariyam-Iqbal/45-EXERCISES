//Assignment-2 personal messege
//store a person's name in a variable,
//and then print a messege to that person.
//your messege should be simple,
// such as "hello eric, would you like to learn some python today"?
//import { log } from "console";
let personName = "Mariyam";
console.log(personName, "would you like to learn some python today?");
//Assignment-3 Name cases
// store a person's name in a variable,
//and then print that person's in lowercase,
// uppercase, and titlecase.
//lowercase
let personName1 = "MARIYAM";
console.log(personName1.toLowerCase());
//uppercase
function toUpperCase(str) {
    return `${str}`.toUpperCase();
}
let inputString = "mariyam";
let UpperCaseString = toUpperCase(inputString);
console.log(UpperCaseString);
//title case
let words = personName.split(" ");
let titleCaseName = "";
for (let i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titleCaseName);
//Assignment 04 favourite Quote
//Find a quote from a famous person you admire. Print the quote and the name of its author. 
//Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let famousQuote = "A person who never made a mistake";
let author = "Albert Einstein";
console.log(`${author} once said, "${famousQuote}"`);
//Assignment 05 favourite Quote 2
//Repeat Exercise 4, but this time store the famous person’s name in a variable called 
//famous_person. Then compose your message and store it in a new variable called message. Print your 
//message
let person_Name = "Mariyam";
let messege = "never design your character like a garden where everyone can walk easily";
console.log(`${person_Name} , "${messege}"`);
//Assignment 06 stripping names
//Store a person’s name, and include some whitespace characters at the beginning and end of 
//the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name 
//once, so the whitespace around the name is displayed. Then print the name after striping the white  
//spaces
let $personName = "\t \n Mariyam Iqbal \t \n";
console.log("princess of mother:", $personName);
let strippedName = $personName.trim();
console.log("princes of mother:", strippedName);
//Assignment 07 number eight
//Write addition, subtraction, multiplication, and division operations that each result in the 
//number 8. Be sure to enclose your operations in print statements to see the results. 
let Addition = 4 + 4;
console.log("Addition Result", Addition);
let Subtraction = 16 - 8;
console.log("Subtraction Result", Subtraction);
let Multiplication = 2 * 4;
console.log("Multiplication Result", Multiplication);
let Division = 32 / 4;
console.log("Division Result", Division);
//Assignment 08 number eight 02
//You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
console.log(7 + 1);
console.log(16 - 8);
console.log(4 * 2);
console.log(48 / 6);
//Assignment 09 favourite number
//Store your favorite number in a variable. Then, using that variable, create a message that 
//reveals your favorite number. Print that message.
let favouriteNum = 5;
let messegeResult = `My Lucky Number is:${favouriteNum}`;
console.log(messegeResult);
//Assignment 10 Adding coments
//Choose two of the programs you’ve written, and add at least one comment to each. If you don’t 
//have anything specific to write because your programs are too simple at this point, just add your name 
//and the current date at the top of each program file. Then write one sentence describing what the 
//program does.
//This program add one number and one string the result
//define string
let myName = "Mariyam!!!";
//define number
let myAge = 23;
//add string and number
let mySelf = (`${myName} my age is: ${myAge}`);
//result print
console.log(mySelf);
//Assignment 11  names
//Store the names of a few of your friends in an array called names. Print each person’s name by 
//accessing each element in the list, one at a time.
//define an array of names
let names = ["Shabana", "Dua", "Zeenat", "Fizza", "Mariyam"];
//loop //for each 
//loop
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//for each
names.forEach(name => {
    console.log(name);
});
//Assignment 12 greetings
//Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
//print a message to them. The text of each message should be the same, but each message should be 
//personalized with the person’s name.
let friendsName = ["Shabana", "Dua", "Zeenat", "Fizza", "Mariyam"];
//for each
friendsName.forEach(names => {
    console.log(`Hello ${friendsName} How are you`);
});
//Assignment 13 your own array
//Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list 
//that stores several examples. Use your list to print a series of statements about these items, such as 
//“I would like to own a Honda motorcycle.”
let transport = ["Motorbike", "Car", "Cycle", "Train"];
//for each
transport.forEach(transport => {
    console.log(`I wish i have own ${transport}`);
});
//Assignment 14 guest list
//If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that 
//includes at least three people you’d like to invite to dinner. Then use your list to print a message to 
//each person, inviting them to dinner.
let invitation = ["Fiza", "Kainat", "Sana"];
invitation.forEach(invitation => {
    console.log(`${invitation} I Would like to invite my dinner party`);
});
//Assignment 15 changing guest list
//You just heard that one of your guests can’t make the dinner, so you need to send out a new 
//set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating 
//the name of the guest who can’t make it.•
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person 
//you are inviting.
//• Print a second set of invitation messages, one for each person who is still
//in your list.
let guestList = ["Sana", "Kainat", "Fiza"];
//print the name who cant make dinner
let unable = guestList.splice(2, 2)[0];
console.log(`${unable} not invited for dinner`);
//push
guestList.push("Mariyam Iqbal");
console.log(guestList);
//print the messege
guestList.forEach(guestList => {
    console.log(`Dear ${guestList} you are invited for dinner`);
});
//Assignment 16 more guests
//You just found a bigger dinner table, so now more space is available. Think of three more guests 
//to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing 
//people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array.
//• Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.
let bigDinner = ["Sana", "Kainat", "Mariyam"];
console.log("Great news!! we found a bigger table");
//adding guest begining of array
bigDinner.unshift("Hira");
//adding guest middle of array
bigDinner.splice(Math.floor(bigDinner.length / 2), 0, "Ayesha");
//adding guest in end
bigDinner.push("kalsoom");
bigDinner.forEach(bigDinner => {
    console.log(`Dear ${bigDinner} you are invited for the Dinner`);
});
//Assignment 17 shrinking guest list
//You just found out that your new dinner table won’t arrive in time for the dinner, and you have 
//space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
//invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you 
//pop a name from your list, print a message to that person letting them know you’re sorry you can’t 
//invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
//actually have an empty list at the end of your program.
let guestList1 = ["Mariyam", "Kainat", "Sana"];
//print messege
console.log("Unfortunately,my dinner table wont arrive so we can invite only two guests");
guestList1.unshift("Rabia", "Sadia");
//print messege updated list
console.log("Updated list of guest", guestList1);
//remove guest from the list
while (guestList1.length > 2) {
    let removeGuest = guestList.pop();
    if (removeGuest !== undefined) {
        console.log(`Sorry, ${removeGuest}, we cant invite you`);
    }
}
//print the messege still two peoples
guestList1.forEach(guestList1 => {
    console.log(`Dear ${guestList1}, you both are invited for the dinner`);
});
//remove two names from list
guestList1.splice(0, guestList1.length);
//print updated list
console.log("Updated list of guest", guestList1);
//Assignment 18 seeing the world
//Think of at least five places in the world you’d like to visit.
//• Store the locations in an array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
//changed
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its 
//order has changed.
let favouritePlaces = ["Islamabad", "Lahore", "Kashmeer", "Quetta", "Mansehra", "Saudi Arab"];
console.log(favouritePlaces);
//copy of an array
let copyArray = favouritePlaces.slice();
let sortedArray = copyArray.sort();
console.log(sortedArray);
//printing orignal array
console.log(favouritePlaces);
//reverting orignal array
//first we make a copy of original array
let copyArray2 = favouritePlaces.slice();
let revertedArray = copyArray2.reverse();
console.log(revertedArray);
console.log(favouritePlaces);
//reverse the order of orignal array
let reverseArray2 = favouritePlaces.reverse();
console.log(reverseArray2);
let againReverse = reverseArray2.reverse();
//printing orignal array
console.log(againReverse);
//sorting array
let sortedArray2 = favouritePlaces.sort();
console.log(sortedArray2);
let reversortedArray = sortedArray.reverse();
console.log(reversortedArray);
//Assignment 19 guests dinner
//Working with one of the programs from Exercises 14 through 18, print a message indicating 
//the number of people you are inviting to dinner.
let dinnerInvitaton = ["Mariyam", "Asiya", "Shabana", "Zeenat", "Saba"];
console.log(`I am inviting ${dinnerInvitaton} number of friends to my dinner which are following:\n`);
for (let i = 0; i < dinnerInvitaton.length; i++) {
    console.log(`${i + 1}. ${dinnerInvitaton[i]}  `);
}
//Assignment 20
//Think of something you could store in an array. For example, you could make a list of mountains, 
//rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list 
//containing these items.
let languages = ["Sindhi", "Urdu", "English", "Balochi", "Arabic"];
//print list of countries
languages.forEach(languages => {
    console.log(languages);
});
//Assignment 21
//They think of something you could store in a TypeScript Object. Write a program that creates 
//Objects containing these items.
//key + value
let details = {
    Name: "Mariyam",
    Age: 24,
    Gender: "Female",
    Rollnum: 4567,
};
console.log(details);
//Assignment 22 Intentional error
//If you haven’t received an array index error in one of your programs yet, try to make one happen. 
//Change an index in one of your programs to produce an index error. Make sure you correct the error 
//before closing the program.
let myArray = [23, "Mariyam", 2024, "Car"];
console.log(myArray[1]);
//Assignment 23 conditional tests
//Write a series of conditional tests. Print a statement describing each test and your prediction 
//for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let myCar = "GLI";
console.log(myCar == "GLI");
//single (=) is used for assigning and(==) is used for camparision 
// 10 statment true and false
//01
let myLuckynum = 45;
console.log(myLuckynum == 54);
//02
let favPlace = "switzerland";
console.log(favPlace == "switzerland");
//03
let trueFriend = "Shabana";
console.log(trueFriend == "Shabana");
//04
let myMother = "Friend";
console.log(myMother == "Friend");
//05
let sister = "Komal";
console.log(sister == "sana");
//06 
let myLuckynum2 = 5;
console.log(myLuckynum2 === 7);
//07
let sweetBrother = "Zainulabidin";
console.log(sweetBrother == "Zainulabidin");
//08
let education = "Graduate";
console.log(education == "Matric");
//09
let myLanguage = "Sindhi";
console.log(myLanguage == "Urdu");
//10
let myNickName = "Kanwal";
console.log(myNickName == "Kanwal");
//Assignment 24 more conditional tests
//You don’t have to limit the number of tests you create to 10. If you want to try more 
//comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
//to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in an array
//• Test whether an item is not in an array
//equality or inequality
let myNickName1 = "Kanwal";
console.log(myNickName1 == "Kanwal");
console.log(myNickName1 !== "Kanwal");
//numerics
let num = 10;
console.log(num == 10);
console.log(num !== 10);
console.log(num > 5);
console.log(num < 5);
console.log(num <= 5);
console.log(num <= 5);
//and & =====or |
let num2 = 10;
let num3 = 5;
console.log(num2 > 9 && num3 > 5);
console.log(num2 > 9 || num3 < 5);
let ARRAY = [4, 5, "Mariyam"];
let string = "Kanwal";
console.log(Array.isArray(ARRAY));
console.log(Array.isArray(string));
//Assignment 25 alien colors
//Imagine an alien was just shot down in a game. Create a variable called alien_color and assign 
//it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print
//a message that the player just earned 5 points.
//• Write one version of this program that passes the if test and another that
//fails. (The version that fails will have no output.)
//conditional statement
//if statement
let alignColor = "Blue";
if (alignColor == "Blue") {
    console.log("player just earned 5 points");
}
else {
}
//Assignment 26 aligen colors 2
//Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the 
//alien
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.
let colour = "Blue";
if (colour == "Blue") {
    //console.log("The player just earned 10 points");
}
else {
    console.log("The player just earned 15 points");
}
if (colour == "Green") {
    console.log("The player just earned 10 points");
}
else {
    console.log("The player just earned 15 points");
}
//Assignment 27 aligen colors 3
//Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color 
//alien.
let colour1 = "Red";
if (colour1 == "Red") {
    console.log("The player earned 5 points");
}
else if (colour1 == "Yellow") {
    console.log("The player earned 10 points");
}
else if (colour1 == "Green") {
    console.log("The player earned 15 points");
}
else {
    console.log("The player earned 0 points");
}
//Assignment 28 stages of life
//Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, 
//and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder.
let personAge = 20;
if (personAge < 2) {
    console.log("The person is a baby");
}
else if (personAge >= 2 && personAge < 4) {
    console.log("The person is toddler");
}
else if (personAge >= 4 && personAge < 13) {
    console.log("The person is a kid");
}
else if (personAge >= 13 && personAge < 20) {
    console.log("The person is teenager");
}
else if (personAge >= 20 && personAge < 65) {
    console.log("The person is an adult");
}
else if (personAge >= 65) {
    console.log("The person is an old");
}
//Assignment 29 favourite fruit
//Make an array of your favorite fruits, and then write a series of independent if statements that 
//check for certain fruits in your array.
//• Make an array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit 
//is in your array, the if block should print a statement,
//such as You really like bananas!
let favorite_fruits = ["Mango", "Chikku", "Grapes"];
let fruitAvailable = "Mango";
if (favorite_fruits.includes(fruitAvailable)) {
    console.log(`"I would like to eat" ${fruitAvailable}`);
}
else {
    console.log("Fruits are not awailable");
}
//Assignment 30 hellow admin
//Make an array of five or more usernames, including the name 'admin'. Imagine you are writing 
//code that will print a greeting to each user after they log in to a website. Loop through the array, and 
//print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a 
//status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let userNames = ["Admin", "Mariyam", "Sana", "Kainat", "Shabana", "Zeenat"];
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === "Admin") {
        console.log(`\n Hellow ${userNames[i]} would you like to see a status report?\n`);
    }
    else {
        console.log(`Hellow ${userNames[i]} Thank you for logging in again!!`);
    }
}
//Assignment 31 no users
//Add an if test to Exercise 30 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
let userNames2 = ["Admin", "Mariyam", "Sana", "Kainat", "Shabana", "Zeenat"];
// to remove  all members
userNames2 = [];
console.log(userNames2);
if (userNames2.length > 0) {
    for (let i = 0; i < userNames2.length; i++) {
        if (userNames2[i] === "Admin") {
            console.log(`\n Hellow ${userNames2[i]} would you like to see a status report?\n`);
        }
        else {
            console.log(`Hellow ${userNames2[i]} Thank you for logging in again!!`);
        }
    }
}
{
    console.log("We need to find some users!!");
}
//Assignment 32 checking usernames
//Do the following to create a program that simulates how websites ensure that everyone has a 
//unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames 
//are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print 
//a message that the person will need to enter a new username. If a username has not been used, print 
//a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be 
//accepted.
let current_users = ["Mariyam", "Shabana", "Zeenat", "Sana", "kainat", "Dua"];
let new_users = ["Sara", "Fiza", "mariyam", "Lubaba", "Kainat"];
// foreach method
new_users.forEach(new_users => {
    let new_userLower = new_users.toLowerCase();
    //use some method
    let userNameTaken = current_users.some(current_users => current_users.toLowerCase() === new_userLower); //true or false
    //conditions
    if (userNameTaken) {
        console.log(`${new_users} needs to choose a username because its already taken`);
    }
    else {
        console.log(`${new_users} is the new member added`);
        current_users.push(new_users); //add new user to current users array
    }
});
console.log(current_users);
//Assignment 33 ordinal  numbers
//Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers 
//end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output 
//should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//for loop
for (let i = 0; i < numbers5.length; i++) {
    //conditional statement
    if (numbers5[i] == 1) {
        console.log(`${numbers5[i]}st`);
    }
    else if (numbers5[i] == 2) {
        console.log(`${numbers5[i]}nd`);
    }
    else if (numbers5[i] == 3) {
        console.log(`${numbers5[i]}rd`);
    }
    else if (numbers5[i] >= 4 && numbers5[i] <= 9) {
        console.log(`${numbers5[i]}th`);
    }
}
//Assigment 34 pizzas
//Think of at least three kinds of your favorite pizza. Store these pizza names in an array, and 
//then use a for loop to print the name of each pizza.
//• Modify your loop to print a sentence using the name of the pizza instead of printing just the name of 
//the pizza. For each pizza you should have one line of output containing a simple statement like I like 
//pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The 
//output should consist of three or more lines about the kinds of pizza, you like and then an additional 
//sentence, such as I really love pizza!
let myPizza = ["Arabic pizza", "Fajita pizza", "Tikka pizza"];
//print only names of pizza with loop
for (let i = 0; i < myPizza.length; i++) {
    console.log(myPizza[i]);
}
//printing names and sentences/messege
for (let i = 0; i < myPizza.length; i++) {
    console.log(`I like to eat ${myPizza[i]}`);
}
console.log("\nI really like to eat pizza comes in a variety of flavors and toopings, allowing individuals to customize it to their liking");
//Assignment 35 animals
//Think of at least three different animals that have a common characteristic. Store the names 
//of these animals in a list, and then use a for loop to print out the name of each animal.
//• Modify your program to print a statement about each animal, such as A dog would make a great pet.
//• Add a line at the end of your program stating what these animals have in common. You could print 
//a sentence such as Any of these animals would make a great pet!
let petAnimal = ["Cow", "Buffalo", "Goat", "Sheep"];
//loop
for (let p of petAnimal) {
    console.log(p);
}
for (let a of petAnimal) {
    console.log(`${a} is a domestic animal`);
}
console.log(`All these animals ${petAnimal[0]}, ${petAnimal[1]}, ${petAnimal[2]} and ${petAnimal[3]} give milk.`);
//Assignment 36 t-shirt
//Write a function called make_shirt() that accepts a size and the text of a message that should 
//be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the 
//message printed on it. Call the function.
function make_shirt(size, label) {
    return size + label;
    return `My shirt size is ${size} and my label is ${label}`;
}
let shirt = make_shirt(30, " Good Night");
//how to print on console
console.log(shirt);
//Assignment 37 large shirts
//Modify the make_shirt() function so that shirts are large by default, with a message that reads 
//I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any 
//size with a different message.
function make_shirt2(size, label) {
    return size + label;
}
let shirt1 = make_shirt2("Large", " I love typScript");
console.log(shirt1);
//shirt size large as default
function make_shirt3(label, size = "Large") {
    return size + label;
}
let shirt2 = make_shirt3("I love typScript");
console.log(shirt2);
//making medium as default
function make_shirt4(label, size = "Medium") {
    return size + label;
}
let shirt3 = make_shirt4(" I love typScript");
console.log(shirt3);
//for any size
function make_shirt5(label, size) {
    return size + label;
}
let shirt4 = make_shirt5(" Any Size", " I love typScript");
console.log(shirt4);
//Assignment 38 cities
//Write a function called describe_city() that accepts the name of a city and its country. The 
//function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the 
//country a default value. Call your function for three different cities, at least one of which is not in the
//default country.
function describe_city(cityName, country = "Pakistan") {
    return ` ${cityName} is in  ${country}`;
}
;
//three cities
let city0 = describe_city("Lahore");
let city1 = describe_city("Islamabad");
let city2 = describe_city("Jacobabad");
let city3 = describe_city("London", "Uk");
let cities = (city0 + city1 + city2 + city3);
console.log(cities);
//Assignment 39 city names
//Write a function called city_country() that takes in the name of a city and its country. The 
//function should return a string formatted like this: "Lahore, Pakistan" Call your function with at least 
//three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return `"${city}, ${country}"`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("America", "USA"));
console.log(city_country("Dubai", "UAE"));
console.log(city_country("Makkah", "Saudi Arab"));
// Assignment 40 album
//Write a function called make_album() that builds an Object describing a music album. The 
//function should take in an artist name and an album title, and it should return a Object containing 
//these two pieces of information. Use the function to make three dictionaries representing different
//albums. Print each return value to show that Objects are storing the album information correctly.
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
//If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make 
//at least one new function call that includes the number of tracks on an album.
function make_album(artist, album) {
    return { artist, album };
}
let album1 = make_album("Allama Iqbal", "Kulyaat-e-Iqbal");
let album2 = make_album("Mariyam", "Roshan Andhera");
let album3 = make_album("Sana", "Rang-e-Mohabbat");
console.log(album1);
console.log(album2);
console.log(album3);
//numbers tracks
function make_album1(artist, album, numberOfTracks) {
    return { artist, album, numberOfTracks };
}
let album4 = make_album1("Allama Iqbal", "Kulyaat-e-Iqbal", 25);
let album5 = make_album1("Mariyam", "Roshan Andhera", 22);
let album6 = make_album1("Sana", "Rang-e-Mohabbat");
console.log(album4);
console.log(album5);
console.log(album6);
//Assignment 41 magicians
//Make an array of magician’s names. Pass the array to a function called show_magicians(), which 
//prints the name of each magician in the array.
let magicianNames = ["Faiqa", "Mariyam", "Sana", "Kainat"];
function show_magicians() {
    for (let magicianName of magicianNames) {
        console.log(magicianName);
    }
}
;
show_magicians(); //function calling
//Assignment 42 great megicians
//Start with a copy of your program from Exercise 41. Write a function called make_great() that 
//modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
//show_magicians() to see that the list has actually been modified.
let magicianNames1 = ["Faiqa", "Mariyam", "Sana", "Kainat"];
function show_magicians1(greet) {
    for (let item of magicianNames1) {
        console.log(greet, item);
    }
}
;
show_magicians1("Hello, How are you Miss:");
show_magicians1("I hope you are good!!");
//Assignment 43 unchanged magicians
//Start with your work from Exercise 40. Call the function make_great() with a copy of the array 
//of magicians’ names. Because the original array will be unchanged, return the new array and store it 
//in a separate array. Call show_magicians() with each array to show that you have one array of the 
//original names and one array with the Great added to each magician’s name.
let magicianNames2 = ["Faiqa", "Mariyam", "Sana", "Kainat"];
//array copy
let magicianNames2copy = [...magicianNames2];
function show_magicians2(greet) {
    let withGreetings = "";
    for (let item of magicianNames2copy) {
        withGreetings += `${greet} ${item}\n`;
    }
    return withGreetings;
}
;
let myGreetings = show_magicians2("Hellow");
let my_Array = myGreetings.split(`\n`);
console.log(my_Array);
//orignal array
console.log(magicianNames2);
//Assignment 44 sandwiches
//Write a function that accepts an array of items a person wants on a sandwich. The function 
//should have one parameter that collects as many items as the function call provides, and it should 
//print a summary of the sandwich that is being ordered. Call the function three times, using a different 
//number of arguments each time.
//array as a parameter
function mySandwiches(...items) {
    return `I want sandwich of ${items}`;
}
;
let first1 = mySandwiches("Cheese", "Chicken", "Vegetable");
let second1 = mySandwiches("Swiss", "Spicy");
let third1 = mySandwiches();
console.log(first1);
console.log(second1);
console.log(third1);
//Assignment 45 cars
//Write a function that stores information about a car in an Object. The function should always 
//receive a manufacturer and a model name. It should then accept an arbitrary number of keyword 
//arguments. Call the function with the required information and two other name-value pairs, such as 
//a color or an optional feature. Print the Object that’s returned to make sure all the information was
//stored correctly.
function carDetails(manufacturer, model, ...additionalInfor) {
    let car = { manufacturer, model, ...Object.fromEntries(additionalInfor) };
    return car;
}
;
let myCarDetails = carDetails("Toyota", "Corolla", [`Color`, `Black`], [`Year`, 2024]);
console.log(myCarDetails);
export {};
