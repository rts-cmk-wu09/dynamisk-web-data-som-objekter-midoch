// -- Opgave 1 --

let person = {
  firstname: "Ch",
  lastname: "Hc",
  married: false,
  age: 23,
  hometown: "Copenhagen",
  hobbies: ["Gaming", "Investing", "Programming"],
  pet: {
    type: "Cat",
    name: "Tommy",
  },
};

// Console logging

console.log(
  person.firstname,
  person.lastname,
  person.married,
  person.age,
  person.hometown,
  person.hobbies,
  person.pet.type,
  person.pet.name
);

console.log(person["firstname"]);

console.log(person["hobbies"][1]);

console.log(person["pet"]["name"]);

// -- Opgave 2 --

let car = {
  name: "BMW",
  model: "M3",
  isNew: true,
  color: ["Black", "White", "Red"],
  hometown: "Copenhagen",
  wheelSize: {
    size1: "small",
    size2: "medium",
    size3: "large",
  },
};

console.log(
  car.name,
  car.model,
  car.isNew,
  car.color[1],
  car.hometown,
  car.wheelSize.size2
);

car.color.forEach(function (color) {
  console.log("This is color:", color);
});
