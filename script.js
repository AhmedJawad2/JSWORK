//Artimetic perators
let apple = 1;
let banana = 11;
let totalFruits = apple+banana;
 console.log("apple+banana",totalFruits);
 console.log("apple =",apple,  "& banana", banana,"total",totalFruits)
 console.log("apple - banana",apple-banana);
 console.log("apple * banana",apple*banana);
 console.log("apple / banana",apple/banana);
 console.log("apple % banana",apple%banana);
 
//  Exponantional Operator
let o = 5;
let u = 2;      
console.log("o ** u", o ** u)//o^2;


// Urinary Operator
// incremant Operator exapmle
let incr=1;
incr = incr+1;
console.log(incr)

let lic=2;
lic = lic +5;
lic +=10;
console.log(lic)

// pre Adding value
let pr=10;
console.log("++a pre adding karega phir print karega",++pr)

//post Adding pahlah print karega phir add karyuga

let post=10;
console.log("a++ post adding pahlah print karyga ", post++);

console.log("ab dubara print karyga last ma print kia usk bad add kia ab dubara print ",post)

// Assigment Operators In JS
// +=
let aa = 2;
let ss = 2;
    aa += 1
    ss += 2
console.log("a after assigment of 1 in += way",aa,"ss",ss)
// same for decremeant


// COMPARISON OPERATOR 
let camp = 10;
let camp2 = 20;
console.log("10 == 20",camp == camp2)
console.log("10 === 20",camp === camp2)
console.log("10 != 20", camp != camp2)
console.log("10 !== 20",camp !== camp2)


//Logical Operators;
let co1 = 10;
let co2 = 20;

let condition1 = co1<co2;
let condition2 = co2 === 20;
console.log("condition1 && condition2", condition1 && condition2)
//if both conditions are true tab he && operator ture hoga to wo true deyga final asnwer



//or || opeartor 
//   in this if both false then it will give the final faislo is false other wise True return kando
let j = 11;
let p = 12;

let condition3 = j>l;
let condition4 = o>k;

console.log("Condition3 || Condition4" , condition3 || condition4);