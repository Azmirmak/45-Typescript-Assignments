"use strict";
// Assignment #45 : Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function carsInfo(carManufacturer, model, ...features) {
    let info = {
        Manufacturer: carManufacturer,
        Model: model,
    };
    features.forEach((feature) => {
        let [key, value] = feature.split(":");
        info[key.trim()] = value.trim();
    });
    return info;
}
let car = carsInfo("Honda", "Accord", "Color: Matt Black", "Type : Sedan");
console.log(car);
