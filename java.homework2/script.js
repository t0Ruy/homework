// (проверка на возраст через else if)
const age = +prompt("your age");

if (age < 18) {
  console.log(`к возрасту ${age} скидка 10%`);
} else if (age <= 65) {
  console.log(`к возрасту ${age} скидка 20%`);
} else if (age > 65) {
  console.log(`к возрасту ${age} скидка 30%`);
}

const age2 = +prompt("your age");
// (проверка на возраст через switch)
const KID = "kid";
const ADULT = "adult";
const OLD = "old";

let category;

if (age2 < 18) {
  category = KID;
} else if (age2 <= 65) {
  category = ADULT;
} else {
  category = OLD;
}

switch (category) {
  case KID:
    console.log(`к возрасту ${age2} скидка 10%`);
    break;
  case ADULT:
    console.log(`к возрасту ${age2} скидка 20%`);
    break;
  case OLD:
    console.log(`к возрасту ${age2} скидка 30%`);
    break;
}
// (проверка четности числа)
const number = +prompt("your number");

if (isNaN(number)) {
  console.log("its not a number");
} else {
  console.log(number % 2 === 0 ? "even" : "odd");
}
// (проверка на юзера)
const username = prompt("имя пользователя");
const password = +prompt("пароль");

if ((username == "user" || username == "admin") && password == 123456) {
  console.log("доступ разрешен");
} else {
  console.log("доступ запрещен");
}
// (посылки и стоимость)
const STANDART = "стандарт";
const EXPRESS = "экспресс";
const PREMIUM = "премиум";
const weight = +prompt("укажите вес посылки");

let priceweight;

if (isNaN(weight) || weight <= 0) {
  alert("неккоректный вес посылки");
} else if (weight < 1) {
  priceweight = 5;
} else if (weight <= 5) {
  priceweight = 10;
} else {
  priceweight = 15;
}
const type = prompt(
  "выберите тип доставки и введите :  стандарт ,экспресс , премиум",
);
if (type == STANDART || type == EXPRESS || type == PREMIUM) {
  let pricetype;
  switch (type) {
    case STANDART:
      pricetype = priceweight * 1;
      break;
    case EXPRESS:
      pricetype = priceweight * 1.5;
      break;
    case PREMIUM:
      pricetype = priceweight * 2;
  }
  alert(`Итоговая стоимость доставки: ${pricetype}`);
} else {
  alert("неверный тип доставки");
}
