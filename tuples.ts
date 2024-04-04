type PersonInfo = readonly [string, number, boolean];

const checkPersonInfo = (person: PersonInfo): string => {
  const [name, age, isDriver] = person;
  return `Name : ${name}, age : ${age} and DL : ${isDriver ? "Yes" : "No"} `;
};

const person1: PersonInfo = ["karan", 24, true];
const person2: PersonInfo = ["roy", 32, false];

// console.log(checkPersonInfo(person1));
// console.log(checkPersonInfo(person2));

/* excercise 1)

 you're building a simple e-commerce app and need to store product information. define a tuple type called productinfo to represent each product containing the following elements
 product name
 price
 quantity */

type ProductInfo = [string, number, number];

const product1: ProductInfo = ["hp laptop", 43000, 12];
const product2: ProductInfo = ["dell laptop", 54000, 10];

const displayProducts = (product: ProductInfo): string => {
  const [name, price, quantity] = product;
  return `Product name : ${name} whose price is ${price} and total in stock are ${quantity}`;
};

// console.log(displayProducts(product1));
// console.log(displayProducts(product2));

// excercise 2

type SubjectGrade = [string, number, string, number, string, number];

const displayAverageOfGrades = (subjects: SubjectGrade) => {
  const [sub1, mark1, sub2, mark2, sub3, mark3] = subjects;
  const average = ((mark1 + mark2 + mark3) / 3).toFixed(2);
  return `Subject name : ${sub1}, grade : ${mark1}| subject name : ${sub2}, grade : ${mark2} | subject name : ${sub3}, grade : ${mark3} The average is ${average}`;
};

const students1: SubjectGrade = ["Math", 80, "English", 93, "Physics", 80];
const students2: SubjectGrade = ["Math", 70, "English", 63, "Physics", 90];
const students3: SubjectGrade = ["Math", 88, "English", 53, "Physics", 100];

// console.log(displayAverageOfGrades(students1));
// console.log(displayAverageOfGrades(students2));
// console.log(displayAverageOfGrades(students3));

// excercise 3

type WeatherInfo = readonly [string, number, string];

const city1: WeatherInfo = ["punjab", 29, "windy"];
const city2: WeatherInfo = ["phagwara", 25, "cloudy"];
const city3: WeatherInfo = ["ludhiana", 30, "sunny"];

const displayWeather = (weather: WeatherInfo): string => {
  const [cityName, cityTemp, cityCondition] = weather;
  return `${cityName} city currently has ${cityTemp}°C and its current condition is ${cityCondition}`;
};

// console.log(displayWeather(city1));
// console.log(displayWeather(city2));
// console.log(displayWeather(city3));
