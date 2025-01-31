//Exercise 1
let todoList = ["shower", "dinner", "sleep"];
console.log(todoList);
todoList.push("wake up");
console.log(todoList);
todoList.splice(0, 1);
console.log(todoList);
//Exercise 2
let numbers = [8, 9, 10, 11, 26, 78, 35, 48, 13];
let evenNum = [];
for (i = 0; i <= numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNum.push(numbers[i]);
  }
}
console.log(evenNum.length);
//Exercise 3
let myArray = ["A", "B", "C", "D", "E"];
let reverseArray = [];

for (i = 0; i < myArray.length; i++) {
  // myArray.unshift(myArray[i++]);
  // myArray.splice(i, 1);
  // Didn't work but keeping cuz the result was funny lol
  reverseArray.unshift(myArray[i]);
}
console.log(reverseArray);
//Exercise 4
let nums = [50, 5, 500];
let highestNum = 0;

for (i = 0; i >= nums.length; i++) {
  if (nums[i] > highestNum) {
    highestNum = nums[i];
  }
}
console.log(highestNum);

//omg I should be using a while loop instead!

//Exercise 5
