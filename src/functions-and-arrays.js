// Iteration 1 | Find the Maximum
let biggestNumber = 0

function maxOfTwoNumbers(firstNumber, secondNumber) {

    if (firstNumber < secondNumber) {
        biggestNumber = secondNumber
        return biggestNumber
    }

    else if (firstNumber > secondNumber){
        biggestNumber = firstNumber
        return biggestNumber
    }
}

maxOfTwoNumbers(89,56) // test

console.log(maxOfTwoNumbers(89,56)) // test




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "antiotebureuiabguiero", "crocodile", "pearl", "orchard", "crackpot"];

let newArr=[" "]

function findLongestWord() {
    for (i=0 ; i<words.length ; i++) {
        if (words[i].length > newArr[0].length) {
          newArr.pop()
          newArr.push(words[i])
            }
               
    }
  return newArr
}

result = findLongestWord(["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"])

console.log(result)

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers() {
let sum = 0
    for(i=0 ; i<numbers.length ; i++){
        sum += numbers[i]
    }

    return sum
}

let result = sumNumbers(numbers)

console.log(result)



// Iteration 4 | Numbers Average
const numbers = [2, 6, 9, 10, 7, 4, 1, 9]
function sumNumbers() {
let sum = 0
    for(i=0 ; i<numbers.length ; i++){
        sum += numbers[i]
    }

    return sum
}

function averageNumbers(myNumber) {
    let average = sumNumbers(myNumber) / myNumber.length

    return average
}

let result = averageNumbers(numbers)
console.log(result)


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array, word) {
  
  if  (array.length===0)
        {
          return null
       }    
  
    for(i=0 ; i<array.length ; i++){
    
       if (array.includes(word)===true){
            return true
        }
        else if (array.includes(word)===false)
           { return false }
    }
}

result = doesWordExist(words2, "htehsgsr")

console.log(result)