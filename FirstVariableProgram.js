console.log("Apna Collage!")
console.log("Jawad Abro")
age = 24
x = null;
y = undefined;
isFollow = true

//Some Rules & Feautures we got in ECMAScript 2015
// ways of delearing variable in jS we have 3 Variable 
// 1 is var but but after 2015 we dont have need to use this bcz we got ECMAScript2015 (ES6) 
// in which we got let and const variable 
// var yesh in which we can redeclared and update A goloble scope variable
// let in which we cant redeclared but yesh we can update 
// const is like final we cant update or we cant redeclared fixed value

// in this the output is undefined
let a;
// a=10;
console.log(a);
// first declared and then intialize or we say update
let A;
A=10
console.log(A)
// we can not do this with (const)

// so this is a bloc scope {} that we use inside a block scope we declared our variable but we can not redefined in the same block for that  
{
    let j=110
    console.log(j);
}

// we have to create a new block scope and then we will redefiend the same declared variable
{
    let j=200
    console.log(j);
}

// __DATATYPES__
// 1-Number
let ages=25;
// for checking type we write $type of age$ we will get the type at console; 

let price=2100;//type of number

let names = "jawad";
console.log(names);//type of String
isFollow = true;//type of isFollow Boolean
let c;
console.log(c);
let s = null //type of s = object //null ko hum alag se ik premative data type manta ha and null iska mtlb hota ha absance of an object; datatype null ka object hota ha ya kahsakte ha absance of object;
console.log(s);

let q=BigInt("123");
let z=Symbol("1");
let v=Symbol(1);



const Student = {
    fullName : "jawad", //in this name is key
    age : 27,       //in this age is key
    percentage : 90,//in this percantage is key
    isPass : true   //in this isPass is key
        //Particular key ko access karna ka lia 2 tareeka hota ha obj.apnikey ka name like student.name 
        //ya phir obj k sath [] braket usk andr double quations ma key ka name obj["name"];
}//in every object we have pair os {key : value} 
console.log(Student);
console.log(Student.isPass);
console.log(Student["percentage"])
//student is now object that means collection of diffrent variables jo alag alag type k hosakte ha 
//
//for now agar misal k tor p humare pass age 27 ha or ma is ma update karna chahta hu jo student object k andr ha to 
// usa karna ka tareeka ha ye 
Student["age"] = Student["age"] + 1;
console.log(Student.age);

Student["fullName"] = "AHMEDJAWAD ABRO";
console.log(Student.fullName)

//IF const HAVE A OBJ THEN WE HUM USKI KEY KO UPDATE KARSAKTE HA OTHERWISE AGAR SRF const variable o to hum uski value change nahe karsakte 