// // ==================== 1111111111 ====================
// /*  
//   Напиши скрипт, который, для объекта user, последовательно: 
  
//     - добавляет поле mood со значением 'happy'
    
//     - заменяет значение hobby на 'javascript'
    
//     - заменяет значение premium на false
    
//     - выводит содержимое объекта user в формате ключ:значение 
//       используя Object.keys и for...of
    
//     - выводит содержимое объекта user в формате ключ:значение 
//       используя Object.entries и for...of
// */

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
//   };
  
// // ==================== 1111111111 ====================

// // ==================== 2222222222 ====================
// /*
//   Напиши скрипт который определит и выведет в консоль 
//   имя сотрудника который выполнил больше всех задач.

//   Сотрудники и кол-во выполненых задач содержатся 
//   как свойства объекта в формате "имя":"кол-во задач"
// */

// const tasksCompleted = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
//   };
  
// // ==================== 2222222222 ====================

// // ==================== 3333333333 ====================
// /*  
//   Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
//   Функция возвращает количество свойств.
// */

// // Вызовы функции для проверки
// console.log(
//     countProps({})
//   ); // 0
  
//   console.log(
//     countProps({a: 1, b: 3, c: 'hello'})
//   ); // 3
// // ==================== 3333333333 ====================

// // ==================== 4444444444 ====================
// /*  
//   Напиши функцию isObjectEmpty(obj), которая получает 
//   один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
//   Возвращает true если объект пустой, false если не пустой.
// */

// // Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
//   ); // true
  
//   console.log(
//     isObjectEmpty({a: 1})
//   ); // false
  
//   console.log(
//     isObjectEmpty({a: 1, b: 2})
//   ); // false
  
// // ==================== 4444444444 ====================

// // ==================== 5555555555 ====================
// /*  
//   Напиши функцию countTotalSalary(salaries). 
  
//   Функция получает объект зарплат и считает общую сумму запрплаты работников.
//   Возвращает общую сумму зарплаты.
  
//   Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
// */

// // Вызовы функции для проверки
// console.log(
//     countTotalSalary({})
//   ); // 0
  
//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80
//     })
//   ); // 330
  
  
// // ==================== 5555555555 ====================

// // ==================== 6666666666 ====================
// /*  
//   Напиши функцию getAllPropValues(arr, prop), 
//   которая получает массив объектов и имя ключа. 
//   Возвращает массив значений определенного поля prop
//   из каждого объекта в массиве
// */

// const users = [
//     { name: 'Poly', age: 7, mood: 'happy' },
//     { name: 'Mango', age: 4, mood: 'blissful'},
//     { name: 'Ajax', age: 3, mood: 'tired' }
//   ];
  
//   // Вызовы функции для проверки
//   console.log(
//     getAllPropValues(users, 'name')
//   ); // ['Poly', 'Mango', 'Ajax']
  
//   console.log(
//     getAllPropValues(users, 'mood')
//   ); // ['happy', 'blissful', 'tired']
  
//   console.log(
//     getAllPropValues(users, 'active')
//   ); // []
// // ==================== 6666666666 ====================

// // ==================== 7777777777 ====================
// /*  
//  * Расставь отсутствующие this в методах объекта account
// */

// const account = {
//     owner: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["order-1", "order-2", "order-3"],
//     changeDiscount(value) {
//       discount = value;
//     },
//     getOrders() {
//       return orders;
//     },
//     addOrder(cost, order) {
//       balance -= cost;
//       orders.push(order);
//     }
//   };
  
//   account.changeDiscount(0.15);
//   console.log(account.discount); // 0.15
  
//   const orders = account.getOrders();
//   console.log(orders); // ['order-1', 'order-2', 'order-3']
  
//   account.addOrder(5000, "order-4");
//   console.log(account.balance); // 19000
//   console.log(account.orders); // ['order-1', 'order-2', 'order-3', 'order-4']
  
// // ==================== 7777777777 ====================

// // ==================== 8888888888 ====================
// /*  
//  * Расставь отсутствующие this в конструкторе Account
// */

// function Account(login, password, type = "regular") {
//     login = login;
//     password = password;
//     type = type;
  
//     changePassword = function(newPassword) {
//       password = newPassword;
//     };
  
//     getInfo = function() {
//       console.log(`
//         Login: ${login}, 
//         Pass: ${password}, 
//         Type: ${type}
//       `);
//     };
//   }
  
//   const account = new Account("Mango", "qwe123", "premium");
  
//   console.log(account.login); // 'Mango'
//   console.log(account.password); // 'qwe123'
//   console.log(account.type); // 'premium'
  
//   account.changePassword("asdzxc");
//   console.log(account.password); // 'asdzxc'
  
//   account.getInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
  
// // ==================== 8888888888 ====================

// // ==================== 9999999999 ====================
// /*  
//   Напиши функцию-конструкор User для создания 
//   пользователя со следующим свойствами:
//     - name - строка (имя)
//     - age - число (возраст)
//     - friends - число (кол-во друзей)

//   Имя, активность, возраст и друзей, 
//   будут переданы при вызове конструктора User.
  
//   Добавь метод getInfo(), который, выводит строку:
//   `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`
// */

// const mango = new User({ name: "Mango", age: 2, friends: 20 });
// mango.getInfo(); // User Mango is 2 years old and has 20 friends

// const poly = new User({ name: "Poly", age: 3, friends: 17 });
// poly.getInfo(); // User Poly is 3 years old and has 17 friends

// // ==================== 9999999999 ====================