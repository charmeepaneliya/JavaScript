//charAt()

let str = "javaScript";

console.log(str.charAt(0));
console.log(str.charAt(4));

//concate()

let str1 = "hello";
let str2 = "word";

console.log(str1.concat(" " ,str2));

//endswidth()
//// endsWith() checks if string ends with given word (true/false)

let a ="hello javaScript";

console.log(a.endsWith("Script"));// true
console.log(a.endsWith("Java")); // false

//include()
// includes() checks if word exists in string (true/false)

let b = "hello javascript";

console.log(b.includes("hii"));//false
console.log(b.includes("hello"));//true

//indexof()
// indexOf() returns first position of word

let c = "hello word";

console.log(c.indexOf("h"));//0

//lastindexof()
//lastIndexOf() returns last position of word

let d = "hello word";

console.log(d.lastIndexOf("o"));//7

//length()
//length returns total number of characters

let e="javaScript";

console.log(e.length);//10

//match()
//match() searches and returns matched word

let f = "java javascript";

console.log(f.match("java")); //[ 'java', index: 0, input: 'java javascript', groups: undefined ]

//repeat()
//repeat() repeats string given number of times

let g = "hi ";

console.log(g.repeat(3)); // hi hi hi

//replace()
// replace() replaces first matched word

let h= "javaScript";

console.log(h.replace("javaScript","Html")); //Html

//replaceAll()
//replaceAll() replaces all matched words

let i = "java node java";

console.log(i.replaceAll("java","js"));//js node js

//search()
//returns position of matched word

let j = "java javaScript";

console.log(j.search("java"));//0



 