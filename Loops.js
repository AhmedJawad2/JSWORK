for(let i= 1; i<= 5; i++){
    console.log("Apna Collage")
}
console.log("Loop Has Ended")
let sum=0;
sum = prompt("Enter value of sum n")

for(let x=1; x<=5; x++){
    sum = sum+x;
    console.log(sum,"sum");
}
console.log("Loop has Ended");
// for of loop
let str="apnaCollage";
for(let i of str){
    console.log("i=",i);
}

let student = {
    name : "jawad",
    age : 26,
    caste : "Abro"
}
for(let key in student){
    console.log("Key",key,"value=",student[key]);
}
//practice Question
for (let num=0; num<=100;num++){
    if(num%2===0){
        console.log("num=",num)
    }
}