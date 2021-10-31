// Zyabrev Vladislav JS3

//Задание 1

let numberFirst = Number(prompt('Введите первое число:'));
let numberSecond = Number(prompt('Введите второе число:'));

if(numberFirst > numberSecond)
{
    alert('Число ' + numberFirst + ' больше, чем число ' + numberSecond);
} else if(numberFirst < numberSecond){
    alert('Число ' + numberFirst + ' меньше, чем число ' + numberSecond);
} else{
    alert('Первое и второе число равны между собой');
}

//Задание 2

let numberFirst = Number(prompt('Введите первое число:'));
let numberSecond = Number(prompt('Введите второе число:'));
let arithmeticOperation = prompt('Введите желаемое действие (допустимо +, -, *, /):');

let resultOperation;

switch(arithmeticOperation){
    case '+':
        resultOperation = numberFirst + numberSecond;
        alert(numberFirst + '+' + numberSecond + '=' + resultOperation);
        break;
    case '-':
        resultOperation = numberFirst - numberSecond;
        alert(numberFirst + '-' + numberSecond + '=' + resultOperation);
        break;
    case '*':
        resultOperation = numberFirst * numberSecond;
        alert(numberFirst + 'x' + numberSecond + '=' + resultOperation);
        break;
    case '/':
        resultOperation = numberFirst / numberSecond;
        alert(numberFirst + ':' + numberSecond + '=' + resultOperation);
        break;
    default:
        break;
}

//Задание 3
//Стало скучно, применил более творческий подход

let ageHuman = Number(prompt('Приветствую Вас на аттракционе: американские горки. Введите ваш возраст:'));

let agePermission;

if(ageHuman>=18 && ageHuman<60){
    alert('Приятной поездки!');
} else if(ageHuman>=12 && ageHuman<18){
    agePermission = confirm('Вы слишком юны, у вас есть разрешение взрослых?');
    if(agePermission){
        alert('Приятной поездки юный падаван!');
    } else {
        alert('Иди за разрешение сопляк!');
    }
} else if (ageHuman>=60 && ageHuman<80) {
    agePermission = confirm('Вы в преклоннном возрасте, у вас есть разрешение молодых людей?');
    if(agePermission){
        alert('Приятной поездки пенсионер!');
    } else {
        alert('Иди за разрешение человек преклонного возраста!');
    }
}else if(ageHuman<12){
    alert('Увы, но вы слишком малы, для этого аттракциона, попробуйте другие аттракционы');
} else if(ageHuman>=80){
    alert('Увы, но вы слишком стары, для этого аттракциона, попробуйте другие аттракционы');
} else{
    alert('Олух Царя Небесного, ты не то указал! Укажите пожалуйста правильно ваш возраст, в числовом выражении!');
}