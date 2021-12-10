// Zyabrev Vladislav JS3

//Homework 7

//Задание 1

// const makeSchedule = () =>{
//   let scheduleTime;
//   let scheduleTask;
  
//   const userSchedule = {};
  
//   while(true){
//     scheduleTime = prompt('Введите время задачи');
//     if(scheduleTime === null){
//       break
//     }
//     scheduleTask = prompt('Введите название задачи');
//     if(scheduleTime !== null && scheduleTask !== null){
//       userSchedule[scheduleTime] = scheduleTask;
//     } else {
//       break;
//     }
//   }
//   console.log('userSchedule',userSchedule);
// }

// makeSchedule();

//Задание 2

const salaries = {
  John: "4300.00",
  Ann: "5700.40",
  Pete: "4900.95",
};

const getSalariesTotal = (salaries) => {
  let total = 0;
  for (let employee in salaries) {
    let getNumber = Number(salaries[employee]);
    // console.log(`salaries[employee]`, salaries[employee]);
    // console.log(`salaries[empleyee]`, salaries[employee])
    getNumber = getNumber * 100;
    
    total += getNumber;
    console.log(`total`, total)
  }

  return total / 100;
};

const totalResult = getSalariesTotal(salaries);
console.log(`totalResult`, totalResult)
