'use strict'

// q1
function max(a, b) {
    if (a > b) return a;
    else return b;
}
console.log('max(2,3)', max(2,3))

// q2
function maxOfThree(a, b, c) {
    let maxNbr = max(a, b);
    return max(maxNbr, c);
}
console.log('maxOfThree(2,3,5)', maxOfThree(2,3,5))

// q3
function isVowel(s) {
    return 'aeoiu'.includes(s[0]);
}
console.log("isVowel('a')", isVowel('a'))
console.log("isVowel('z')", isVowel('z'))

// q4
function sum(arr) {
    let rs = 0;
    for (let i = 0; i < arr.length; i++) {
        rs += arr[i];
    }
    return rs;
}
console.log('sum([1,2,3,4])', sum([1,2,3,4]))


function multiply(arr) {
    let rs = 1;
    for (let i = 0; i < arr.length; i++) {
        rs *= arr[i];
    }
    return rs;
}
console.log('multiply([1,2,3,4])', multiply([1,2,3,4]))

// q5
function reverse(arr) {
    let s = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        s += arr[i];
    }
    return s;
}
console.log("reverse('jag testar')", reverse('jag testar'))

// q6
function findLongestWord(arr) {
    let max = 0;
    const words = arr.split(/\s+/)
    //console.log(words)
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > max ) {
            max = words[i].length;
        }
    }
    return max;
}
console.log("findLongestWord('js is awesome')", findLongestWord('js is awesome'))

// q7
function filterLongWords(arr, i) {
    let rs = [];
    const words = arr.split(/\s+/)
    for (let j = 0; j < words.length; j++) {
        if (words[j].length == i ) {
            rs.push(words[j]);
        }
    }
    return rs;
}
console.log("filterLongWords('js is awesome', 2)", filterLongWords('js is awesome', 2))

// q8
const computeSumOfSquares = (arr) => {
    return arr.map(x => x * x)
        .reduce((prev, curr) => prev + curr, 0);
}
console.log('computeSumOfSquares([1,2,3])', computeSumOfSquares([1,2,3]) )

// q9
const printOddNumbersOnly = (arr) => {
    const rs = arr.filter(x => x % 2 != 0).forEach(x => console.log(x))
}
console.log('printOddNumbersOnly ([1,2,3,4,5]) ');
printOddNumbersOnly ([1,2,3,4,5]);

// q10
const computeSumOfSquaresOfEvensOnly  = (arr) => {
    return arr.filter(x => x % 2 == 0).map(x => x * x)
        .reduce((prev, curr) => prev + curr, 0);
}
console.log('computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) ', computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) )

// q11
const sum2 = arr => arr.reduce((prev, curr) => prev + curr, 0);
console.log('sum2([1,2,3,4])', sum2([1,2,3,4]))

const multiply2 = arr => arr.reduce((prev, curr) => prev * curr, 1);
console.log('multiply2([1,2,3,4])', multiply2([1,2,3,4]))

// q12
const findSecondBiggest = arr => {
    if (arr.length < 2) return null;
    if (arr.length == 2) return Math.min(arr[0], arr[1]);
    let rs = 0, max = 0;
    if (arr[0] > arr[1]) {
        max = arr[0];
        rs = arr[1];
    } else {
        max = arr[1];
        rs = arr[0];
    }
    console.log(max, rs)
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > max) {
            rs = max;
            max = arr[i];
        } else if (arr[i] > rs) {
            rs = arr[i];
        }
    }
    return rs;
}
console.log('findSecondBiggest([19,9,11,0,12]) ', findSecondBiggest([19,9,11,0,12]) )

// q13
const printFibo = (n, a, b) => {
    if (n < 1) console.log('Illegal argument')
    else if (n == 1) return a;
    else if (n == 2) return a + ', ' + b;
    else {
        let prev2 = a, prev1 = b;
        let s = prev2 + ', ' + prev1 ;
        for (let i = 3; i <= n; i++) {
            let curr = Number(prev2) + Number(prev1);
            prev2 = prev1;
            prev1 = curr;
            s += ', ' + curr;
        }
        return s;
    }
}
console.log('printFibo(n=1, a=0, b=1)', printFibo(1, 0, 1))
console.log('printFibo(n=2, a=0, b=1)', printFibo(2, 0, 1))
console.log('printFibo(n=3, a=0, b=1)', printFibo(3, 0, 1))
console.log('printFibo(n=6, a=0, b=1)', printFibo(6, 0, 1))
console.log('printFibo(n=10, a=0, b=1)', printFibo(10, 0, 1))
