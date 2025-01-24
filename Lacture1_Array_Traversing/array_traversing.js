const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits)
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

fruits.forEach((fruit) => {
    console.log(fruit)
})

for (let fruit of fruits) {
    console.log(fruit)
}