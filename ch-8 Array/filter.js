const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(number);

const evenNumber = number.filter((num) => num % 2 === 0);
console.log("even number", evenNumber);

const greter = number.filter((num) => num > 5);
console.log("greter than 5", greter);

const studentDetails = [
  { name: "nisha", age: 24, city: "bhavnagar", course: "doctor sem-4" },
  {
    name: "tisha",
    age: 20,
    city: "bhavnagar",
    course: "It Engineer",
  },
  {
    name: "hemani",
    age: 21,
    city: "Rajkot",
    course: "softwer Engineer",
  },
  {
    name: "kyati",
    age: 25,
    city: "Rajkot",
    course: "web-devloper",
  },
  {
    name: "neha",
    age: 30,
    city: "surat",
    course: "phd",
  },
];

const age = studentDetails.filter((std) => std.age > 23).map((std) => std.name);

console.log("age", age);
