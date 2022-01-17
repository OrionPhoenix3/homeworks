// Zyabrev Vladislav JS

//Homework 9

//Задание 1

const data = [
    {
      name: "John",
      age: 24,
      position: "senior",
      isActive: false,
    },
    {
      name: "Peter",
      age: 33,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sam",
      age: 29,
      position: "junior",
      isActive: true,
    },
    {
      name: "Mary",
      age: 24,
      position: "middle",
      isActive: false,
    },
    {
      name: "Steve",
      age: 23,
      position: "middle",
      isActive: true,
    },
    {
      name: "Kate",
      age: 31,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sally",
      age: 19,
      position: "junior",
      isActive: false,
    },
    {
      name: "Jack",
      age: 19,
      position: "middle",
      isActive: true,
    },
  ];

 function filterData(data, filterBy){
    return data.filter((elem) => {
        return Object.entries(filterBy).every(([key, value]) => {
            return elem[key] === value;
        });
    });
}





  const result = filterData(data, { age: 24, position: 'senior' });
  console.log(`result`, result);












//Задание 2

// const isNegative = (number) => number < 0;
// const increment = (number) => number + 1;
// const logger = (element, index, array) => {
//   console.log(`In array [${array}] on position ${index}: ${element}`);
// };

// const ownForEach = (array, func) => {
//     for(let i = 0; i < array.length; i++){
//         func(array[i], i, array)
//     }
// }

// const ownMap = (array, func) => {
//     for(let i = 0; i < array.length; i++){
//         let res = func(array[i]);
//         console.log(`res`, res);
//     }
// }

// const ownFilter = (array, func) => {
//     let res2;
//     for(let i = 0; i < array.length; i++){
//         if(func(array[i])){
//             res2 = array[i];
//             console.log(`res2`, res2);
//         }
        
//     }
// }

// ownForEach([1, 2, 3], logger);
// ownMap([1, 2, 3], increment); // [2, 3, 4]
// ownFilter([-2, 4, -1], isNegative); // [-2, -1]

