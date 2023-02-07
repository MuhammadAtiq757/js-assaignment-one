// This is a Mathmethical function, there has a positive number input as a perameter and inside the function some prosseccing about math(*, +, /, -.) after the mathmethical processing and then retrun output.

function mindGame(number){
  if(typeof number != 'string'){
    const valueOne = number * 3;
    const valueTwo = valueOne + 10;
    const valueThree = valueTwo / 2;
    const finalValue = valueThree - 5;
 
    return finalValue;
  }
  return "please give the valid number";
  
}
const result = mindGame(5);
console.log(result);





// this is a evenOdd function to find out string length character even/odd and return the output. 

function evenOdd(string){
    if(typeof string == "string"){
        if(string.length % 2 === 0){
            return "even"
        }
    
        return "odd";
    }
    return "pleas give the vaild string"
}

const myString = evenOdd("Phero");
console.log(myString);





// This is function about some mathemathics like thatL: 
// 7 to find out the difference. If this difference is smaller than 7, you must return the subtraction. Otherwise you must return double of the input. Means twice the number you took as input.

function isLGSeven(number){

if (typeof number != "string"){

    const lgOne = number -7;
    if(lgOne < 7){
        return lgOne;
    }

    else{
        const myLg = number * 2;
        return myLg;
    }
}
return "please give the valid number";


}

const myNumber = isLGSeven(6);
console.log(myNumber);






// this function is find out negative value and return the negative value return. 
var myArray = [2, -5, -7, -13];

function findingBadData(array) {

  if(typeof array !="string"){
    let negatives = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negatives++
        }
    }
    return negatives;
  }
  return "pleas give vaild input";

}
console.log(findingBadData(myArray));




// this function is about convert: input as gems and output diamond, this function has 3 perameteres(three freiend gems) after the converting process and then return the diamond value.

function gemsToDiamond(friendOne, friendTwo, friendThree){
if(typeof friendOne== "number" && typeof friendTwo =="number" && typeof friendThree == "number"){
    const fndOne = 21;
    const fndTwo = 32;
    const fndThree = 43;
    const fnd1 = fndOne * friendOne;
    const fnd2 = fndTwo * friendTwo;
    const fnd3 = fndThree *friendThree;

    let totals = fnd1 + fnd2 + fnd3;


if(totals > 1000 * 2){

    let subs = totals - 2000;
   return subs;
}
return totals; 
}
return "please give the valid number";


}

let  friendsGems = gemsToDiamond(20, 200, 50);

console.log(friendsGems);











