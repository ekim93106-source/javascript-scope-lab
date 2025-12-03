// Write your solution in this file!
let burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "strawberryMilkshake";

function addBurger() {
    const newBurger = "Flatburger";
    burgers.push(newBurger);
}

if (true) {
    const anotherNewBurger = "Maple Bacon Burger";
    burgers.push(anotherNewBurger);
}
function changeFeaturedDrink() {
    featuredDrink = "Strawberry Milkshake";
}

console.log(burgers);
console.log(featuredDrink);
addBurger();
changeFeaturedDrink();
console.log(burgers);
console.log(featuredDrink);