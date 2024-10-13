

let string = "Hello, World!";

let length = string.length;
console.log("Length of the string: " + length);


let string2 = " How are you?";
let concatenatedString = string.concat(string2);
console.log("Concatenated string: " + concatenatedString);


let slicedString = string.slice(7, 12);
console.log("Sliced string: " + slicedString);


let replacedString = string.replace("World", "JavaScript");
console.log("Replaced string: " + replacedString);


let index = string.indexOf("World");
console.log("Index of 'World': " + index);


    //string reverse using recursion
    // *****************************

function reverse(str){
    if(str.length<=1){
        return str
    }
    return reverse(str.slice(1))+str[0]
}

const str = "HELLO"
console.log(reverse(str))


    // remove vowels from a string
    // **************************

let strg = 'Hello world'
let vowels = 'aeiouAEIOU'
let result = ''
for(let i=0;i<strg.length;i++){
    let isVowel = false
    for(let j=0;j<strg.length;j++){
        if(strg[i]===vowels[j]){
            isVowel = true
            break;
        }
    }
    if(!isVowel){
        result += strg[i]
    }
}
console.log(result);


    // // extract digit from a string
    // // ****************************

// let string = "+(91)-990-09-990"
// let result = ''
// for(let i=0;i<string.length;i++){
//     if(string[i]>='0' && string[i]<='9'){
//         result += string[i]
//     }
// }
// console.log(result);


        // reversing a string
        // **********************

// function strReverse(str){
//     let newString = ''
//     for(let i=str.length-1;i>=0;i--){
//         newString+=str[i]
//     }
//     return newString
// }

// let string = "Hello world"
// console.log(strReverse(string))

            // or

// function strReverse(str){
//     return str.split('').reverse().join('')
// }
// let string = "Dilfa Thayyil"
// console.log(strReverse(string))

            // or

// function strReverse(str){
//     let arr = str.split('')
//     let left = 0
//     let right = arr.length-1
//     while(left<right){
//         let temp = arr[left]
//         arr[left] = arr[right]
//         arr[right] = temp

//         left++
//         right--
//     }
//     return arr.join('')
// }

// let string = "mern stack"
// console.log(strReverse(string))


// convert comma separated values into array elements
// ***************************************************
// let value = "1,2,3,4,5"
// let array = value.split(',')
// console.log(array);


// function to ensure string ends with period
// ******************************************
// function endsPeriod(string){
//     if(string.endsWith('.')){
//         return string
//     }
//     return string+'.'
// }
// let string = "hello"
// console.log(endsPeriod(string));

