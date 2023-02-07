/*  1 Lesson
let js = "amazing";
// console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas$matilda = "JM";
let $function = 27;
let name = "Jonas";
let Person = "Jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";
*/

/*  2 Lesson
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); // null is not an object, its a javascript bug
*/

/*  3 Lesson
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "programmer";
job = "teacher";

lastName = "Dolznikov";
console.log(lastName);
*/

/*  4 Lesson
const now = 2037;
const ageAleksej = now - 1988;
const ageSarah = now - 2018;
console.log(ageAleksej, ageSarah);

console.log(ageAleksej * 2, ageAleksej / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2*2*2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison operators
console.log(ageAleksej > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*  5 Lesson
const now = 2037;
const ageAleksej = now - 1988;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageAleksej + ageSarah) / 2;
console.log(ageAleksej, ageSarah, averageAge);
*/

/*  6 Lesson
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);
*/

/*  7 Lesson
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/*  8 Lesson
// type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23));

// type coercion
console.log("I am " + 23 + " years old"); // avtomaticessij vsio delajet javascript
console.log("I am " + "23" + " years old");
console.log("I am " + String(23) + " years old"); // tak nado bilo bi delat, no ne nado

console.log("23" - "10" - 3); // minusi vsegda avtomatom perevodiat kak nado, pliusi net
console.log("23" * "2"); // umnozenije toze vsegda sami meniajutsia
console.log("23" / "2"); // tak ze i delenija

let n = "1" + 1; //string 11
n = n - 1; // strin 11 - 1
console.log(n); // = 10
*/

// 5 falsy values : 0, '', undefined, null, NaN
// truthly values : 1,2,3,4,5,6...... "ssdsdsd"

/* 9 Lesson
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

/* 10 Lesson
const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) {
  // '23' == 23
  console.log("Cool! 23 is an amazing number!");
}
if (favourite === 23) {
  // '23' === 23 not equal
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");
*/

/* 11 Lesson
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision; // mozno sozdat peremennuju, no obicno eto pisem v if statement
// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Soomeone else should drive...");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Soomeone else should drive...");
}
*/

/* 12 Lesson  2 raznih varianta mozno so switch lucse!, i mozno s if else

const day = "friday";

switch (day) {
  case "monday": // day === 'monday' do whis block till break
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}
*/

/* 13 Lesson
3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`);
*/

/* 13 Lesson Ternarnij operator
const age = 23;
// age >= 18
//   ? console.log("I like to drink wine 🍷")
//   : console.log("I like to drink water 💧");
// mozno tak kak sverhu mozno tak kak snizu i jesio nize s if else, snizu case delajut tak s ? i :
const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);
// mozno i tak, siuda vstavliat srazu vsio virazenije
console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
*/
