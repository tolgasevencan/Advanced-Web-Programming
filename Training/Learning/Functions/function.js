
function changeMyCar(car) {
    car.brand = "Mercedes";
};

let myCar = {brand: "Volkswagen", model: "Golf", year: 2010};

let x, y;

x = myCar.brand;
console.log(x);

changeMyCar(myCar);

y = myCar.brand;
console.log(y);

let factorial = function fa(n) {return n < 2 ? 1 : n * fa(n-1)};
console.log(factorial(5));


