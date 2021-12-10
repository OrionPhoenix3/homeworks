// Zyabrev Vladislav JS3

//Homework 8

//Задание 1

// const countTrue = (arr) =>{
//   let count = 0;
//   for (let value of arr){
//       if(value === true){
//         count++;
//       }
//   }
//   return count;
// }

// let showCountTrue = countTrue([false, false, false, false, true]);
// console.log(`showCountTrue`, showCountTrue);

//Задание 2

// const getOccurrencesCount = (arr) => {
//   const OccurrencesCount = {};

//   for(let i = 0; i < arr.length; i++){
//     let count = 0;
//     for(let j = 0; j < arr.length; j++){
//       if(arr[i] === arr[j]){
//         count++;
//       }
//     }
//     OccurrencesCount[arr[i]] = count;
//   }
//   return OccurrencesCount;
// }

// let showOccurrencesCount =  getOccurrencesCount(["a", "v", "a", "b", "b", "b", "b", "v"]);
// console.log(`showOccurrencesCount`, showOccurrencesCount);

//Задание 3

// const findExcess = (arr) => {
    
//     let countEven = 0;
//     let countOdd = 0;

//     for(let i = 0; i < 3; i++){
//         if(arr[i] % 2 === 0){
//             countEven++;
//         } else if(arr[i] % 2 !== 0){
//             countOdd++;
//         }
//     }

//     if(countEven > countOdd){
//         for(let i = 0; i < arr.length; i++){
//             if(arr[i] % 2 !== 0){
//                 return arr[i];
//             }
//         }  
//     } else if(countEven < countOdd){
//         for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             return arr[i];
//         }
//         }
//     }   
// }

// let showFindExcess = findExcess([1, 1, 1, 1, 2]); // -> 3
// console.log(`showFindExcess`, showFindExcess);
