// Checking if a number is big
const biggerCheck = function (number) {
    if (number > 100) {
        return true

    } else {
        return false
    }
};
const check = biggerCheck(85);
console.log(check);
// biggerCheck(150) is true bigger(85) is false
// do

//Bouncer at a club
const brenda = function (maxPeople, currentPeople, age) {
    if (currentPeople < maxPeople && age > 18) {
        return "come in";
    } else if (currentPeople < maxPeople && age < 18) {
        return "this is a club for adults";
    } else {
        return "it's too busy now, come back later"
    }
}
entree = brenda(100, 100, 17);
console.log(entree);
// do

//Calculating the average
const calculatingAverage = function(number1, number2, number3, number4, number5){
    const sum = (number1 + number2 + number3 + number4 + number5) / 5
    return Math.round(sum);

}
const average = calculatingAverage(1, 2, 3, 4, 5);
console.log(average);
// produce