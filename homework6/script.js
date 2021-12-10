// Zyabrev Vladislav JS3

//Classwork2(6)
 
//Задание 1

// const getRGBFromHex = (hexCode) => {
//     // const red = hexCode.slice(1,3);
//     // const green = hexCode.slice(3,5);
//     // const blue = hexCode.slice(5,7);

//     // console.log(`red`, red)
//     // console.log(`green`, green)
//     // console.log(`blue`, blue)

//     // const decimalRed = parseInt(red, 16);
//     // const decimalGreen = parseInt(green, 16);
//     // const decimalBlue = parseInt(blue, 16);

//     // return `rgb(${decimalRed},${decimalGreen},${decimalBlue})`

//     let codes = '';

//     for(let i = 1; i < hexCode.lenght; i += 2){
//         let color = parseInt(hexCode.slice(i, i + 2), 16);
//         console.log(`color`, color)

//         // if(i !== hexCode.lenght-2){
//         //     color = `${color}, `
//         // }

//         codes += i !== hexCode.lenght -2 ? `${color}, ` : color


//         // codes += color
//     }

//     return `rgb(${(codes)})`
    
// }

// const rgbResult = getRGBFromHex('#ffffff');
// console.log(`rgbResult`, rgbResult)

// //Задание 2

// const getHexFromRGB = (r, g, b) => {
//     return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
// }

// const resultHex = getHexFromRGB(0, 255, 255)
// console.log(`resultHex`,resultHex)

//Задание 3

// const maskCreditCard = (cardNumber) => {
//     const MASK = '****';
//     let result = '';

//     for(let i = 0, j = 1; i < cardNumber.length; i += 4, j++){
//         const numbers = cardNumber.slice(i, i + 4);
//         let maskingResult;
//         console.log(`numbers`, numbers);

//         if(j ===2 || j === 3){
//             maskingResult = MASK
//         } else {
//             maskingResult = numbers
//         }

//         if(j !== 4){
//             result += `${maskingResult} `
//          } else {
//             result += maskingResult
//         }
//     }
//     return result

// }

// const res = maskCreditCard('5168111147864573');

// console.log(`res`, res)


//Homework 6

//Задание 1

// const showUserNameAndSurname = (fullName) => {
//     if(fullName == 0){
//         alert('Вы ввели неподходящие значение!')

//         return;
//     }

//     const spaceIndex = fullName.indexOf(' ');
//     console.log(`spaceIndex`, spaceIndex)
//     if (spaceIndex === -1) {
//         alert('Вы не ввели пробел!');

//         return;
//     }

//     const name = fullName.slice(0, spaceIndex);
//     const surname = fullName.slice(spaceIndex + 1);

//     const firstLetterName = fullName.slice(0, 1);
//     const firstLetterSurname = fullName.slice(spaceIndex + 1, spaceIndex + 2);

//     const restLetterName = fullName.slice(1, spaceIndex);
//     const restLetterSurname = fullName.slice(spaceIndex + 2);

//     const showName = firstLetterName.toUpperCase() + restLetterName.toLowerCase();
//     const showSurname = firstLetterSurname.toUpperCase() + restLetterSurname.toLowerCase();

//     if (name == 0) {
//         alert('Вы не ввели имя!');

//         return;
//     }
//     if (surname == 0) {
//         alert('Вы не ввели фамилию!');

//         return;
//     }
//     alert(`Имя: ${showName}`);
//     alert(`Фамилия: ${showSurname}`);

// }

// const showUserPassword = (password) => {
//     if(password.length < 6){
//         alert('Пароль должен содержать больше 6 символов!');
//     }
//     const lowerExample = password.toLowerCase();
//     const upperExample = password.toUpperCase();

//     console.log('lowerExample', lowerExample);
//     console.log('upperExample', upperExample);

//     if(password === lowerExample || password === upperExample){
//         alert('Пароль должен содержать символы разного регистра!');
//     }
// }


// const userFullName = prompt('Введите имя и фамилию через пробел');
// showUserNameAndSurname(userFullName);

// const userPassword = prompt('Введите пароль');
// showUserPassword(userPassword);

//Задание 2

function getRandomNumber(minNumber, maxNumber) {
    minNumber = Math.ceil(minNumber);
    maxNumber = Math.floor(maxNumber);
    const showNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    alert(`Рандомное число: ${showNumber}`);
  }



  const minNumber = Number(prompt('Введите минимум границы промежутка: '));
  const maxNumber = Number(prompt('Введите максимум границы промежутка: '));

  const integerRandom = getRandomNumber(minNumber,maxNumber);