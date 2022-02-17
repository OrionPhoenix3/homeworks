// Zyabrev Vladislav JS4

//Homework 15

//Задание 1

const response = {
  data: [
    {
      username: "samuel",
      is_active: true,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
    {
      username: "john",
      is_active: false,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
    {
      username: "peter",
      is_active: false,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
  ],
  meta: {
    paging: {
      current: 1,
      next: 2,
      prev: null,
      total: 14,
      per_page: 3,
    },
  },
};

const {
  data: [{ is_active: isActive }],
  meta: {
    paging: { total }
  }
} = response;

console.log(total);
console.log(response.meta.paging.total);

//Задание 2

const user = {
  name: "gabriel",
  surname: "brown",
  age: 17,
  height: 178,
};

const { name, surname, ...parameters } = user;

//Задание 3

const max = (a, b) => {
  return a > b ? a : b;
};

const advanced = (...numbers) => {
  let max = 0;

  numbers.forEach((num) => {
    if(num > max) {
      max = num;
    }
  });

  return max;
}

console.log(advanced(8, 10, 22));


//Задание 4

// const createMessage = (author, text, reciever, time) => {
//   return `From ${author} to ${reciever}: ${text} (${time.toLocaleDateString()})`;
// };
// const message = createMessage("Peter", "Hello", "Sam", new Date());

const createMessage = ({
  author = "Guest",
  text,
  reciever,
  time = new Date()
}) => {
  return `From ${author} to ${reciever}: ${text} (${time.toLocaleDateString()})`;
}

const message = createMessage({
  reciever: "John",
  text: "Hi!",
});

console.log(`message`, message);

//Задание 5

//1

const alphabet =
  "x1y 722a 333 a123v1n a55555a qwe1 1zxc";

const findVowels = (text) => {
  return text.match(/\w\d{1,}\w/gi);
};

const vowels = findVowels(alphabet);

console.log(`vowels`, vowels)

//2

const re = /\S{2,}\.\w{2,}/gi


console.log(`re.test('ex.ua, google.com, yandex.ru, site.com.ua, my-page.com')`, re.test('ex.ua, google.com, yandex.ru, site.com.ua, my-page.com'))

//3

const alphabet1 =
  "a55555a qwe1 1zxc 3131351356161616161 16166161 161116616112";

const findVowels1 = (text) => {
  return text.match(/\d{12,}/gi);
};

const vowels1 = findVowels1(alphabet1);

console.log(`vowels1`, vowels1)