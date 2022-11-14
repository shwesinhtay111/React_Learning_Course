let a = 10;
// type inferring, static language

// a = "hello";
console.log("a=>", a);

let obj ={
    name : "SSH",
    age : 34
};
// union type
let b : string | number = "hello";

let x = b *1 ;
console.log("x", x);

interface Human{
    name : string;
}
interface Teacher {
    subject : string;
}

type HumanTeacher = Human & Teacher;


