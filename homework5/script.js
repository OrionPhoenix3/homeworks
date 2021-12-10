// Zyabrev Vladislav JS3

//Classwork1(5)

//Задание1

// const LOGIN = 'ADMIN';
// const PASSWORD = '1q2w3e'


// const authorize = () =>{
//     let userPassword;
//     let userLogin;
//     let isAuthSuccess = false;
//     let tryAuth=3;

//     do{
//         userLogin = prompt('Логин: ');
//         if(!userLogin){
//             alert('Введите логин: ');
//             continue;
//         }

//         userPassword = prompt('Пароль: ');
//         if(!userPassword){
//             alert('Введите пароль: ');
//             continue;
//         }

//         if(userPassword === PASSWORD || userLogin === LOGIN){
//             isAuthSuccess= true;
//         } else if (tryAuth > 0){
//             tryAuth -= 1;
//             alert('Данные неверны! Количество оставшихся попыток: ' + tryAuth);
//             if (tryAuth === 0){
//                 break;
//             }     
//         }
        
//     }while(!isAuthSuccess || tryAuth === 0){
//         if(tryAuth === 0){
//             alert('Все попытки закончились, до свидания!');
//         } else {
//             alert('Welcome');
//         }
//     }
// }

// authorize()

//Задание2 Classwork

// const drawPyramid = (height) => {
//     for(let i = 0; i < height; i++){
//         let spaceBefore = '';
//         let stars = '';

//         for(let j = 0; j < 2 * i + 1;j++){
//             stars += "*"
//         }

//         for (let k = 0; k < height -i - 1; k++){
//             spaceBefore += ' '
//         }

//         console.log(spaceBefore + stars);
//     }
// }

// const desireHeight = Number(prompt('Какая высота пирамиды?'));
// drawPyramid(desireHeight);

//Задание2 Homework

let firstNumber = Number(prompt('Введите начало диапазона: '));
let secondNumber = Number(prompt('Введите конец диапазон: '));

for (let i = firstNumber; i <= secondNumber; i++) { 
    let isPrime = true;
    for (let j = 2; j < i; j++) { 
        if (i % j === 0) { 
            isPrime = false; break; 
        } 
    }
    if (isPrime) {
        console.log(i); 
    }
}