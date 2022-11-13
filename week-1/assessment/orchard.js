///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1];
const galaAcres = [5, 2, 4, 3, 6, 2, 4];
const pinkAcres = [1, 5, 4, 2, 1, 5, 4];

const fujiPrice = 0.89;
const galaPrice = 0.64;
const pinkPrice = 0.55;

// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
/*
Using concat() I can merge all acres for easier handling. Then simply loop through all values in the merged array
and increment the counter.
*/
let totalAcres = 0;

const fields = fujiAcres.concat(galaAcres, pinkAcres);

for (let i = 0; i < fields.length; i++) {
  totalAcres += fields[i];
}

console.log(totalAcres);

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
const averageDailyAcres = totalAcres / fields.length;

console.log(averageDailyAcres);

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174;
let days = 0;

// CODE HERE
/**
 While a for loop could also be used to accomplish this task, a while loop might be closer to how we might 
 think about solving this problem. "If I have this many acres left to pick, and on average I pick this much, how
 many days will it take it."
 * 
 */
while (acresLeft > 0) {
  acresLeft -= averageDailyAcres;
  days++;
}

console.log(days);

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// const fujiAcres = [2, 3, 3, 2, 2, 2, 1];
// const galaAcres = [5, 2, 4, 3, 6, 2, 4];
// const pinkAcres = [1, 5, 4, 2, 1, 5, 4];

/**
 I chose to iterate through each acres array, multiply, and then push to the tons array because
 it seems clearer and more readable to me than any other method I could think of. The code is 
 straightforward and easy to understand at each step.
 */

// CODE HERE
let fujiTons = [];
for (let i = 0; i < fujiAcres.length; i++) {
  fujiTons.push(fujiAcres[i] * 6.5);
}

let galaTons = [];
for (let i = 0; i < galaAcres.length; i++) {
  galaTons.push(galaAcres[i] * 6.5);
}

let pinkTons = [];
for (let i = 0; i < pinkAcres.length; i++) {
  pinkTons.push(pinkAcres[i] * 6.5);
}

console.log(fujiTons);
console.log(galaTons);
console.log(pinkTons);

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE
/**
 As the instructions did not specify, I thought this was a perfect use case for reduce() as it is
 succint and readable and reduces the potential for error that a loop might introduce. 

 Simply start with an initial value of 0 which will become prev, and keep adding the next value in the array
 (starting at index 0 because an initial value is provided) until a total is summed, and then finally convert it to pounds.
 */
let fujiPounds = fujiTons.reduce((prev, curr) => prev + curr, 0) * 2000;

let galaPounds = galaTons.reduce((prev, curr) => prev + curr, 0) * 2000;

let pinkPounds = pinkTons.reduce((prev, curr) => prev + curr, 0) * 2000;

console.log(fujiPounds);
console.log(galaPounds);
console.log(pinkPounds);

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// const fujiPrice = 0.89;
// const galaPrice = 0.64;
// const pinkPrice = 0.55;

// CODE HERE

/**
 Since we now have the total for each apple type in pounds, we can simply multiply it by its price to calculate the profit
 and store the result in a variable.
 */

let fujiProfit = fujiPounds * fujiPrice;
let galaProfit = galaPounds * galaPrice;
let pinkProfit = pinkPounds * pinkPrice;

console.log(fujiProfit);
console.log(galaProfit);
console.log(pinkProfit);

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

/**
 * Add up all the stored totals for each apple type to get the total profit!
 */

// CODE HERE
const totalProfit = fujiProfit + galaProfit + pinkProfit;

console.log(totalProfit);
