// Use max method
const array = [5, 12, 7, 20, 15];

const max = Math.max(...array);
// console.log(max);

// Use reduce mathod
const numbers = [12, 25, 46, 32, 2000];
const maxReduce = numbers.reduce((acc, currentItem) => {
    if (acc > currentItem) {
        return acc;
    }
    else {
        return currentItem;
    }
}, 0);
// console.log(maxReduce);

// Use sort method
const num = [12, 100, 11, 20, 22, 21];
const sortNum = num.sort((a, b) => b - a)[0];
// console.log(sortNum)

let maxNum = 0;
for (let i = 0; i < array.length; i++) {
    if(array[i]> maxNum){
        maxNum = array[i];
    }
}
console.log(maxNum);


// const votes = ['yes', 'no', 'yes', 'yes', 'yes', 'no', 'Absent', 'Absent', 'No Vote'];

// const result = votes.reduce((acc, val) => {
//     if (acc[val]) {
//         acc[val]++;
//     }
//     else {
//         acc[val] = 1;
//     }
//     return acc;
// }, {})
// console.log(result);