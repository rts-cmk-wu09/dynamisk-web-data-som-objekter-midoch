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
