var checkPersonInfo = function (person) {
    var name = person[0], age = person[1], isDriver = person[2];
    return "Name : ".concat(name, ", age : ").concat(age, " and DL : ").concat(isDriver ? "Yes" : "No", " ");
};
var person1 = ["karan", 24, true];
var person2 = ["roy", 32, false];
var product1 = ["hp laptop", 43000, 12];
var product2 = ["dell laptop", 54000, 10];
var displayProducts = function (product) {
    var name = product[0], price = product[1], quantity = product[2];
    return "Product name : ".concat(name, " whose price is ").concat(price, " and total in stock are ").concat(quantity);
};
var displayAverageOfGrades = function (subjects) {
    var sub1 = subjects[0], mark1 = subjects[1], sub2 = subjects[2], mark2 = subjects[3], sub3 = subjects[4], mark3 = subjects[5];
    var average = ((mark1 + mark2 + mark3) / 3).toFixed(2);
    return "Subject name : ".concat(sub1, ", grade : ").concat(mark1, "| subject name : ").concat(sub2, ", grade : ").concat(mark2, " | subject name : ").concat(sub3, ", grade : ").concat(mark3, " The average is ").concat(average);
};
var students1 = ["Math", 80, "English", 93, "Physics", 80];
var students2 = ["Math", 70, "English", 63, "Physics", 90];
var students3 = ["Math", 88, "English", 53, "Physics", 100];
console.log(displayAverageOfGrades(students1));
console.log(displayAverageOfGrades(students2));
console.log(displayAverageOfGrades(students3));
var city1 = ["punjab", 29, "windy"];
var city2 = ["phagwara", 25, "cloudy"];
var city3 = ["ludhiana", 30, "sunny"];
var displayWeather = function (weather) {
    var cityName = weather[0], cityTemp = weather[1], cityCondition = weather[2];
    return "".concat(cityName, " city currently has ").concat(cityTemp, "\u00B0C and its current condition is ").concat(cityCondition);
};
// console.log(displayWeather(city1));
// console.log(displayWeather(city2));
// console.log(displayWeather(city3));
