const sortedSquaredArray = (array) => {
    let result = []
    let count = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        count = element * element;
   
        result.push(count);
    }

    return result.sort(function(a, b){return a - b});
};

const sampleArrayA = [1, 2, 3, 5, 6, 8, 9];
const sampleArrayB = [-2, -1];
const sampleArrayC = [-10, -5, 0, 5, 10];

const finalResultA = sortedSquaredArray(sampleArrayA);
const finalResultB = sortedSquaredArray(sampleArrayB);
const finalResultC = sortedSquaredArray(sampleArrayC);

console.log(finalResultA);
console.log(finalResultB);
console.log(finalResultC);