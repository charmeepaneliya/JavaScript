//map

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("old array", num);

const newArray = num.map((num) => num * 2);

console.log("new array", newArray);

const color = ["yellow", "pink", "blue", "white", "perple", "green"];
console.log(color.map((color) => color));

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
console.log(studentDetails.map((student) => student.name));

const studentdetail = studentDetails.map((student) => student.name);

console.log("studentDetail",studentdetail);