//1. Updater
let determiner = -15;
determiner= -88;
let x;

if( determiner < 0  ){
    console.log(`value of x  when value is determinder is  ${determiner} is`,determiner * 2);
}
else if ( determiner > 0)
{
    console.log(`value of x  when value is determinder is  ${determiner}  is`,determiner / 2);
}

else{
    console.log(`value of x  when value is determinder is  ${determiner} is`,determiner);
}

console.log(`---------------------------`);

//2. New Variables
let updater;
if( determiner >=0){
    updater >= 0;
    let message = "Positive number";
    console.log(message);
} 
else if (determiner < 0) {

updater < 0;
updater = "less than 0";
console.log(updater);
}

console.log(updater);
 // console.log(message);

 // it is possible to print updater outside but not message varible coz the way they are defined , updater as global and message within if statement.



//ternary vs if else statement

/*
An if / else statement emphasises the branching first and what's to be done is secondary, while a ternary operator emphasises what's to be done over the selection of the values to do it with 


// ternary operator


The only potential benefit to ternary operators over plain if statements in my view is their ability to be used for initializations, which is particularly useful for const:

E.g.

const int foo = (a > b ? b : a - 10);


Ternary operator is important for const-correctness, and const correctness is a great habit to be in:

    1.This saves a lot of your time by letting the compiler help you spot mistakes you make
    2.This can potentially let the compiler apply other optimizations



*/